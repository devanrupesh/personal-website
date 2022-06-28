import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Image_404 from '../assets/404.png';

const Error404 = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <Image src={Image_404} alt='me' width='250' height='250' />
      <br />
      <h2 className='font-weight-normal lead w-50 text-center' id='desc'>
        The page you requested was not found ....Go to{' '}
        <Link href='/'>Home</Link>
      </h2>
    </div>
  );
};

export default Error404;
