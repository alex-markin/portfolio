// libraries
import { Routes, Route } from 'react-router-dom';

// styles, pages & components
import styles from './app.module.css';
import AppHeader from '../appHeader/appHeader';
import Main from '../../pages/main/main';
import Divider from "../../components/divider/divider";
import Footer from "../../components/footer/footer";
import ProjectPage from '../../pages/projectPage/projectPage';



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
