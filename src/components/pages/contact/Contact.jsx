import React from 'react';
import { /* VideoSection, */ EmailForm, Footer, Hero } from '../../utils';
/* import beach from '../../../assets/videos/beach.mp4'; */
import './Contact.scss';

const Contact = () => {
    return (
        <div id='contact-container'>
            <main className="contact-wrapper">
                {/* <VideoSection /> */}
                {/* <video className='contact-videobg' autoPlay loop muted src={beach} type="video/mp4"></video> */}
                <EmailForm />
                <Hero />
            </main>
            <Footer />
        </div>
    );
};

export default Contact;