import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
const ContactList = ({ contacts, onDelete }) => (
  <ul className={styles.ContactList}>
    {contacts.map(({ id, name, number }) => (
      <Contact
        key={id}
        name={name}
        number={number}
        onDelete={() => onDelete(id)}
      />
    ))}
  </ul>
);

export default ContactList;
