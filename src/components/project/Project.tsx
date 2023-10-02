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
  const { title, images } = project;
  const [hover, setHover] = useState(false);

  const image = images[0];

  const id = title.toLowerCase().replace(/\s/g, "-");


  let hoverElementClass = hover
    ? `${projectsHoverElement} ${projectsHoverElementActive}`
    : `${projectsHoverElement}`;

  return (
    <Link className={projectContainer} to={`/projects/${id}`}
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
