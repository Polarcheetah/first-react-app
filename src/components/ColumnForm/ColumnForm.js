import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store.js';
import FormLabel from '../FormLabel/FormLabel';
import Form from '../Form/Form';

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
      />
      <FormLabel>Icon: </FormLabel>
      <TextInput
        name='icon'
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <Button>Add column</Button>
    </Form>
  );
};

export default ColumnForm;
