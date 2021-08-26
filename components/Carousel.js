import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import Image from 'next/image';

const Carousel = ({ images = [], description }) => {
  return (
    <>
      <BootstrapCarousel fade>
        {images &&
          images.map((image) => (
            <BootstrapCarousel.Item
              key={image.id}
              className='d-flex justify-content-center'
            >
              <Image
                src={image.url}
                alt={image.url}
                height='500'
                width='800'
                objectFit='contain'
              />
              <BootstrapCarousel.Caption>
                {/* <h3>First slide label</h3> */}
                <p>{image.description}</p>
              </BootstrapCarousel.Caption>
            </BootstrapCarousel.Item>
          ))}
      </BootstrapCarousel>

      <br />
      <div className='text-center'>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Carousel;
