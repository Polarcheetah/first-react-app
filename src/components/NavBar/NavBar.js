import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <a href='/'>
          <i className='fa fa-tasks'></i>
        </a>
        <ul>
          <a href='/'>Home</a>
          <a href='/favorite'>Favorite</a>
          <a href='/about'>About</a>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
