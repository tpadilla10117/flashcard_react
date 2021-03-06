import React, { useState, useEffect, /* useRef */ } from 'react';
import { Flashcardlist } from './utils';
import { Sample_Flashcards } from '../utils/seed';
import axios from 'axios';

/* import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'; */
/* import { caseStudies } from '../utils/seed'; */

import './App.css';

function App() {

  const [flashcards, setFlashcards] = useState(Sample_Flashcards);

/*  API call :*/
  useEffect( () => {
    axios.get('https://opentdb.com/api.php?amount=10')
    .then(res => {
      setFlashcards( res.data.results.map((questionItem, index) => {
        const answer = fixString(questionItem.correct_answer)
        const options = [
          ...questionItem.incorrect_answers.map(a => fixString(a)), 
          answer]
        return {
          id: `${index}-${Date.now()}`,
          question: fixString(questionItem.question),
          answer: answer,
          options: options.sort( () => Math.random() -.5)
        }
      }) )
      console.log("Here is the data form the API: ", res.data)
    })
  }, [])

/* Gets rid of unusual characters: */
  function fixString(str) {
    const text = document.createElement('textarea')
    text.innerHTML = str
    return text.value
  }

  return (
    
    <div className="app-container">
      <Flashcardlist flashcard={flashcards} />

    </div>
  );
}

export default App;
