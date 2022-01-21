import React, {useState, useEffect, useRef} from 'react';
import './Flashcard.scss';

function Flashcard( {flashcard} ) {
/* State to manage card flipping: */
    const [cardflip, setCardFlip] = useState(false);
    const [height, setHeight] = useState('initial')

    const frontRef = useRef();
    const backRef = useRef();

/* Target height of the cards and return the max height: */
    function setMaxHeight() {
        const frontHeight = frontRef.current.getBoundingClientRect().height
        const backHeight = backRef.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 100) )
    }

    useEffect( setMaxHeight,[flashcard.question, flashcard.answer, flashcard.options]);

/* This allows us to recalculate height on cards when page size changes:*/
    useEffect( () => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    },[])


  return (
    <div className={`card ${cardflip ? 'flip' : ''}`}  onClick={() => setCardFlip(!cardflip)} style={ {height: height}}>


        <div className='frontside' ref={frontRef}>
            {flashcard.question}
            <div className='flashcard-options'>
                {flashcard.options.map(option => {
                    return <div className='flashcard-option' key={option}>{option}</div>
                })}
            </div>
        </div>

        <div className='backside' ref={backRef}>
            {flashcard.answer}
        </div>

    </div>
  )
}

export default Flashcard;
