import React, { useEffect, useState } from 'react';
import OrderDetail from '../OrderDetail/OrderDetail';
import SideBar from '../SideBar/Sidebar'
const OrderList = () => {
    const [order,setOrder] = useState([])

    useEffect(() => {
        fetch('https://young-stream-14324.herokuapp.com/payment')
        .then(response => response.json())
        .then(data =>{
            setOrder(data)
        })
    },[])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <SideBar/>
                </div>
                <div className="col-md-10">
                    <h2>Payment List</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Service</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                order.map(order => <OrderDetail key={order._id} order={order}></OrderDetail>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderList;