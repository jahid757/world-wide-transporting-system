import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { bookDescription, bookId, bookPrice } from '../../Home/ServicesCard/ServicesCard';
import Sidebar from '../SideBar/Sidebar';
import ProcessPayment from '../../ProcessPayment/ProcessPayment'
const Book = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [paymentUser,setPaymentUser] = useState(null)
    

    const id = bookId
    const price = bookPrice
    const description = bookDescription
    const [serviceDetail,setServiceDetail] = useState({});
    useEffect(() => {
        fetch('https://young-stream-14324.herokuapp.com/book',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        })
        .then(response => response.json())
        .then(data =>{
            setServiceDetail(data[0]);
        })
    },[id])



    const onSubmit = data => {
        data.serviceName = serviceDetail.title
        data.statusValue = 'Pending'
        data.price = serviceDetail.price
        data.description = description
        setPaymentUser(data)
    };
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10">
                    <form style={{display: paymentUser ? 'none' : 'block' }} onSubmit={handleSubmit(onSubmit)}>
                    
                        <input placeholder="Enter Your Name" className="form-control my-2"  {...register("name", { required: true })} />
                        {errors.name && <span>This field is required</span>}

                        <input placeholder="Enter Your Email" className="form-control my-2" {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}

                        <input readonly id="serviceData" className="form-control my-2" value={serviceDetail.title} {...register("serviceName")} />
                        <button className="btn btn-primary" type="submit">Book Now</button>

                    </form>
                    <div style={{display: paymentUser ? 'block' : 'none'}} className="col-md-6">
                        <h2 className="mb-4">Please Payment</h2>
                        <ProcessPayment description={description} price={price} userInfo={paymentUser}></ProcessPayment>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;