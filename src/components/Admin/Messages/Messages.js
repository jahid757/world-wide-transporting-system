import React, { useState } from 'react';
import MessageBox from '../MessageBox/MessageBox';
import Sidebar from '../SideBar/Sidebar';

const Messages = () => {
    const [messages,setMessage] = useState([])

    fetch('https://young-stream-14324.herokuapp.com/message')
    .then(response => response.json())
    .then(data =>{
        setMessage(data)
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-10 pt-3">
                    <div className="row">
                        { messages.length ===0 &&
                            <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                              <span className="visually-hidden">Loading...</span>
                            </div>
                          </div>
                        }
                        { 
                            messages.map(message => <MessageBox key={message._id} message={message}></MessageBox>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;