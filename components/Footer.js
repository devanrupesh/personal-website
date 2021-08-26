import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = ({ className }) => {
  return (
    <div
      className={`d-flex justify-content-around align-items-center bg-light p-3 ${className}`}
    >
      <div>Indian Institue of Technology , Indore</div>
      <div>
        &#169;{new Date().getFullYear()} by Dr. Rupesh S. Devan, MEMS, IIT
        Indore
      </div>
    </div>
  );
};

export default Footer;
