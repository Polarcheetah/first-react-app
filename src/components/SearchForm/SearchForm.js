import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {
  const dispatch = useDispatch();

  const [searchString, setSearchString] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(searchString));
  };

  useEffect(() => {
    dispatch(updateSearchString(''));
  }, []);

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder='Search...'
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
