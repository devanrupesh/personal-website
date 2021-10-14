import React from 'react';
import { Card as BootstrapCard, Button } from 'react-bootstrap';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

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
        <BootstrapCard.Text>
          <ReactMarkdown>{content.description}</ReactMarkdown>
        </BootstrapCard.Text>
        {/* <Button variant='primary'>Go somewhere</Button> */}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
