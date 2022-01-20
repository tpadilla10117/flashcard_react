import React, {useState} from 'react';

function Flashcard( {flashcard} ) {
/* State to manage card flipping: */
    const [cardflip, setCardFlip] = useState(false);

  return (
    <div onClick={() => setCardFlip(!cardflip)}>
        {cardflip ? flashcard.answer : flashcard.question}
    </div>
  )
}

export default Flashcard;
