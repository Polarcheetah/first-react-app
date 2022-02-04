import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import styles from './Card.module.scss';
import clsx from 'clsx';

const Card = ({ cardName, cardId, isFavorite }) => {
  const dispatch = useDispatch();

  const toggleFavorite = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(cardId));
  };

  return (
    <li className={styles.card}>
      {cardName}
      <button
        onClick={toggleFavorite}
        className={clsx(isFavorite && styles.isFavorite)}
      >
        <span className='fa fa-star-o' />
      </button>
    </li>
  );
};

export default Card;
