import styles from './app.module.css';
import React from 'react';
import Main from '../../pages/main/main';
import AppHeader from '../appHeader/appHeader';
import { Router, Routes, Route } from 'react-router-dom';

import Intro from "../../components/intro/Intro";
import Projects from "../../components/projects/Projects";
import Contacts from "../../components/contacts/Contacts";
import { useState } from 'react';


export const ROUTES = {
  MAIN: '/',
  PROJECT: '/projects/:id',
  INTRO: '/intro',
  PROJECTS: '/projects',
  CONTACTS: '/contacts',
};

function App() {

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleModalOpen = () => {
  //   setIsModalOpen(!isModalOpen);
  // };


  return (
    <div className={styles.appContainer}>
      <AppHeader />
      <Routes>
        <Route path={ROUTES.MAIN} element={<Main />} >
          {/* <Route path={ROUTES.INTRO} element={<Intro />} />
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
          <Route path={ROUTES.CONTACTS} element={<Contacts handleModalOpen={handleModalOpen} />} /> */}
        </Route>
        <Route path={ROUTES.PROJECT} element={<div>Project</div>} />
      </Routes>
    </div>

  );
}

export default App;
