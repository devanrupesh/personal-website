import React from 'react';
import Card from '../../components/Card';
import { Row, Col } from 'react-bootstrap';
import Seo from '../../components/Seo';
import { generateClient } from '../../lib/contentfulClient';
import { transformedImagesForCards } from '../../lib/utils';

export default function CurrentMembers({ content = [] }) {
  const transformedContent = transformedImagesForCards(content);

  return (
    <>
      <Seo
        title='Current Members'
        description='CCurrent Members working under Dr. Rupesh S. Devan'
      />
      <div>
        <Row xs={1} md={2} lg={3} className='g-4'>
          {transformedContent &&
            transformedContent.map((content) => {
              return (
                <Col key={content.id}>
                  <Card content={content} />
                </Col>
              );
            })}
        </Row>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const client = generateClient();

  const entries = await client.getEntries({
    content_type: 'currentMembers',
  });

  return {
    props: {
      content: entries.items,
    },
    revalidate: 1,
  };
};
