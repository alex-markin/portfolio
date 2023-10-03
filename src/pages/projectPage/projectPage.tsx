
// libraries
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

// styles & components
import styles from "./projectPage.module.css";
import Divider from "../../components/divider/divider";
import Slider from "../../components/slider/slider";

// types
import { Project as ProjectType } from "../../types/types";

// content
import { projects } from "../../content/projects";




export default function ProjectPage() {

  const { id } = useParams();
  const project = projects.find((project) => project.title.toLowerCase().replace(/\s/g, "-") === id) as ProjectType;
  const { title, description, feautures, images, stack, ghLink, previewLink } = project;


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <section className={styles.page}>

      <div className={styles.heading}>
        <h1 className={styles.title}> {title}</h1>
        <p className={styles.subtitle}> {description}</p>
      </div>

      <div className={styles.linksContainer}>
        <Link className={styles.link} to={ghLink} target="_blank" rel="noreferrer">
          <button className={styles.linkButton}>GitHub</button>
        </Link>

        <Link className={styles.link} to={previewLink} target="_blank" rel="noreferrer">
          <button className={styles.linkButton}>GitHub Pages </button>
        </Link>

      </div>

      <div className={styles.imageContainer}>
        <h2 className={styles.imageTitle}>Screenshots</h2>
        <Slider images={images} />
      </div>

      <div className={styles.featuresContainer}>
        <h2 className={styles.listTitle}>Features</h2>
        <ul className={styles.list}>
          {feautures.map((feature) => (
            <li className={styles.listItem} key={feature}>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <Divider />

      <div className={styles.featuresContainer}>
        <h2 className={styles.listTitle}>Used stack</h2>
        <ul className={styles.list}>
          {stack.map((item) => (
            <li className={styles.listItem} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>


  );
}