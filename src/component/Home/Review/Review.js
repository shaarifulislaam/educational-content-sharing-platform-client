import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';



const Review = () => {

    const [review,setReviews]=useState([]);
    
    
        useEffect(() =>{
                fetch('https://educational-contnet-sharing-platform.onrender.com/reviews')
                .then(res=>res.json())
                .then(data=>setReviews(data))
                
           },[])

    return (
        <section className="bgc-color">
        <div className="container ">
            <div className="section-header mt-3 my-5">
                <h1 className="text-center text-style">Student Review</h1>
                
            </div>
            <div className="row d-flex justify-content-center">
                 {
                    review.map(testimonial => <ReviewCard testimonial={testimonial} key={testimonial._id}/>)
                 }
             </div>
        </div>
    </section>
    );
};

export default Review;