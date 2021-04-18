import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FaFax } from "react-icons/fa";
import { BiStopwatch } from "react-icons/bi";
import { Link } from 'react-router-dom';

const FooterData = ({footer}) => {
    return (
        <div className="col-md-3">
            <ul className="footer">
                <li>
                    <Link to="/">{footer.arrow ? <BsArrowRight/> : <MdLocationOn/>} {footer.link1}</Link>
                </li>
                <li>
                    <Link to="/">{footer.arrow ? <BsArrowRight/> : <AiTwotonePhone/>} {footer.link2}</Link>
                </li>
                <li>
                    <Link to="/">{footer.arrow ? <BsArrowRight/> : <HiOutlineMail/>} {footer.link3}</Link>
                </li>
                <li>
                    <Link to="/">{footer.arrow ? <BsArrowRight/> : <FaFax/>} {footer.link4}</Link>
                </li>
                <li>
                    <Link to="/">{footer.arrow ? <BsArrowRight/> : <BiStopwatch/>} {footer.link5}</Link>
                </li>
            </ul>
        </div>
    );
};

export default FooterData;