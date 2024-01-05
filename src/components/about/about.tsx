
import styles from './about.module.css';

export default function About() {
  return (
    <section className={styles.aboutContainer}>
      <h2 className={styles.header}>About me</h2>
      <div className={styles.aboutTextContainer}>
        <p className={styles.aboutText}>I'm a Front-End Software Engineer. I do really enjoy building out user-friendly efficient websites and applications.
        </p>
        <p className={styles.aboutText}>I have 1 year of experience crafting web applications with JavaScript and modern frameworks and libs including React and Redux.</p>
        <p className={styles.aboutText}>My previous 5-year professional background is in Commercial Real Estate where I acquired extensive hands-on experience in effective negotiations, collaborative teamwork, and high-stakes project management. It also gave me a comprehensive understanding of the Real Estate industry.</p>
      </div>

      <div className={styles.aboutTextContainer}>
        <h2 className={styles.stackheader}>My current stack</h2>
        <h3 className={styles.subheader}>Languages:</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>JavaScript, TypeScript</li>
          <li className={styles.listItem}>HTML & CSS</li>
          <li className={styles.listItem}>Node.js</li>
        </ul>

        <h3 className={styles.subheader}>Frameworks, Libraries:</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>React & Redux toolkit</li>
          <li className={styles.listItem}>React Router, DnD</li>
          <li className={styles.listItem}>Express</li>
        </ul>

        <h3 className={styles.subheader}>Tools and utils: </h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Jest & Cypress</li>
          <li className={styles.listItem}>MongoDB, Mongoose, Postman</li>
          <li className={styles.listItem}>ChatGPT & Copilot</li>
          <li className={styles.listItem}>Figma</li>
        </ul>
      </div>


    </section>
  )
}

