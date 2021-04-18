import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../SideBar/Sidebar';
import SweetAlert from 'react-bootstrap-sweetalert';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgUrl,setImgUrl] = useState('');
    const [alert,setAlert] = useState(false)

    const handelImgUpload = event => {
        // console.log(event.target.files[0]);
        const imgData = new FormData()
        imgData.set('key', '19693cb30f09ee1ec72107c86aa67582');
        imgData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',imgData)
        .then(function (response) {
            setImgUrl(response.data.data.display_url);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    const onSubmit = data => {
        const serviceData = {...data,imgUrl}
        fetch('https://young-stream-14324.herokuapp.com/addService',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(response => response.json())
        .then(data =>{
            if(data === true){
                setAlert(true)
            }
        })
    };

    const successAlert = () => {
        if(alert === true){
            return <SweetAlert success title="Good job!" onConfirm={() => setAlert(false)}>
                You Add A New Service!
            </SweetAlert>
        }
    }




    console.log(imgUrl);
    return (
        <div className="container service-add">
            <div className="row">
                <div className="col-md-2">
                    <SideBar/>
                </div>
                <div className="col-md-10">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input placeholder="Enter Service Title" className="form-control my-2" {...register("title", { required: true })} />
                        {errors.title && <small>This field is required</small>}

                        <input placeholder="Enter Service Price" className="form-control my-2" {...register("price", { required: true })} />
                        {errors.price && <small>This field is required</small>}

                        <textarea style={{height:'150px'}} placeholder="Enter Service Description" className="form-control my-2" {...register("description", { required: true })} ></textarea>
                        {errors.description && <small>This field is required</small>}

                        <input className="form-control my-2" onChange={handelImgUpload} type="file"/>
                        {errors.description && <small>This field is required</small>} 
                        
                        <button className="mt-2 btn btn-primary" type="submit">Add Service</button>
                    </form>
                </div>
            </div>
            {
                successAlert()
            }
        </div>
    );
};

export default AddService;