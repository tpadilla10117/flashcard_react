import React, { useState, /* useRef */ } from 'react';

import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
/* import { caseStudies } from '../utils/seed'; */
import { Developer, AboutMe, Landing, Ux, Contact, /* Resume, */ Header, TriTixApp, AerialTurtles } from './utils';
import './App.css';

function App() {


/* State for Modals: */
  const [modalVisibility, setModalVisibility] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

/* State for PersonalCards.jsx : */
const [ cardState, changeCardState ] = useState({
  activeObject: null,
  objects: [{ id:1}, {id: 2}, {id:3}]
});

/* State for Case Study routing: */

  const nodeRef = React.useRef(null);

  return (
    
    <div className="app-container">


      <CSSTransition 
      timeout={300}>
        <Header/>
      </CSSTransition>


      <div className="route-container">

        {/* TODO: Landing Section */}
          <Route exact path='/'>
            <Landing/>
            
          </Route>

        {/* TODO: About Section */}
         {/*  <Route exact path='/about'>{ ({ match }) => (
            <CSSTransition
            nodeRef={nodeRef}
            in={match != null}
            timeout={300}
            classNames="fade"
            unmountOnExit>
              <div className="fade" ref={nodeRef}>
                <AboutMe />
              </div>
            </CSSTransition>
          )} 
          </Route> */}
           <Route exact path='/about'>
            <AboutMe cardState={cardState} changeCardState={changeCardState} />
          </Route>

        {/* TODO: Developer Section */}
          {/* <Route exact path='/developer'>{ ({ match }) => (
            <CSSTransition
            nodeRef={nodeRef}
            in={match != null}
            timeout={300}
            classNames="fade"
            unmountOnExit>
              <div className='fade' ref={nodeRef}>
                <Developer 
                 modalVisibility={modalVisibility}
                 setModalVisibility={setModalVisibility}
                 activeProject={activeProject}
                 setActiveProject={setActiveProject}
                />
              </div>
            </CSSTransition>
          )} 
          </Route> */}

          <Route exact path='/developer'>
            <Developer 
            modalVisibility={modalVisibility}
            setModalVisibility={setModalVisibility}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
            />
          </Route>


        {/* TODO: UX Design Section */}
           {/* <Route exact path='/ux'>{ ({ match }) => (
            <CSSTransition
            nodeRef={nodeRef}
            in={match != null}
            timeout={300}
            classNames="fade"
            unmountOnExit>
              <div className='fade' ref={nodeRef}>
                <Ux />
              </div>
            </CSSTransition>
          )} 
          </Route> */}

          <Route exact path='/ux'>
            <Ux />
          </Route>

          {/* TODO: Contact Section */}

           {/* <Route exact path='/contact'>{ ({ match }) => (
            <CSSTransition
            nodeRef={nodeRef}
            in={match != null}
            timeout={300}
            classNames="fade"
            unmountOnExit>
              <div className='fade' ref={nodeRef}>
                <Contact />
              </div>
            </CSSTransition>
          )} 
          </Route> */}

          <Route exact path='/contact'>
            <Contact/>
          </Route>

          {/* TODO: Resume Section */}

           {/* <Route exact path='/resume'>{ ({ match }) => (
            <CSSTransition
            nodeRef={nodeRef}
            in={match != null}
            timeout={300}
            classNames="fade"
            unmountOnExit>
              <div className='fade' ref={nodeRef}>
                <Resume />
              </div>
            </CSSTransition>
          )} 
          </Route> */}

          {/* TODO: UX Design Sections: */}

          <Route exact path='/ux/tri-tix-app'>{ ({ match }) => (
            <CSSTransition
            nodeRef={nodeRef}
            in={match != null}
            timeout={300}
            classNames="fade"
            unmountOnExit>
              <div className='fade' ref={nodeRef}>
                <TriTixApp />
              </div>
            </CSSTransition>
          )} 
          </Route>

          <Route exact path='/ux/aerial-turtles'>{ ({ match }) => (
            <CSSTransition
            nodeRef={nodeRef}
            in={match != null}
            timeout={300}
            classNames="fade"
            unmountOnExit>
              <div className='fade' ref={nodeRef}>
                <AerialTurtles />
              </div>
            </CSSTransition>
          )} 
          </Route>

      </div>



    </div>
  );
}

export default App;
