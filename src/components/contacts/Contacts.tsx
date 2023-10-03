import styles from "./contacts.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { modalSlice } from "../../services/store/slices/modalSlice";
import { useDispatch } from "../../services/hooks/redux-hooks";


const {
  contacts,
  contactsTitle,
  contactsLinks,
  contactLink,
  contactsIcon,
  contactName,
} = styles;


export default function Contacts() {

  const dispatch = useDispatch();

  const handleModalOpen = () => {
    dispatch(modalSlice.actions.toggleModal());
  };

  return (
    <section className={contacts}>
      <h2 className={contactsTitle}>Contact me</h2>
      <div className={contactsLinks}>
        <Link
          className={contactLink}
          to="https://www.linkedin.com/in/a-markin/"
          target="_blank"
        >
          <FontAwesomeIcon className={contactsIcon} icon={faLinkedin} />
          <p className={contactName}>LinkedIn</p>
        </Link>

        <Link
          className={contactLink}
          to="https://github.com/alex-markin"
          target="_blank"
        >
          <FontAwesomeIcon className={contactsIcon} icon={faGithub} />
          <p className={contactName}>GitHub</p>
        </Link>

        {/* сделать модалку на телефон и почту */}
        <div className={contactLink} onClick={handleModalOpen}>
          <FontAwesomeIcon className={contactsIcon} icon={faPhone} />
          <p className={contactName}>Call me</p>
        </div>

        <div className={contactLink} onClick={handleModalOpen}>
          <FontAwesomeIcon className={contactsIcon} icon={faEnvelope} />
          <p className={contactName}>Send me e-mail</p>
        </div>
      </div>
    </section>
  );
}
