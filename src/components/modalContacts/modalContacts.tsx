import styles from "./modalContacts.module.css";

type Props = {
  contacts: Record<string, string>;
};

export default function ModalContacts({ contacts }: Props) {
  const email = contacts.email;
  const phone = contacts.phone;

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Contacts</h1>
      <div className={styles.contactsContainer}>
        <div className={styles.contact}>
          <p className={styles.contactType}>Email:</p>
          <a className={styles.contactValue} href={`mailto:${email}`}>
            {email}
          </a>
        </div>
        <div className={styles.contact}>
          <p className={styles.contactType}>Phone:</p>
          <p className={styles.contactValue}>{phone}</p>
        </div>
      </div>
    </div>
  );
}
