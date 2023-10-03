import styles from "./projects.module.css";
import Project from "../project/Project";
import { burgersProject, bikesProject, mestoProject } from "../../content/projects";

const { projects, projectsTitle, projectsContainer } = styles;

export default function Projects() {
  return (
    <section className={projects}>
      <h2 className={projectsTitle}>These are some of my projects</h2>
      <div className={projectsContainer}>
        <Project project={burgersProject} />
        <Project project={bikesProject} />
        <Project project={mestoProject} />


      </div>
    </section>
  );
}
