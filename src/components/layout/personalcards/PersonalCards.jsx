import React  from 'react';
/* import Hike from "../../../assets/images/hike.jpeg"
import GuitarSelfie from "../../../assets/images/GuitarSelfie.jpeg";
import SanDiego from "../../../assets/images/SanDiego.jpeg";
import FortBragg1 from "../../../assets/images/FortBragg1.jpeg"; */

import './PersonalCards.scss';

/* COMPONENT FOR INTERACTIVE CARDS ON ABOUT ME */
const PersonalCard = (props) => {
   
    const { cardState, changeCardState, image, index, name, frontHeader, backHeader2, backHeader3, text, BackImage } = props;

    
/* Helper Function to toggle Active cards */
    function toggleActive(index) {
        changeCardState({...cardState, activeObject: cardState.objects[index]})
    }

/* Helper Function to toggle the classNames that are styled */
    function toggleActiveStyles(index) {
        return cardState.objects[index] === cardState.activeObject ? "card__inner is-flipped active" : "card__inner";
    }
    
    
    /* const cardInfo = [
        { id: 1, name: "card card-1", image: `${Hike}`, frontHeader: "Health", backHeader2: '"Health is Wealth"', backHeader3: "Peace of Mind", text: "I strive to not compete with anyone but myself while pushing forward to improve in each of my endeavors: A healthy mind & body, functional / nourshing relationships, and impactful work.", BackImage: `${FortBragg1}` },
        { id: 2, name: "card card-2",image: `${GuitarSelfie}`, frontHeader: "Guitarist", backHeader2: '"In the Deepest Ocean..."', backHeader3: "Music", text: "Performing and professional audio are two passions I cannot live without.  Whether it's rocking out to my favorite groove or indie jam, or analyzing the complex soundscapes of a recording, music is part of my identity. ", BackImage: `${FortBragg1}` },
        { id: 3, name: "card card-3",image: `${SanDiego}`, frontHeader: "Adventurer", backHeader2:'"Explore Everything!"' , backHeader3: "Traversing the Earth", text: "As a California native, I've dreamed of expanding my worldview beyond my suburban confounds.  Life is meant to be lived - there are countless people to meet, places to explore, and experiences to be had.  Find me at a beach, in a new city, or even another country.", BackImage: `${FortBragg1}` }
    ] */


  /*   const renderCard = (card, index) => {
        return(
            <div className={card.name} key={"card-" + index}>
                <div className={toggleActiveStyles(index)} onClick={() => { toggleActive(index)}}>
                    <div className="card__face card__face--front">
                        <h2>{card.frontHeader}</h2>
                        <div className="img__container">
                            <img className="front__image" src={card.BackImage} alt=""/>
                        </div>
                    </div>

                    <div className="card__face card__face--back">
                    <div className="card__header">
                        <img className="pp" src={card.image} alt=""/>
                        <h2>{card.backHeader2}</h2>
                    </div>
                    <div className="card__body">
                        <h3>{card.backHeader3}</h3>
                        <p>{card.text}</p>
                    </div>
                    </div>
                </div>
            </div>
            
        )
    } */
/* TODO: Need to change cards to make scrollable: */
/* I need only one card to render at once - currentl all three cards render */
        return(
            <>
            {/* <div className="card">{cardInfo.map(renderCard)}</div> */}
            
            <div className={name} key={"card-" + index}>
                <div className={toggleActiveStyles(index)} onClick={() => { toggleActive(index)}}>
                    <div className="card__face card__face--front">
                        <h2>{frontHeader}</h2>
                        <div className="img__container">
                            <img className="front__image" src={BackImage} alt=""/>
                        </div>
                    </div>

                    <div className="card__face card__face--back">
                    <div className="card__header">
                        <img className="pp" src={image} alt=""/>
                        <h2>{backHeader2}</h2>
                    </div>
                    <div className="card__body">
                        <h3>{backHeader3}</h3>
                        <p>{text}</p>
                    </div>
                    </div>
                </div>
            </div>
            
            </>
            
            
        )
    
}

export default PersonalCard;