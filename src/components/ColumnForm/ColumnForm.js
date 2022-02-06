import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch } from 'react-redux';

import FormLabel from '../FormLabel/FormLabel';
import Form from '../Form/Form';
import { addColumn } from '../../redux/columnsRedux.js';

const ColumnForm = ({ listId }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId }));
    setTitle('');
    setIcon('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>Title: </FormLabel>
      <TextInput
        name='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='enter column title'
      />
      <FormLabel>Icon: </FormLabel>
      <TextInput
        name='icon'
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <Button disable={title === ''}>Add column</Button>
    </Form>
  );
};

export default ColumnForm;
