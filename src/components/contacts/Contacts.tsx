import exp from "constants";
import styles from "./contacts.module.css";

const {
  contacts,
  contactsTitle,
  contactsSubtitle,
  contactLinks,
  contactLink
} = styles;

export default function Contacts() {
  return (
    <section className="contacts">
      <h2 className="contacts__header">Let's work together...</h2>
      <h5 className="contacts__subheader">How do you take your coffee?</h5>
      <div className="contacts__links">

        <a href="https://www.facebook.com/alexander.markin.374/" className="contacts__link" target="_blank"
          id="profile-link">
          <i className="fa-brands fa-facebook"></i>
          Facebook
        </a>

        <a href="https://github.com/alex-markin" target="_blank" className="contacts__link" id="profile-link">
          <i className="fa-brands fa-github"></i>
          GitHub
        </a>

        <a href="+79857925000" className="contacts__link" target="_blank" id="profile-link">
          <i className="fa-solid fa-mobile-screen"></i>
          Call me
        </a>

        <a href="m9857925000@gmail.com" className="contacts__link" target="_blank" id="profile-link">
          <i className="fa-solid fa-square-envelope"></i>
          Send me e-mail
        </a>
      </div>
    </section>
  );
}