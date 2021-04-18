import React from 'react';
import './Dashboard.css'
import Sidebar from '../SideBar/Sidebar';
import { CgSandClock } from "react-icons/cg";
import { FaRunning,FaCheckCircle } from "react-icons/fa";
const Dashboard = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 pt-3">
                    <div className="row">

                        <div className="col-md-3 border mx-3">
                            <div className="d-flex align-items-center justify-content-center dashboard-icon">
                                <div className="ms-0 mx-3">
                                    <h3 className="mb-0 pb-0">10</h3>
                                    <p className="text-secondary">Pending Order</p>
                                </div>
                                <CgSandClock/>
                            </div>
                        </div>

                        <div className="col-md-3 border mx-3">
                            <div className="d-flex align-items-center justify-content-center dashboard-icon">
                                <div className="ms-0 mx-3">
                                    <h3 className="mb-0 pb-0">10</h3>
                                    <p className="text-secondary">Running Order</p>
                                </div>
                                <FaRunning/>
                            </div>
                        </div>

                        <div className="col-md-3 border mx-3">
                            <div className="d-flex align-items-center justify-content-center dashboard-icon">
                                <div className="ms-0 mx-3">
                                    <h3 className="mb-0 pb-0">10</h3>
                                    <p className="text-secondary">Competed Order</p>
                                </div>
                                <FaCheckCircle/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;