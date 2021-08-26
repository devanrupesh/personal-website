import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({ id, label, placeholder, name, onChange, type, formText }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Form.Group className='mb-3' controlId={id}>
      <Form.Label>{capitalizeFirstLetter(label)}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
      <Form.Text className='text-muted'>{formText}</Form.Text>
    </Form.Group>
  );
};

export default Input;
