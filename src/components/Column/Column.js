import styles from './Column.module.scss';
import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';

const Column = (props) => (
  <article className={styles.column}>
    <h2 className={styles.title}>
      <span className={styles.icon + ' fa fa-' + props.icon}></span>
      {props.title}
    </h2>
    <ul className={styles.cards}>
      {props.cards.map((card) => (
        <Card key={card.id} cardName={card.title} />
      ))}
    </ul>
    <CardForm columnId={props.id} action={props.action} />
  </article>
);

export default Column;