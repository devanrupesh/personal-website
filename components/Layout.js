import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <main className='d-flex flex-column min-vh-100'>
      <Header />
      <Container>{children}</Container>
      <br />
      <Footer className='mt-auto' />
    </main>
  );
};

export default Layout;
