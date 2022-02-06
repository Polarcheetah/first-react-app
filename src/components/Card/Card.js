import { useDispatch } from 'react-redux';

import styles from './Card.module.scss';
import clsx from 'clsx';
import { deleteCard, toggleCardFavorite } from '../../redux/cardsRedux';

const Card = ({ cardName, cardId, isFavorite }) => {
  const dispatch = useDispatch();

  const toggleFavorite = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(cardId));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteCard(cardId));
  };

  return (
    <li className={styles.card}>
      {cardName}
      <div>
        <button
          onClick={toggleFavorite}
          className={clsx(isFavorite && styles.isFavorite)}
        >
          <span className='fa fa-star-o' />
        </button>
        <button onClick={handleDelete}>
          <span className='fa fa-trash'></span>
        </button>
      </div>
    </li>
  );
};

export default Card;
