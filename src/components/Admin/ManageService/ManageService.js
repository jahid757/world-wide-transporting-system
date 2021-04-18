import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ManageServiceData from '../ManageServiceData/ManageServiceData';
import Sidebar from '../SideBar/Sidebar';

const ManageService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [manageData,setManageData] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(response => response.json())
        .then(data =>{
            setManageData(data)
        })
    },[])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10">
                    <div className="row pt-5">
                        {
                            manageData.map(manage => <ManageServiceData manage={manage}></ManageServiceData>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageService;