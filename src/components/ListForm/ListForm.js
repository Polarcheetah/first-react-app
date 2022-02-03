import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
import Button from '../Button/Button';
import Form from '../Form/Form';
import FormLabel from '../FormLabel/FormLabel';
import TextInput from '../TextInput/TextInput';

const ListForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel forhtml='title'>Title: </FormLabel>
      <TextInput
        name='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <FormLabel forhtml='description'>Description: </FormLabel>
      <TextInput
        name='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button>Add List</Button>
    </Form>
  );
};

export default ListForm;
