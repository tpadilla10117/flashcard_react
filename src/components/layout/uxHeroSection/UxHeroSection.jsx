import React from 'react';
import './UxHeroSection.scss';
import uxbeach from '../../../assets/images/uxbeach.jpg';

const UxHeroSection = () => {
    return (
        <section id="ux-hero-container">
            <figure className='ux-heroSection-bg'>
                <img className='ux-hero-img' src={uxbeach} alt='Cabanas along a beach' /* autoPlay loop muted src={water} type="video/mp4" *//>
            </figure>
            <header className='ux-hero-content'>
                <h1 className='ux-hero-h1'>UX Designer</h1>
                <p className='ux-hero-p'>Here is a collection of my UX Case Studies:</p>
            </header>
            
        </section>
    );
};

export default UxHeroSection;
