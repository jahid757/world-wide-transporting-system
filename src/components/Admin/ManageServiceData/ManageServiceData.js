import React from 'react';

const ManageData = ({manage}) => {
    const handelDelete = (id) => {
        fetch(`https://young-stream-14324.herokuapp.com/delete/${id}`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:''
        })
    }
    return (
        <div className="col-md-4">
            <div className="p-3 border manage-card rounded">
                <img className="w-100 rounded" src={manage.imgUrl} alt=""/>
                <h5 className=" main-font-p fw-bold text-uppercase py-2">{manage.title}</h5>
                <p>{manage.description}</p>
                <div className="d-flex justify-content-between align-items-center btn-section rounded p-2">
                    <h6>Price: $ {manage.price}</h6>
                    <button onClick={() => handelDelete(manage._id)} className="main-btn">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManageData;