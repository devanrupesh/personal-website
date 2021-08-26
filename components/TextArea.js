import React from 'react';
import { Form } from 'react-bootstrap';

const TextArea = ({ id, label, rows = 3, name, onChange }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Form.Group className='mb-3' controlId={id}>
      <Form.Label>{capitalizeFirstLetter(label)}</Form.Label>
      <Form.Control as='textarea' rows={rows} name={name} onChange={onChange} />
    </Form.Group>
  );
};

export default TextArea;
