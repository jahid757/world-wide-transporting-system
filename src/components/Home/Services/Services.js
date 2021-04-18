import React, { useEffect, useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {
    const [service,setService] = useState([]);
    useEffect(() => {
        fetch('https://young-stream-14324.herokuapp.com/services')
        .then(response => response.json())
        .then(data => {
            setService(data)
        })
    },[])

    return (
        <div className="container pb-5">
            <h1 className="text-center main-font main-color pb-5 fw-bold">Our Services</h1>
            <div className="row">
                {
                    service.map(serviceCard => <ServicesCard key={serviceCard._id} service={serviceCard}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;