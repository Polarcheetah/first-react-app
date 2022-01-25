import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';

const ColumnForm = ({ action }) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title: title, icon: icon });
    setTitle('');
    setIcon('');
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <label forHtml='title'>Title: </label>
      <TextInput
        name='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label forHtml='icon'>Icon: </label>
      <TextInput
        name='icon'
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
