import styles from './Card.module.scss';

const Card = (props) => <li className={styles.card}>{props.cardName}</li>;

export default Card;
