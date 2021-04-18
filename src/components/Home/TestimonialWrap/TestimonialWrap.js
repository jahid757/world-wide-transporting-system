import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const TestimonialWrap = () => {
    const [testimonialData,setTestimonialData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/testimonial')
        .then(response => response.json())
        .then(data =>{
            setTestimonialData(data)
        })
    },[])
    return (
        <div className="container py-4">
            <h1 className="main-color main-font fw-bold text-center pb-5">Testimonial</h1>
            <div className="row">
            {
                testimonialData.map( testimonial => <TestimonialCard key={testimonial._id} testimonial={testimonial}></TestimonialCard>)
            }
            </div>
        </div>
    );
};

export default TestimonialWrap;