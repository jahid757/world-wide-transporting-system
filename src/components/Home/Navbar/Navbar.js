import React, { useContext } from 'react';
import { ImAirplane } from "react-icons/im";
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand " to="/"><ImAirplane/></Link>
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/admin">Admin</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/">About Us</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="#contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                {loggedInUser.email ? <Link className="nav-link" to="/">{loggedInUser.name}</Link> : <Link className="nav-link" to="/login">Login</Link>}
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
    );
};

export default Navbar;