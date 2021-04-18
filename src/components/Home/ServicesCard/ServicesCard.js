import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';

export let bookId ;
export let bookPrice ;
export let bookDescription ;
const ServicesCard = ({service}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory()
    const handelBook = (id,price,description) => {
        // console.log(id);
        if(loggedInUser.email){
            history.push('/book')
            bookId = id
            bookPrice = price
            bookDescription = description
        }else{
            history.push('/login')
        }
    }
    return (
        <div className="col-md-4 col-sm-6 text-center">
            <div className="p-3 border service-card rounded">
                <img className="w-100 rounded" src={service.imgUrl} alt=""/>
                <h5 className=" main-font-p fw-bold text-uppercase py-2">{service.title}</h5>
                <p>{service.description}</p>
                <div className="d-flex justify-content-between align-items-center btn-section rounded p-2">
                    <h6>Price: $ {service.price}</h6>
                    <button onClick={() => handelBook(service._id,service.price,service.description)} className="main-btn">Book</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;