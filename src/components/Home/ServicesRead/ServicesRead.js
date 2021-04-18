import React from 'react';
import cargo from '../../../Images/cargo.jpg';
import logistic from '../../../Images/logistic.jpg';
import storage from '../../../Images/storage.jpg'
import ServicesReadDetail from '../ServicesReadDetail/ServicesReadDetail';

const servicesRead = [
    {
        title: 'CARGO',
        description: 'Transport specializes in the safe transportation of office, computer, and medical related equipment. From a single laptop to an...',
        img:cargo,
        id:1
    },
    {
        title: 'LOGISTIC SERVICE',
        description: 'Transport offers a host of logistic management services and supply chain solutions. We provide innovative solutions with the best...',
        img:logistic,
        id:2
    },
    {
        title: 'STORAGE',
        description: 'Transport has access to over a ten million square feet of storage space in strategic partnership locations throughout the...',
        img:storage,
        id:3
    }
]

const ServicesRead = () => {
    return (
        <div className="container py-5">
            <div className="row">
                {
                    servicesRead.map(servicesRead => <ServicesReadDetail key={servicesRead.id} service = {servicesRead}></ServicesReadDetail>)
                }
            </div>
        </div>
    );
};

export default ServicesRead;