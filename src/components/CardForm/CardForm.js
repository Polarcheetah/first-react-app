import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';

const CardForm = (props) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title: value }, props.columnId);
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
