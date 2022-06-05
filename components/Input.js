import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({
  id,
  label,
  placeholder,
  name,
  onChange,
  type,
  formText,
  required,
}) => {
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
        required={required}
      />
      <Form.Text className='text-muted'>{formText}</Form.Text>
    </Form.Group>
  );
};

Input.defaultProps = {
  required: false,
};

export default Input;
