import React from 'react';
import { AiFillStar } from "react-icons/ai";

const TestimonialCard = ({testimonial}) => {
    return (
        <div className="col-md-4 mb-5">
            <div className="card content mx-auto" >
                <div className="card-head d-flex align-items-center ">
                    <img className="testimonial_img" src='https://i.ibb.co/rQB7jLg/avatar.jpg' alt=""/>
                    <div>
                        <h5 className="main-font-p mb-0 pb-0">{testimonial.name}</h5>
                        <p className="mb-0 pb-0"><small>{testimonial.companyName}</small></p>
                    </div>
                </div>
                <div className="card-body">
                    <p className="text-secondary">{testimonial.description}</p>
                    <p className="pb-0 mb-0 ratting-star"><span><AiFillStar/></span><span><AiFillStar/></span><span><AiFillStar/></span><span><AiFillStar/></span><span><AiFillStar/></span></p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;