'use client';

import { useRouter } from 'next/navigation';
import styles from './navbar.module.css';

const list = [
  { text: '履歴·資格', url: '/history' },
  { text: '作業物', url: '/projects' },
  { text: '連絡所', url: '/contact' },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <h1
        className={styles.home}
        onClick={() => router.push('/')}>
        Home
      </h1>
      <ul className={styles.list}>
        {list.map(({ text, url }) => (
          <li
            className={styles.item}
            onClick={() => router.push(url)}
            key={text}>
            {text}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
