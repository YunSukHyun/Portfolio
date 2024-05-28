import styles from './banner.module.css';

export type BannerData = {
  message: string;
  state: 'success' | 'error';
};

export default function Banner({ banner: { message, state } }: { banner: BannerData }) {
  const isSuccess = state === 'success';
  const icon = isSuccess ? '✅' : '🔥';

  return (
    <p className={`${styles.banner} ${isSuccess ? styles.success : styles.error}`}>
      {`${icon} ${message}`}
    </p>
  );
}
