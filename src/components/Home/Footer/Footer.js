import React from 'react';
import FooterData from '../FooterData/FooterData';
import { AiFillYoutube,AiOutlineTwitter } from "react-icons/ai";
import { FaGooglePlusG } from "react-icons/fa";
import { Link } from 'react-router-dom';

const footerData = [
    {
        link1:'About Us',
        link2:'Cart',
        link3:'Contact',
        link4:'Our Service',
        link5:'Contact',
        arrow:true,
        _id:1
    },
    {
        link1:'Classic Blog',
        link2:'Checkout',
        link3:'My Account',
        link4:'Shop',
        link5:'Classic Blog',
        arrow:true,
        _id:2
    },
    {
        link1:'14 Tottenham Road, London, England.',
        link2:'(102) 6666 8888',
        link3:'info@transport.com',
        link4:'(102) 8888 9999',
        link5:'Mon - Sat: 9:00 - 18:00',
        arrow:false,
        _id:3
    },
]

const Footer = () => {
    return (
        <div className="footer bg-dark py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <p className="text-secondary main-font-p">
                        Transport offers a host of logistic management services and supply chain solutions. We provide innovative solutions with the best people, processes, and technology.
                        </p>
                        <p className="text-secondary footer-icon">
                            <Link><span><AiFillYoutube/></span></Link>
                            <Link><span><FaGooglePlusG/></span></Link>
                            <Link><span><AiOutlineTwitter/></span></Link>
                        </p>
                    </div>
                    {
                        footerData.map(footerData => <FooterData key={footerData._id} footer={footerData}></FooterData>)
                    }
                </div>
            </div>
            <p className="text-secondary text-center pb-0 mb-0">&copy; Designed By Jahid Hasan {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;