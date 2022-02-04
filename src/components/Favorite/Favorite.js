import { useSelector } from 'react-redux';
import { getFavoritesCards } from '../../redux/store';
import Card from '../Card/Card';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

const Favorite = () => {
  const cards = useSelector((state) => getFavoritesCards(state));

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <section className={styles.favorite}>
        <ul className={styles.cards}>
          {cards.map((card) => (
            <Card
              key={card.id}
              cardName={card.title}
              cardId={card.id}
              isFavorite={card.isFavorite}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Favorite;
