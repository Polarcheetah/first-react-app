import styles from './FormLabel.module.scss';

const FormLabel = (props) => (
  <label forhtml={props.forhtml} className={styles.label}>
    {props.children}
  </label>
);

export default FormLabel;
