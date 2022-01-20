import React, {useState} from 'react';
import './Flashcard.scss';

function Flashcard( {flashcard} ) {
/* State to manage card flipping: */
    const [cardflip, setCardFlip] = useState(false);

  return (
    <div className={`card ${cardflip ? 'flip' : ''}`}  onClick={() => setCardFlip(!cardflip)}>


        <div className='frontside'>
            {flashcard.question}
            <div className='flashcard-options'>
                {flashcard.options.map(option => {
                    return <div className='flashcard-option'>{option}</div>
                })}
            </div>
        </div>

        <div className='backside'>
            {flashcard.answer}
        </div>

    </div>
  )
}

export default Flashcard;
