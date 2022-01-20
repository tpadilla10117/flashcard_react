import React from 'react';
import '../uxHeroSection/UxHeroSection.scss';
import sunsetwaves from '../../../assets/images/sunsetwaves.jpg';

const AboutHeroSection = () => {
    return (
        <section id="ux-hero-container">
            <div className='ux-heroSection-bg'>
                <img className='ux-hero-img' src={sunsetwaves} alt='Waves with a sunset in the background' /* autoPlay loop muted src={water} type="video/mp4" *//>
            </div>
            <div className='ux-hero-content'>
                <h1 className='ux-hero-h1'>Hello There!</h1>
                <p className='ux-hero-p'>Learn more about me below:</p>
            </div>
            
        </section>
    );
};

export default AboutHeroSection;