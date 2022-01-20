import React, { useState, /* useEffect */ } from 'react';
import { /* carouselData, */ carouselIndicatorData } from '../../../utils/seed';
/* import chevronRight from '../../../assets/icons/chevron-right.svg'; */
/* import chevronLeft from '../../../assets/icons/chevron-left.svg'; */
import './Carousel.scss';
import { PersonalCards } from '../../utils';

/* TODO:  12/7 need to finish up and then style: */
const Carousel = ( {slides, cardState, changeCardState, cardInfo} ) => {

    const [ current, setCurrent ] = useState(0);
    const length = slides.length;
console.log(slides)

/* This automatically updates the carousel after a designated time with setTimeout, a DOM Method: */
   /*  useEffect( () => {
        
        const time = setTimeout( () => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        }, 6000);  */

    /* Effect cleanup: */
      /*  return () => {
            clearTimeout(time);
        }
    }, [current, length]); */

/* If no data, or our array isn't an array, return null: */
    if(!Array.isArray(slides) || slides.length <= 0 ) {
        return null;
    }

    
/* Logic for navigating to next or previous slide in carousel: */
    const nextSlide = () => {
        //if it's at index 2, reset back to 0, elkse add 1 and proceed throughout array"
            setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }   
/* Helper Function to navigate to exact slide in carousel: */

    const exactSlide = (index) => {
        setCurrent(parseInt(index))
        /* console.log("Here is current: ", current) */ //is a string
    }

/* Functionality to navigate to clicked dot: */
    const navigateDots = event => {
        
        //First need to target the correct dot at the array index
            const arrayValues = event.target.getAttribute('data-key');
            console.log(arrayValues); //TODO: Gives me the index of the buttons

            if(arrayValues === current) {
                console.log("This is the current slide")
            }

            exactSlide(arrayValues); //updates current
    };
    
    return (
        
             <section id="carousel-wrapper">
                 <div className='carousel-container'>
                <div className='arrow-container'>

                    {/* Right Arrow : */}
                    {/* <img className="right-arrow" src={chevronRight} alt="" onClick={nextSlide}/> */}

                    <svg xmlns="http://www.w3.org/2000/svg" className="right-arrow" viewBox="0 0 20 20" fill="#fff" height='50' width="50" onClick={nextSlide} >
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />

                    </svg>
                    
                    {/* Left Arrow: */}
                    {/* <img className="left-arrow" src={chevronLeft} alt="" onClick={previousSlide}/> */}

                    <svg xmlns="http://www.w3.org/2000/svg" className="left-arrow" viewBox="0 0 20 20" fill="#fff" height="50" width="50" onClick={previousSlide}>
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>

                </div>

                    {/* carouselData */cardInfo.map( (slide, index) => {
                    return (
                        <div className={index === current ? 'carousel-img-wrapper slide active' : 'carousel-img-wrapper slide'} key={index} >
                            {index === current && (<PersonalCards image={slide.image} cardState={cardState} changeCardState={changeCardState} current={current} cardInfo={cardInfo} key={index} id={index} frontHeader={slide.frontHeader} backHeader2={slide.backHeader2} backHeader3={slide.backHeader3} text={slide.text} BackImage={slide.BackImage} name={slide.name} />)/* (<img src={slide.image} alt="travel" key={index} className='slider-image' />) */}
                            
                        </div>
                        
                    )
                    })}

                {/* For the Indicator buttons below: */}
                    <div className="carousel-nav" >
                        {carouselIndicatorData.map( (slide, index) => {
                            return (
                                <button className={index === current ? 'indicator active' : 'indicator'} key={index} data-key={index} onClick={ navigateDots}/>
                            )
                        })}
                    </div>

                 </div>
                </section>

        
    );
};

export default Carousel;