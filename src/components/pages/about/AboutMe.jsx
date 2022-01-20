import React, {useEffect, useRef, useMemo, useState} from 'react';
import './AboutMe.scss';
import Trin from '../../../assets/images/trin2.jpg';
import { FaTwitter, FaLinkedin, FaBehance, FaGithub } from 'react-icons/fa';
import { Carousel, Footer, AboutHeroSection, /* PersonalCards  */} from '../../utils';
/* import { carouselData } from '../../../utils/seed'; */
import Hike from "../../../assets/images/hike.jpeg"
import GuitarSelfie from "../../../assets/images/GuitarSelfie.jpeg";
import SanDiego from "../../../assets/images/SanDiego.jpeg";
import FortBragg1 from "../../../assets/images/FortBragg1.jpeg";


const AboutMe = (props) => {

    const { cardState, changeCardState } = props;

    const cardInfo = [
        { id: 0, name: "card card-1", image: `${Hike}`, frontHeader: "Health", backHeader2: '"Health is Wealth"', backHeader3: "Peace of Mind", text: "I strive to not compete with anyone but myself while pushing forward to improve in each of my endeavors: A healthy mind & body, functional / nourshing relationships, and impactful work.", BackImage: `${FortBragg1}` },
        { id: 1, name: "card card-2",image: `${GuitarSelfie}`, frontHeader: "Guitarist", backHeader2: '"In the Deepest Ocean..."', backHeader3: "Music", text: "Performing and professional audio are two passions I cannot live without.  Whether it's rocking out to my favorite groove or indie jam, or analyzing the complex soundscapes of a recording, music is part of my identity. ", BackImage: `${FortBragg1}` },
        { id: 2, name: "card card-3",image: `${SanDiego}`, frontHeader: "Adventurer", backHeader2:'"Explore Everything!"' , backHeader3: "Traversing the Earth", text: "As a California native, I've dreamed of expanding my worldview beyond my suburban confounds.  Life is meant to be lived - there are countless people to meet, places to explore, and experiences to be had.  Find me at a beach, in a new city, or even another country.", BackImage: `${FortBragg1}` }
    ]

    /* This is all logic for making info appear on scroll: */
    /* const faders = document.querySelectorAll('.fade-in'); */
    /* const sliders = document.querySelectorAll('.slide-in'); */
    /* const [ isVisible, setIsVisible ] = useState(false); */
    const containerRef = useRef(null);
    const subheadingRef = useRef(null);
    /* const imgRef = useRef(null); */
    const [threshold] = useState({threshold: 1, rootMargin: "0px 0px -100px 0px"});
    /* const [subHeadThreshold] = useState({}); */

    /*  "Options" argument for intersection observer:*/
   /*  const appearOptions = {
        threshold: 1,
        rootMargin: "0px 0px -300px 0px"
    }; */

    console.log("Heres threshold: ", threshold)

    function computeValue(a) {
        return a;
    }

    const appearOptions = useMemo( () => computeValue(threshold), [threshold]  );
    const subHeadAppearOptions = useMemo( () => computeValue(threshold), [threshold]  );
    /* const imgAppearOptions = useMemo( () => computeValue(threshold, rootMargin), [threshold, rootMargin]  ); */

    /* Intersection Observer: */
    /* console.log(computeValue) */
console.log("Here is Appearoptions: ", appearOptions)
    /* faders.forEach(fader => {
        appearOnScroll.observe(fader);
    }) */

    /* sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    }); */
    
    /* TODO: Need to figure out why the useEffect doesn't work properly with Intersection Observer */
    
    useEffect( () => {

        const appearOnScroll = new IntersectionObserver(
            function( entries, appearOnScroll) {
                entries.forEach( entry => {
                    if (!entry.isIntersecting) {
                        return;
                    } else {
                        entry.target.classList.add('appear');
                        console.log("Appeard here: ", entry)
                        console.log(appearOptions)
                        /* appearOnScroll.unobserve(entry.target); */
                    }
                })
            },
            
            appearOptions);

            

        if (containerRef.current) appearOnScroll.observe(containerRef.current);

    function cleanUp () {
        if(containerRef.current) appearOnScroll.unobserve(containerRef.current);
    };
        

        return () => {
            cleanUp();
        }
        

    }, [appearOptions] );

    useEffect( () => {

        const appearOnScroll = new IntersectionObserver(
            function( entries, appearOnScroll) {
                entries.forEach( entry => {
                    if (!entry.isIntersecting) {
                        return;
                    } else {
                        entry.target.classList.add('appear');
                        /* console.log("Appeard here: ", entry)
                        console.log(appearOptions) */
                        /* appearOnScroll.unobserve(entry.target); */
                    }
                })
            },
            
            subHeadAppearOptions);

            

        if (subheadingRef.current) appearOnScroll.observe(subheadingRef.current);

    function cleanUp () {
        if(subheadingRef.current) appearOnScroll.unobserve(subheadingRef.current);
    };
        

        return () => {
            cleanUp();
        }
        

    }, [subHeadAppearOptions] );
   


    return (
        <main id="aboutme-wrapper">
            <AboutHeroSection />
            <div id="mainPage-wrapper">
                <div className="bio-wrapper">

                {/* THIS IS FOR THE IMAGE OF ME*/}
                    <div className="overlay-practice">
                        <div className="img-box">
                            <div className="img-container">
                                <img 
                                    src={Trin} 
                                    className="about-picture" 
                                    alt="Trin Padilla" 
                                    loading="lazy" 
                                    id="leftiimage">

                                </img>

                            </div>
                            <div className="img-content">
                                <div>
                                    <p>Hey There! I'm Trin!</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="sideBio">
                        <h1 className="sideBio-heading1 fade-in" ref={containerRef}>Who Am I?</h1><br/>
                        <p><b>I'm Trin Padilla</b> - <a className="sideBio-a"href="https://www.forbes.com/sites/jodiecook/2021/05/13/why-being-a-jack-of-all-trades-is-essential-for-success/?sh=5fbeeee81c45"> Jack-of-All-Trades: "Master of None though oftentimes better than a Master of One"</a> type who's {/* dedicated his life to both learning and specializing in the following trades: Full Stack Web-Development and UX Design.  I'm  */}both a self-taught & formally educated Software Engineer & UX Designer.  As a <a className="sideBio-a-uxeng" href="https://www.coursera.org/articles/what-is-a-ux-engineer">Full Stack UX Engineer</a> who has spent the last 2 years studying computer science concepts, design theory, and psychology's role in both, I find myself fascinated with the creative arts, problem solving, and discovering how people interact with applications.  Users experience web-applications every day, and one of my many responsibilities is to ensure those user experiences are profound, memorable, and intuitive (to name a few).  Whether behind pen & paper, Figma, or VS Code, it's my duty to convey these experiences in a manner that users will enjoy!</p>
                        <br/>
                        <br/>
                        <h2 className="sideBio-heading2 fade-in" ref={subheadingRef}>"A simple man making his way through the galaxy" </h2>
                        <br/>
                        <br/>
                        <p>{/* "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." */}My story so far has been filled by an insatiable desire to grow, learn, and expand my worldview.  When I'm not working with technology, I seek knowledge & skills in other sectors of my life - be it learning additional languages, practicing my primary instrument (guitar), or whatever else I wish to focus on.  The goal is to be wholesome & perfectly balanced ("as all things should be").</p>


                        <div className="links-about">
                                    <a href="https://www.linkedin.com/in/t-p-101/" className="links-socialicons">{<FaLinkedin /* size={45} *//>}</a>
                                    <a href="https://twitter.com/tpadilla101" className="links-socialicons">{<FaTwitter /* size={45} *//>}</a>
                                    <a href="https://github.com/tpadilla10117" className="links-socialicons">{<FaGithub /* size={45} *//>}</a>
                                    <a href="https://www.behance.net/tpadilla10117" className="links-socialicons">{<FaBehance /* size={45} *//>}</a>
                        </div>

                    </div>


                </div>
                

                
                {/* <div className="container">

                </div> */}

            </div>
            
                {/* <PersonalCards cardState={cardState} changeCardState={changeCardState}/> */}
            <Carousel /* slides={carouselData} */slides={cardInfo} cardInfo={cardInfo}cardState={cardState} changeCardState={changeCardState} />

            

            <Footer />
       
        </main>

        
    );
};

export default AboutMe;