import Image from 'next/image';
import Link from 'next/link';
import styles from './history.module.css';

const works = [
  { date: '2018.02 - 2019.10', content: '陸軍満期除隊' },
  { date: '2020.03 - 2020.11', content: '新聞配達員' },
  { date: '2022.01 - 2022.11', content: 'スタディーカフェの管理者' },
  { date: '2023.03 - 2023.06', content: 'ウェブ開発者(インターン)' },
];

const certifications = [
  { date: '2019.07.16', content: '運転免許2種' },
  { date: '2023.02.26', content: 'TOEIC 795点' },
  { date: '2023.11.15', content: '情報処理技師' },
  { date: '2024.08.??', content: 'JLPTN2予定' },
];

const Education = () => {
  return (
    <section className={styles.history}>
      <div className={styles.up}>
        <div className={styles.school}>
          <h2 className={styles.title}>🎓 学歴</h2>
          <div className={styles.sContent}>釜山大学校コンピューター工学科卒業</div>
          <div className={styles.sDate}>2017.03 - 2023.08</div>
        </div>
        <ul>
          <h2 className={styles.title}>⛑ 履歴</h2>
          {works.map(({ date, content }) => (
            <li
              className={styles.listItem}
              key={date}>{`${date} ${content}`}</li>
          ))}
        </ul>
      </div>
      <div className={styles.down}>
        <div className={styles.qualification}>
          <h2>資格·語学</h2>
          {certifications.map(({ date, content }) => (
            <li
              className={styles.listItem}
              key={date}>{`${date} ${content}`}</li>
          ))}
        </div>
        <div className={styles.other}>
          <Image
            src={'/certification.png'}
            alt="cert"
            width={300}
            height={300}
          />

          <Link
            href="https://www.flaticon.com/kr/free-icons/"
            title="특허 아이콘">
            出処
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Education;
