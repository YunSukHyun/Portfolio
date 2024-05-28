'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from '../Banner';
import styles from './contactForm.module.css';

type Form = {
  from: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [form, setForm] = useState<Form>({
    from: '',
    subject: '',
    message: '',
  });

  const [banner, setBanner] = useState<BannerData | null>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBanner({ message: 'Success!', state: 'error' });
    setTimeout(() => {
      setBanner(null);
    }, 3000);
  };

  return (
    <section className={styles.contactSection}>
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className={styles.form}>
        <label
          htmlFor="from"
          className={styles.label}>
          Your Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
          className={styles.input}
        />
        <label
          htmlFor="subject"
          className={styles.label}>
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
          className={styles.input}
        />
        <label
          htmlFor="message"
          className={styles.label}>
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          onChange={onChange}
          className={styles.textarea}
        />
        <button className={styles.button}>Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
