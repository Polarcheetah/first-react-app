import styles from './Button.module.scss';

const Button = (props) => (
  <button className={styles.button} disabled={props.disable}>
    {props.children}
  </button>
);

export default Button;
