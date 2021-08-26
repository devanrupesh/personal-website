import React, { useEffect, useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Spinner from '../components/Spinner';

const Contact = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: '',
    variant: 'success',
  });
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    address: '',
    subject: '',
    message: '',
  });

  const handleFormSubmission = (e) => {
    e.preventDefault();
    setShowSpinner(true);
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValue),
    })
      .then((res) => {
        console.log('Response received');
        if (res.status === 200) {
          setShowSpinner(false);
          setShowAlert({
            show: true,
            message: 'Your response has been recorded',
          });
          console.log('Response succeeded!');
          setFormValue({
            address: '',
            email: '',
            name: '',
            message: '',
            subject: '',
          });
        }
      })
      .catch((err) => {
        console.error(err);
        setShowSpinner(false);
        setShowAlert({
          show: true,
          message: 'something went wrong',
          variant: 'danger',
        });
      });
  };

  const handleInputChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert({
        show: false,
        message: '',
        variant: 'success',
      });
    }, 8000);

    return () => {
      clearTimeout(timeout);
    };
  }, [formValue, setShowAlert]);

  return (
    <div>
      <Form onSubmit={handleFormSubmission}>
        <Input
          id='name-input'
          label='name'
          placeholder='Please enter your name'
          type='text'
          name='name'
          onChange={handleInputChange}
        />
        <Input
          id='email-input'
          label='email'
          placeholder='Please enter your email'
          type='email'
          name='email'
          onChange={handleInputChange}
        />

        <Input
          id='address-input'
          label='address'
          placeholder='Please enter your address'
          type='text'
          name='address'
          onChange={handleInputChange}
        />

        <Input
          id='subject-input'
          label='subject'
          placeholder='Please enter subject'
          type='text'
          name='subject'
          onChange={handleInputChange}
        />

        <TextArea
          id='message-input'
          label='message'
          name='message'
          onChange={handleInputChange}
        />
        <div className='d-flex justify-content-left align-items-center'>
          <Button variant='primary' type='submit' className='me-3'>
            Submit
          </Button>
          {showSpinner && <Spinner />}
        </div>
      </Form>
      <br />
      {showAlert.show && (
        <Alert variant={showAlert.variant}>{showAlert.message}</Alert>
      )}
    </div>
  );
};

export default Contact;
