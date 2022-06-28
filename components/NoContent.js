import React from 'react';
import Image from 'next/image';
import noContentImage from '../assets/no-content.png';

const NoContent = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <Image src={noContentImage} alt='me' width='300' height='300' />
      <br />
      <h2 className='font-weight-normal lead w-50 text-center' id='desc'>
        No content to show yet!
      </h2>
    </div>
  );
};

export default NoContent;
