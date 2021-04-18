import React from 'react';
import slideImg1 from '../../../Images/truck.jpg'
import slideImg2 from '../../../Images/plane.jpg'
import slideImg3 from '../../../Images/delivery.jpg'

const Slider = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={slideImg1} className="d-block w-100" alt="Slider img"/>
                <div className="carousel-caption d-none d-md-block">
                    <h1 className=" fw-bold text-uppercase">unbetable trucking & <br/> transport service</h1>
                    <p className="main-font-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptate quam soluta ipsam, perspiciatis, veritatis dolore porro dolorum, eligendi reprehenderit autem quidem? Beatae nam tenetur est fuga tempore voluptates voluptatum?</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={slideImg2} className="d-block w-100" alt="Slider img"/>
                <div className="carousel-caption d-none d-md-block">
                    <h1 className="main-font fw-bold text-uppercase">ground or air, <br/> there is no stopping for us</h1>
                    <p className="main-font-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores a rem adipisci nostrum suscipit. Eos atque dolorem nemo ab alias aliquid ipsa repellendus omnis voluptas debitis, ex necessitatibus dolores ullam?</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={slideImg3} className="img-fluid d-block w-100" alt="Slider img"/>
                <div className="carousel-caption d-none d-md-block">
                    <h1 className="main-font fw-bold text-uppercase">Fast delivery service in Anywhere</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis distinctio temporibus perferendis odit saepe sunt! Iusto nulla dolorum eos. Quod eos illum veniam neque voluptates fugiat labore, officiis eveniet alias.</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Slider;