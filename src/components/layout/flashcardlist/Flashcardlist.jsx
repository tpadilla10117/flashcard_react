import React from 'react';
/* import { Sample_Flashcards }  from '../../../utils/seed'; */
import { Flashcard } from "../../utils";
import './Flashcardlist.scss';

function Flashcardlist( {flashcard} ) {

  /* const [flashcards, setFlashcards] = useState(Sample_Flashcards); */

  return (
    <section className="card-grid">

        {flashcard.map(flashcard => {
          return <Flashcard flashcard={flashcard} key={flashcard.id} />
        })}

    </section>
  )
}

export default Flashcardlist;
