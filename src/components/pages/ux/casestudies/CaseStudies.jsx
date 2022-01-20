import React, {useState, useEffect} from 'react';
import './CaseStudies.scss';
import { FaTwitter, FaLinkedin, FaBehance, FaGithub } from 'react-icons/fa';
import uxbeach from '../../../../assets/images/uxbeach.jpg';


const CaseStudies = () => {

    /* 1) set the date im counting to */
    let countDownDate = () => {
        /* 2) Get the current year: */
        let year = new Date().getFullYear();
        
        /* 3) Calculate difference in time between target date and current date: */
        /* + before new Date is shorthand to cast obj as integer -> yuelkds Unix timestamp in microseconds */

        const difference = +new Date(`${year}-01-31`) - +new Date();

        /* 4) Calculate the remaining time: */
        let timeRemaining = {};

        if (difference > 0) {
            timeRemaining = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeRemaining;
    };


/* State for the time calculated in countDownDate() : */
    const [timeRemaining, setTimeRemaining] = useState(countDownDate());

/* Updates the timer: */
    useEffect(() => {
        const timer = setTimeout( () => {
            setTimeRemaining(countDownDate() );
        }, 1000);

        return () => clearTimeout(timer);
    });

/* Used for the UI elements: */
    const countdownComponents = [];

    Object.keys(timeRemaining).forEach( (interval) => {
        if(!timeRemaining[interval]) {
            return;
        }

        countdownComponents.push(
            <p className='countdown-heading'>
                {timeRemaining[interval]} <span className='countdown-heading-interval'>  {interval}</span> {" "}
            </p>
        );
    });

    return (
        <section id="casestudy-countdown">
             
            <div className='casestudy-heroSection-bg'>
                <img className='casestudy-hero-img' src={uxbeach} alt='Cabanas along a beach'/>
            </div>

            <div className='casestudy-hero-content'>
                {/* <h1 className='casestudy-hero-h1'>UX Designer</h1> */}
                <p className='casestudy-hero-p'>I'm working on some details, stay tuned...</p>
                <div className='countdown-heading-wrapper'>

                {countdownComponents.length ? countdownComponents : <p>Here's my work!</p>}

                </div>
                <aside className='casestudy-socialmedia'>
                        <div className='casestudy-socialmedia-wrap'>
                            
                            <div className='casestudy-socialicons'>
                                <a className='casestudy-socialiconlink' href="https://www.linkedin.com/in/t-p-101/" target="blank" aria-label="Linkedin">
                                    <FaLinkedin />
                                </a>
                                <a className='casestudy-socialiconlink' href="https://twitter.com/tpadilla101" target="blank" aria-label="Twitter">
                                    <FaTwitter />
                                </a>
                                <a className='casestudy-socialiconlink' href="https://github.com/tpadilla10117" target="blank" aria-label="Github">
                                    <FaGithub />
                                </a>
                                <a className='casestudy-socialiconlink' href="https://www.behance.net/tpadilla10117" target="blank" aria-label="Behance">
                                    <FaBehance />
                                </a>

                            </div>

                        </div>

                </aside>
            </div>

            
            
        </section>
    );
};

export default CaseStudies;
