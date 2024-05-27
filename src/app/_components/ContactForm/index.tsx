'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from '../Banner';

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
    console.log(form);
    setBanner({ message: 'Success!', state: 'error' });
    setTimeout(() => {
      setBanner(null);
    }, 3000);
  };

  return (
    <section className="contact-form-container">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="contact-form">
        <label
          htmlFor="from"
          className="form-label">
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
          className="form-input"
        />
        <label
          htmlFor="subject"
          className="form-label">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          autoFocus
          value={form.subject}
          onChange={onChange}
          className="form-input"
        />
        <label
          htmlFor="message"
          className="form-label">
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          onChange={onChange}
          className="form-textarea"
        />
        <button className="form-button">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
