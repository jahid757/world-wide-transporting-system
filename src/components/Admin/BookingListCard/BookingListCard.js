import React from 'react';

const BookingListCard = ({book}) => {
    return (
        <div className="col-md-4">
            <div className="p-2 border bg-light rounded">
                <div className="d-flex justify-content-between">
                    <div>
                        <h5>{book.serviceName}</h5>
                        <p><small>Price: ${book.price}</small></p>
                    </div>
                    <p className="text-warning">{book.statusValue}</p>
                </div>
                <p>{book.description}</p>
            </div>
        </div>
    );
};

export default BookingListCard;