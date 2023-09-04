import styles from './app.module.css';
import React from 'react';
import Main from '../../pages/main/main';
import AppHeader from '../appHeader/appHeader';
import { Router, Routes, Route } from 'react-router-dom';


export const ROUTES = {
  MAIN: '/',
};

function App() {


  return (
    <div className={styles.appContainer}>
      <AppHeader />
      <Routes>
        <Route path={ROUTES.MAIN} element={<Main />} />
      </Routes>
    </div>

  );
}

export default App;
