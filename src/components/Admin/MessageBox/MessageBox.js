import React from 'react';

const MessageBox = ({message}) => {
    return (
        <div className="col-md-6">
            <div className="border p-3 mb-3">
                <h3>{message.name}</h3>
                <p><small>{message.email}</small></p>
                <p>{message.message}</p>
            </div>
        </div>
    );
};

export default MessageBox;