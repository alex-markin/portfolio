import styles from "./divider.module.css";

export default function Divider() {
  return (
    <div className="row ">
      <hr className={styles.divider} />
    </div>
  );
}
