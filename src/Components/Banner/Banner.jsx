import React, {useState, useRef, useEffect} from "react";
import './Banner.css'

function Banner() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
    
        const handleVideoEnd = () => {
            video.play();
        };
    
        if (video) {
            video.play(); // Autoplay when component loads
            video.addEventListener("ended", handleVideoEnd);
        }
    
        return () => {
            if (video) {
                video.removeEventListener("ended", handleVideoEnd);
            }
        };
    }, []);

    const mediaFiles = [
        {type: "video/mp4", src: "/components-images/Banners/Banner-1.mp4"},
        {type: "video/mp4", src: "/components-images/Banners/Banner-2.mp4"},
        {type: "video/mp4", src: "/components-images/Banners/Banner-3.mp4"}
    ];

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex === 0 ? mediaFiles.length - 1 : prevIndex - 1;
            return newIndex;
        });
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex === mediaFiles.length - 1 ? 0 : prevIndex + 1;
            return newIndex;
        });
    };

    useEffect(() => {
            const interval = setInterval(nextSlide, 15000);
            return () => clearInterval(interval);
    }, []);


    return(
        <>
        <div className="banner-container">
            <div className="banner-content">
                <div className="slider">
                    <button className="prev" onClick={prevSlide}>
                        ❮
                    </button>
                    <div className="media-container">
                            <video
                                key={mediaFiles[currentIndex].src} 
                                ref={videoRef}
                                src={mediaFiles[currentIndex].src}
                                type={mediaFiles[currentIndex].type}
                                autoPlay
                                muted
                                playsInline
                            />
                    </div>
                    <button className="next" onClick={nextSlide}>
                        ❯
                    </button>
                </div>
                
            </div>
            
        </div>
        </>
    );
}

export default Banner;