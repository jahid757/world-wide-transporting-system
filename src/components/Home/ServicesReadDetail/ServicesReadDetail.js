import React from 'react';
import { BsArrowRight } from "react-icons/bs";

const ServicesReadDetail = ({service}) => {
    return (
        <div className="col-md-4 col-sm-6 mb-4">
            <img className="w-100" src={service.img} alt=""/>
            <h5 className="main-font my-1 fw-bold">{service.title}</h5>
            <p className="text-secondary">{service.description}</p>
            <button className="main-btn fw-bold">Read More <BsArrowRight/></button>
        </div>
    );
};

export default ServicesReadDetail;