import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import ContactForm from '../../components/ContactForm';
import styles from './contact.module.css';

const LINKS = [{ icon: <AiFillGithub />, url: 'https://github.com/YunSukHyun' }];

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.contactTitle}>連絡します</h2>
      <p>czcz9207@gmail.com</p>
      <ul className={styles.contactLinks}>
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className={styles.contactIcon}>
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className={styles.contactSubtitle}>またはメールを送ります</h2>
      <ContactForm />
    </section>
  );
};

export default Contact;
