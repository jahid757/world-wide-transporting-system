import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import logistic from '../../../Images/cargo.jpg'
import SweetAlert from 'react-bootstrap-sweetalert';

const ContactForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [alert,setAlert] = useState(false)
    const onSubmit = data => {
        const message = data;
        fetch('http://localhost:5000/sendMessage',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
        .then(response => response.json())
        .then(result =>{
            setAlert(true)
        })
    };
    const successAlert = () => {
        if(alert === true){
            return <SweetAlert success title="Good job!" onConfirm={() => setAlert(false)}>
                Message Sent!
            </SweetAlert>
        }
    }
    return (
        <div className="container contact-form pb-5" id="contact">
            <h1 className="main-font main-color text-center fw-bold pb-5">Contact Us</h1>
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Enter Your Name" className="form-control p-2 mb-2 d-block" {...register("name", { required: true })} />
                        {errors.name && <small>This field is required</small>}

                        <input placeholder="Enter Your E-mail" className="form-control p-2 mb-2 d-block" type="email" {...register("email", { required: true })} />
                        {errors.email && <small>This field is required</small>}

                        <textarea placeholder="Enter Your Message" className="form-control p-2 mb-2 d-block" {...register("message", { required: true })} ></textarea>
                        {errors.message && <small className="d-block">This field is required</small>}
                        
                        <button className="main-btn" type="submit" >Send Message</button>
                    </form>
                </div>
                <div className="col-md-6 d-none d-md-block">
                    <img className="w-100" src={logistic} alt=""/>
                </div>
            </div>
            {
                successAlert()
            }
        </div>
    );
};

export default ContactForm;