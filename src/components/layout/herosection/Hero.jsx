import React from 'react';
import './Hero.scss';
/* import water from '../../../assets/videos/water.mp4'; */
import beach from '../../../assets/videos/beach.mp4';
/* import {EmailForm} from '../../utils'; */

const Hero = () => {
    return (
        <section id="hero-container">
            <figure className='herobg'>
                <video className='videobg' autoPlay="autoPlay" loop="loop" muted="muted" preload="auto" playsInline="playsInline" src={beach} type="video/mp4"></video>
            </figure>
            <header className='herocontent'>
                <h1 className='hero-h1'>Contact</h1>
                <p className='hero-p'>Like what you see? Send me a message!</p>
            </header>
            
        </section>
    );
};

export default Hero;
