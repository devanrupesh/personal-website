import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import Image from 'next/image';

const IMAGES = [
  {
    src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
    thumbnail:
      'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: true,
    // caption: 'After Rain (Jeshu John - designerspics.com)',
  },
  // {
  //   src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
  //   thumbnail:
  //     'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
  //   thumbnailWidth: 320,
  //   thumbnailHeight: 212,
  //   tags: [
  //     { value: 'Ocean', title: 'Ocean' },
  //     { value: 'People', title: 'People' },
  //   ],
  //   // caption: 'Boats (Jeshu John - designerspics.com)',
  // },

  // {
  //   src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
  //   thumbnail:
  //     'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
  //   thumbnailWidth: 320,
  //   thumbnailHeight: 212,
  // },
  // {
  //   src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
  //   thumbnail:
  //     'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
  //   thumbnailWidth: 320,
  //   thumbnailHeight: 212,
  // },
  // {
  //   src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
  //   thumbnail:
  //     'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
  //   thumbnailWidth: 320,
  //   thumbnailHeight: 212,
  //   tags: [
  //     { value: 'Ocean', title: 'Ocean' },
  //     { value: 'People', title: 'People' },
  //   ],
  //   // caption: 'Boats (Jeshu John - designerspics.com)',
  // },
  // {
  //   src: 'https://static.wixstatic.com/media/7bc4af_4ea166d2e650489d9e58a7c83b517100~mv2.jpg',
  //   thumbnail:
  //     'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
  //   thumbnailWidth: 320,
  //   thumbnailHeight: 212,
  //   tags: [
  //     { value: 'Ocean', title: 'Ocean' },
  //     { value: 'People', title: 'People' },
  //   ],
  //   // caption: 'Boats (Jeshu John - designerspics.com)',
  // },
];

const Carousel = ({ images = IMAGES, description }) => {
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
      {/* <BootstrapCarousel fade>
        {images.map((image) => (
          <BootstrapCarousel.Item
            key={image.id}
            className='d-flex justify-content-center'
          >
            <Image
              src={image.src}
              alt={image.caption}
              height='500'
              width='800'
              objectFit='contain'
            />
            <BootstrapCarousel.Caption>
              <p>{image.caption}</p>
            </BootstrapCarousel.Caption>
          </BootstrapCarousel.Item>
        ))}
      </BootstrapCarousel> */}
      <br />
      <div className='text-center'>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Carousel;
