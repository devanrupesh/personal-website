import React from 'react';
import Card from '../components/Card';
import { CardGroup, Row, Col } from 'react-bootstrap';
import { generateClient } from '../lib/contentfulClient';

const IMAGES = [
  {
    src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
    thumbnail:
      'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: true,
    caption: 'After Rain (Jeshu John - designerspics.com)',
  },
  {
    src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    thumbnail:
      'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: 'Ocean', title: 'Ocean' },
      { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    thumbnail:
      'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    thumbnail:
      'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    thumbnail:
      'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: 'Ocean', title: 'Ocean' },
      { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },
  {
    src: 'https://static.wixstatic.com/media/7bc4af_4ea166d2e650489d9e58a7c83b517100~mv2.jpg',
    thumbnail:
      'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: 'Ocean', title: 'Ocean' },
      { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },
];

const facilities = ({ facilitiesContent = IMAGES }) => {
  const transformedCards = facilitiesContent.map((content) => ({
    id: content.sys.id,
    title: content.fields.cardTitle,
    description: content.fields.cardDescription,
    url: `https:${content.fields.cardImage.fields.file.url}`,
    height: content.fields.cardImage.fields.file.details.image.height,
    width: content.fields.cardImage.fields.file.details.image.width,
  }));

  return (
    <div>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {transformedCards &&
          transformedCards.map((content) => {
            return (
              <Col key={content.id}>
                <Card content={content} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export const getStaticProps = async () => {
  const client = generateClient();

  const facilitiesEntries = await client.getEntries({
    content_type: 'facilities',
  });

  return {
    props: {
      facilitiesContent: facilitiesEntries.items,
    },
  };
};

export default facilities;
