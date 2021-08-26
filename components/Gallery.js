import React, { useState, useCallback } from 'react';
import PhotoGallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

const ph = [
  {
    id: 1,
    src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
    width: 4,
    height: 3,
    title: 'This is some caption bro',
  },
  {
    id: 2,
    src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    width: 1,
    height: 1,
    title: 'This is some caption bro',
  },
  {
    id: 3,
    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    width: 1,
    height: 1,
    title: 'This is some caption bro',
  },
  {
    id: 4,
    src: 'https://static.wixstatic.com/media/7bc4af_4ea166d2e650489d9e58a7c83b517100~mv2.jpg',
    width: 1,
    height: 1,
    title: 'This is some caption bro',
    alt: 'https://static.wixstatic.com/media/7bc4af_4ea166d2e650489d9e58a7c83b517100~mv2.jpg',
  },
];

const Gallery = ({ photos }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <PhotoGallery photos={ph} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={ph.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
};

export default Gallery;
