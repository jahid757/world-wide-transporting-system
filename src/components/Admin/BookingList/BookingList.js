import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingListCard from '../BookingListCard/BookingListCard';
import Sidebar from '../SideBar/Sidebar';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [booking,setBooking] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/userBooking?email=${loggedInUser.email}`)
        .then(response => response.json())
        .then(data => {
            setBooking(data);
        })
    },[loggedInUser.email])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10">
                    {
                        booking.length === 0 && <h2>No Booking Yet</h2>
                    }
                    <div className="row pt-3">
                        {
                            booking.map(book => <BookingListCard book ={book}></BookingListCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;