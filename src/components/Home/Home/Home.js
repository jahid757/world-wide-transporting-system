import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import ServicesRead from '../ServicesRead/ServicesRead';
import Slider from '../Slider/Slider'
import TestimonialWrap from '../TestimonialWrap/TestimonialWrap';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <ServicesRead></ServicesRead>
            <Services></Services>
            <TestimonialWrap></TestimonialWrap>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;