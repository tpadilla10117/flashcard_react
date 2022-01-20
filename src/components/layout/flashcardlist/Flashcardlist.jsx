import React, {useState} from 'react';
import { Sample_Flashcards }  from '../../../utils/seed';
import { Flashcard } from "../../utils";
import './Flashcardlist.scss';

function Flashcardlist() {

  const [flashcards, setFlashcards] = useState(Sample_Flashcards);

  return (
    <section className="card-grid">

        {flashcards.map(flashcard => {
          return <Flashcard flashcard={flashcard} key={flashcard.id} />
        })}

    </section>
  )
}

export default Flashcardlist;
