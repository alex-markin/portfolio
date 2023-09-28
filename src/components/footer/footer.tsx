import styles from "./footer.module.css";

const { footer, footerParagraph } = styles;

export default function Footer() {
  return (
    <footer className={footer}>
      <p className={footerParagraph}>&copy; Created by Alex Markin</p>
      <p className={footerParagraph}>2023</p>
    </footer>
  );
}
