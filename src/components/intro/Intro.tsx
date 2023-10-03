
import styles from './intro.module.css';
import avatar from '../../img/photo.jpeg';

function Intro() {
  return (
    <section className={styles.introContainer}>
      <div className={styles.introTextContainer}>
        <div className={styles.introText}>
          <h1 className={styles.header}>Hey I am Alex</h1>
          <h2 className={styles.subheader}>A front-end developer in Canada</h2>
        </div>
      </div>
      <img src={avatar} className={styles.introPhoto} alt='avatar' />
    </section>
  )
}

export default Intro;