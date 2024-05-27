import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>Home</div>
      <ul>
        <li>学歴</li>
        <li>経歴</li>
        <li>contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
