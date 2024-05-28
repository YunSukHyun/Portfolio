import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src={'/profile.jpg'}
        alt="profile"
        width={300}
        height={300}
      />
      <p>入れる予定です</p>
      <p>反応型適用予定です</p>
    </main>
  );
}
