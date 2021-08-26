import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
