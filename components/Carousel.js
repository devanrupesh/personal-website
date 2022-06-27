import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import Image from 'next/image';
import Richtext from './Richtext';

const Carousel = ({ images = [], details, className, imgWidth, imgHeight }) => {
  return (
    <div className={`d-flex flex-column justify-content-between ${className}`}>
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
                height={imgHeight}
                width={imgWidth}
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
        <p>
          <Richtext text={details} />
        </p>
      </div>
    </div>
  );
};

export default Carousel;
