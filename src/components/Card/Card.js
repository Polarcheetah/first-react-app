import styles from './Card.module.scss';

const Card = ({ cardName }) => <li className={styles.card}>{cardName}</li>;

export default Card;
