import React from 'react';

const OrderDetail = ({order}) => {
    const handelStatusChanged = (id) => {
        const status = document.getElementById('status')
        const newStatus = {
            name:order.name,
            email:order.email,
            statusValue:status.value
        }

        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newStatus)
        })
    }
    
    return (
        <tr>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.price}</td>
            <td>{order.serviceName}</td>
            {
                order.name && 
                <td>
                <select onChange={() => handelStatusChanged(order._id)} name="status" id="status">
                    <option value="Pending">Pending</option>
                    <option value="Running">Running</option>
                    <option value="Success">Success</option>
                </select>
            </td>
            }
        </tr>
    );
};

export default OrderDetail;