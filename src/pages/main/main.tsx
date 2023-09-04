import styles from './main.module.css';
import Intro from '../../components/intro/Intro';
import Projects from '../../components/projects/Projects';


function Main() {
  return (
    <div className="row ">
      <Intro />
      <Projects />
    </div>
  )
}

export default Main;
