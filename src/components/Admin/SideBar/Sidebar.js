import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';
import { AiFillHome,AiOutlineFileText,AiOutlineShoppingCart } from "react-icons/ai";
import { MdMailOutline } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { TiThLargeOutline } from "react-icons/ti";
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://young-stream-14324.herokuapp.com/isAdmin',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:loggedInUser.email})
        })
        .then(response => response.json())
        .then(result => {
            setIsAdmin(result);
        })
    },[loggedInUser.email])
    return (
        <div className="sidebar bg-dark">
            <h2 className="text-white main-font ms-4 pt-3 text-uppercase">Transport</h2>
            <ul>
                {isAdmin && <div>
                    <li>
                        <Link to="/dashboard"><AiFillHome/> Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/orderList"><AiOutlineFileText/> Order List</Link>
                    </li>
                    <li>
                        <Link to="/messages"><MdMailOutline/> Messages</Link>
                    </li>
                    <li>
                        <Link to="/addServices"><IoMdAdd/> Add Service</Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin"><HiUserAdd/> Make Admin</Link>
                    </li>
                    <li>
                        <Link to="/manageService"><TiThLargeOutline/> Manage Service</Link>
                    </li>
                </div>}

                {isAdmin === false && <div>
                    <li>
                        <Link to="/bookingList"><AiOutlineShoppingCart/> Booking List</Link>
                    </li>
                    <li>
                        <Link to="/review"><AiOutlineShoppingCart/> Review</Link>
                    </li>
                </div>}
            </ul>
        </div>
    );
};

export default Sidebar;