import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
import Image from 'next/image';
import Richtext from './Richtext';

const Card = ({ content }) => {
  return (
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
        <BootstrapCard.Text as='div'>
          <Richtext text={content.details} />
        </BootstrapCard.Text>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
