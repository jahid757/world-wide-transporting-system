import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../SideBar/Sidebar';
import SweetAlert from 'react-bootstrap-sweetalert';
const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [alert,setAlert] = useState(false)
    const onSubmit = data => {
        fetch('https://young-stream-14324.herokuapp.com/addReview',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data =>{
            setAlert(true)
        })
    };
    const successAlert = () => {
        if(alert === true){
            return <SweetAlert success title="Good job!" onConfirm={() => setAlert(false)}>
                Review Added!
            </SweetAlert>
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10 review">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input placeholder="Enter Your Name" className="form-control my-2"{...register("name", { required: true })} />
                        {errors.name && <small>This field is required</small>}

                        <input placeholder="Enter Your Company Name" className="form-control my-2"{...register("companyName", { required: true })} />
                        {errors.companyName && <small>This field is required</small>}

                        <textarea placeholder="Enter Description" style={{ height:'150px'}} className="form-control my-2"{...register("description", { required: true })}></textarea>
                        {errors.description && <small>This field is required</small>}
                        
                        <button type="submit" className="btn my-2 btn-primary">Review</button>
                    </form>
                </div>
            </div>
            {
                successAlert()
            }
        </div>
    );
};

export default Review;