import React from 'react';
import { Card as BootstrapCard, Button } from 'react-bootstrap';
import Image from 'next/image';

const Card = ({ content }) => {
  return (
    // <BootstrapCard style={{ width: '18rem' }}>
    //   <BootstrapCard.Img variant='top' src={transformedImage.url} />
    //   <BootstrapCard.Body>
    //     <BootstrapCard.Title>{content.cardTitle}</BootstrapCard.Title>
    //     <BootstrapCard.Text>{content.cardDescription}</BootstrapCard.Text>
    //     <Button variant='primary'>Go somewhere</Button>
    //   </BootstrapCard.Body>
    // </BootstrapCard>
    <BootstrapCard>
      <Image
        src={content.url}
        alt={content.url}
        height='300'
        width='300'
        objectFit='cover'
      />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{content.title}</BootstrapCard.Title>
        <BootstrapCard.Text>{content.description}</BootstrapCard.Text>
        <Button variant='primary'>Go somewhere</Button>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
