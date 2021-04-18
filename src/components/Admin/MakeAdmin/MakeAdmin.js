import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../SideBar/Sidebar';
import SweetAlert from 'react-bootstrap-sweetalert';

const MakeAdmin = () => {
    const [alert,setAlert] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const admin = data;

        fetch('http://localhost:5000/adminList',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
        .then(response => response.json())
        .then(result => {
            setAlert(true)
        })
    }
    const successAlert = () => {
        if(alert === true){
            return <SweetAlert success title="Good job!" onConfirm={() => setAlert(false)}>
                You Add A New Admin!
            </SweetAlert>
        }
    }
    return (
        <div className="container admin-add">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10">
                    <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Enter Admin Name" className="form-control my-2" {...register("name", { required: true })} />
                        {errors.name && <small>This field is required</small>}

                        <input type="email" placeholder="Enter Admin Email" className="form-control my-2" {...register("email", { required: true })} />
                        {errors.email && <small>This field is required</small>}

                        <button className="mt-2 btn btn-primary" type="submit">Make Admin</button>
                    </form>
                </div>
            </div>
            {
                successAlert()
            }
        </div>
    );
};

export default MakeAdmin;