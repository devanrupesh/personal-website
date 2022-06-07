import React, { useEffect, useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Spinner from '../components/Spinner';
import Seo from '../components/Seo';
import Content from '../components/Content';
import { generateClient } from '../lib/contentfulClient';
import emailjs from 'emailjs-com';

export default function Contact({ pageContent = [] }) {
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

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID
      )
      .then(
        (result) => {
          setShowSpinner(false);
          // console.log(result.text);
          setShowAlert({
            show: true,
            message:
              'Your response has been recorded! The owner will contact you',
            variant: 'success',
          });
          setFormValue({
            name: '',
            email: '',
            address: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          setShowSpinner(false);
          console.log(error.text);
          setShowAlert({
            show: true,
            message: 'something went wrong!',
            variant: 'danger',
          });
          setFormValue({
            name: '',
            email: '',
            address: '',
            subject: '',
            message: '',
          });
        }
      )
      .catch((err) => console.error(err));
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
    <>
      <Seo
        title='Contact'
        description='Contact details of Dr. Rupesh S. Devan'
      />
      {pageContent.map((content) => (
        <Content key={content.sys.id} content={content} />
      ))}
      <br />
      <h4>Contact</h4>
      <br />
      <div>
        <Form
          name='contact'
          method='POST'
          data-netlify='true'
          onSubmit={handleFormSubmission}
        >
          <input type='hidden' name='form-name' value='contact' />

          <Input
            id='name-input'
            label='name'
            placeholder='Please enter your name'
            type='text'
            name='name'
            onChange={handleInputChange}
            required={true}
          />
          <Input
            id='email-input'
            label='email'
            placeholder='Please enter your email'
            type='email'
            name='email'
            onChange={handleInputChange}
            required={true}
          />

          <Input
            id='address-input'
            label='address'
            placeholder='Please enter your address'
            type='text'
            name='address'
            onChange={handleInputChange}
            // required={true}
          />

          <Input
            id='subject-input'
            label='subject'
            placeholder='Please enter subject'
            type='text'
            name='subject'
            onChange={handleInputChange}
            required={true}
          />

          <TextArea
            id='message-input'
            label='message'
            name='message'
            required={true}
            onChange={handleInputChange}
          />
          <div className='d-flex justify-content-left align-items-center'>
            <Button variant='primary' type='submit' className='me-3'>
              SEND
            </Button>
            {showSpinner && <Spinner />}
          </div>
        </Form>
        <br />
        {showAlert.show && (
          <Alert variant={showAlert.variant}>{showAlert.message}</Alert>
        )}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const client = generateClient();
  const entries = await client.getEntries({ content_type: 'contact' });

  return {
    props: {
      pageContent: entries.items,
    },
    revalidate: 1,
  };
};
