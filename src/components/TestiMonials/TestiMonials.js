import React, { useEffect, useState } from 'react';
import TestiMonialsDetails from '../TestiMonialsDetails/TestiMonialsDetails'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userPic from '../../image/image.png';
import './TestiMonials.css'

const TestiMonials = () => {
    const [centerCardIndex, setCenterCardIndex] = useState(0);
   
    const testiMonials = [
        {
            name: 'Rekob Ramya',
            // description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            title: 'Designer',
            img: userPic,
           
        },
        {
            name: 'Brandon Savage',
            // description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            title: 'Designer',
            img: userPic,
          
        },
        {
            name: 'Steve Burns',
            // description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            title: 'Designer',
            img: userPic,
           
        },
        {
            name: 'Kevin Canlas',
            // description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            title: 'Designer',
            img: userPic,
        },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: false,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="testimonial" >
            <div className="container mt-5">

                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel
                            id="customer-testimonoals"
                            className="owl-carousel owl-theme"
                            {...options}
                            onChanged={({ item }) => setCenterCardIndex(item.index)}
                        >
                            {
                                testiMonials.length === 0 ?
                                    <div class="item">
                                        <div class="shadow-effect">
                                            <img class="img-circle" src={userPic} />
                
                                        </div>
                                        <div >
                                            <h5 className='h5'>Rajon Rony</h5>
                                            <p className='small'>ITALY</p>
                                        </div>
                                    </div> :
                                    testiMonials.map((testiMonialDetail, index) => {
                                        return (
                                            <TestiMonialsDetails
                                                testiMonialDetail={testiMonialDetail}
                                                key={testiMonialDetail._key}
                                                index={index}
                                                centerCardIndex={centerCardIndex}
                                            />
                                        );
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestiMonials;