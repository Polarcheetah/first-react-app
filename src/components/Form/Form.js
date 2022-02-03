import styles from './Form.module.scss';

const Form = (props) => (
  <form className={styles.form} onSubmit={props.onSubmit}>
    {props.children}
  </form>
);

export default Form;
