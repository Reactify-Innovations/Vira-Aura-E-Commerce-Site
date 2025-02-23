import React, { useState, useRef, useEffect } from "react";
import "./Banner.css";

function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef(null);

    const mediaFiles = [
        { type: "video/mp4", src: "/components-images/Banners/Banner-1.mp4" },
        { type: "video/mp4", src: "/components-images/Banners/Banner-2.mp4" },
        { type: "video/mp4", src: "/components-images/Banners/Banner-3.mp4" }
    ];

    useEffect(() => {
        const video = videoRef.current;

        const handleVideoEnd = () => {
            video.play();
        };

        if (video) {
            video.play().catch(error => console.log("Playback error:", error)); // Catch autoplay errors
            video.addEventListener("ended", handleVideoEnd);
        }

        return () => {
            if (video) {
                video.removeEventListener("ended", handleVideoEnd);
            }
        };
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.src = mediaFiles[currentIndex].src;
            videoRef.current.load(); // Reload the video source
            videoRef.current.play().catch(error => console.log("Playback error:", error));
        }
    }, [currentIndex]);

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? mediaFiles.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === mediaFiles.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 15000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="banner-container">
            <div className="banner-content">
                <div className="slider">
                    <button className="prev" onClick={prevSlide}>❮</button>
                    <div className="media-container">
                        <video
                            ref={videoRef}
                            type="video/mp4"
                            autoPlay
                            muted
                            playsInline
                            controls={false}
                        />
                    </div>
                    <button className="next" onClick={nextSlide}>❯</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
