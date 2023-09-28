import styles from "./project.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import type { Project } from "../../types/types";

const {
  projectContainer,
  projectImg,
  projectTitle,
  projectsHoverElement,
  projectsHoverElementActive,
} = styles;

type ProjectProps = {
  project: Project;
};

export default function Project({ project }: ProjectProps) {
  const { title, image } = project;
  const [hover, setHover] = useState(false);

  let hoverElementClass = hover
    ? `${projectsHoverElement} ${projectsHoverElementActive}`
    : `${projectsHoverElement}`;

  return (
    <Link className={projectContainer} to="/"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <img className={projectImg} src={image} alt={title} />
      <h3 className={projectTitle}
      >
        <span className={hoverElementClass}>{`< `}</span>
        {title}
        <span className={hoverElementClass}>{` />`}</span>
      </h3>
    </Link>
  );
}
