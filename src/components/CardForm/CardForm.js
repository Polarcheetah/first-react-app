import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';

const CardForm = ({ action, columnId }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title: value }, columnId);
    setValue('');
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={value} onChange={(e) => setValue(e.target.value)} />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;
