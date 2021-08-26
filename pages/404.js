import React from 'react';

const Error404 = () => {
  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ height: '90vh' }}
      id='main'
    >
      <h1 className='me-3 pe-3 align-top border-right inline-block align-content-center'>
        404
      </h1>
      <div className='inline-block align-middle'>
        <h2 className='font-weight-normal lead' id='desc'>
          The page you requested was not found.
        </h2>
      </div>
    </div>
  );
};

export default Error404;
