import React, { useEffect, useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Spinner from '../components/Spinner';
import Seo from '../components/Seo';
import Content from '../components/Content';
import { generateClient } from '../lib/contentfulClient';

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
      <form
        name='contact-form'
        method='POST'
        encType='application/x-www-form-urlencoded'
      >
        <input type='hidden' name='form-name' value='contact-form' />
        <div className='field half first'>
          <label htmlFor='name'>Nombre</label>
          <input type='text' name='name' id='name' />
        </div>
        <div className='field half'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' />
        </div>
        <div className='field'>
          <label htmlFor='message'>Mensaje</label>
          <textarea name='message' id='message' rows='6'></textarea>
        </div>
        <div className='field form-terms'>
          <label htmlFor='terms'>Condiciones del formulario</label>
          <input type='checkbox' name='terms' id='terms' />
        </div>
        <ul className='actions'>
          <li>
            <input type='submit' className='special' value='Enviar' />
          </li>
          <li>
            <input type='reset' value='Borrar' />
          </li>
        </ul>
      </form>
    </>
  );
}

export const getStaticProps = async () => {
  const client = generateClient();
  const entries = await client.getEntries({ content_type: 'vacancy' });

  return {
    props: {
      pageContent: entries.items,
    },
    revalidate: 1,
  };
};
