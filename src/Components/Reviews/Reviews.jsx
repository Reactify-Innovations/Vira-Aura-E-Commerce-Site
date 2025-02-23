import React, { useState } from "react";
import "./Reviews.css"; 

function Reviews() {
    const [reviews, setReviews] = useState([]);

    const [newReview, setNewReview] = useState({
        name: "",
        rating: "",
        comment: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!newReview.name || !newReview.rating || !newReview.comment) {
            alert("Please fill all fields.");
            return;
        }

        setReviews([...reviews, newReview]);

        setNewReview({ name: "", rating: "", comment: "" });
    };

    return (
        <div className="reviews-container">
            <h2>Product Reviews</h2>

            {/* Form to submit review */}
            <form onSubmit={handleSubmit} className="review-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={newReview.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="number"
                    name="rating"
                    placeholder="Rating (1-5)"
                    value={newReview.rating}
                    onChange={handleInputChange}
                    min="1"
                    max="5"
                    required
                />
                <textarea
                    name="comment"
                    placeholder="Your Review"
                    value={newReview.comment}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Submit Review</button>
            </form>

            {/* Display all reviews */}
            <div className="reviews-section">
                {reviews.length === 0 ? (
                    <p>No reviews yet. Be the first to review!</p>
                ) : (
                    reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <span>Username: {review.name}</span>
                            <span>Rating⭐: {review.rating}</span>
                            <p>Review: {review.comment}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Reviews;
