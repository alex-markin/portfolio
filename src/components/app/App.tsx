import styles from './app.module.css';
import React from 'react';
import Main from '../../pages/main/main';
import AppHeader from '../appHeader/appHeader';
import { Router, Routes, Route } from 'react-router-dom';

import Intro from "../../components/intro/Intro";
import Projects from "../../components/projects/Projects";
import Contacts from "../../components/contacts/Contacts";
import Divider from "../../components/divider/divider";
import Footer from "../../components/footer/footer";
import { useState } from 'react';

import ProjectPage from '../../pages/projectPage/projectPage';
import { burgersProject } from '../../content/projects';


export const ROUTES = {
  MAIN: '/',
  PROJECT: '/projects/:id',
  INTRO: '/intro',
  PROJECTS: '/projects',
  CONTACTS: '/contacts',
};

function App() {



  return (
    <div className={styles.appContainer}>
      <AppHeader />
      <Routes>
        <Route path={ROUTES.MAIN} element={<Main />} />
        <Route path={ROUTES.PROJECT} element={<ProjectPage />} />
      </Routes>
      <Divider />
      <Footer />
    </div>

  );
}

export default App;
