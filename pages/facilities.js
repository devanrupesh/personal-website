import React from 'react';
import Card from '../components/Card';
import { Row, Col } from 'react-bootstrap';
import Seo from '../components/Seo';
import { generateClient } from '../lib/contentfulClient';
import { transformedContent } from '../lib/utils';
import NoContent from '../components/NoContent';

export default function Facilities({ content = [] }) {
  content = transformedContent(content);

  return (
    <>
      <Seo
        title='Facilities'
        description='Facilities provided under Dr. Rupesh S. Devan'
      />
      <div>
        <Row xs={1} md={2} lg={3} className='g-4'>
          {content.length !== 0 ? (
            content.map((content) => {
              return (
                <Col key={content.id}>
                  <Card content={content} />
                </Col>
              );
            })
          ) : (
            <NoContent />
          )}
        </Row>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const client = generateClient();

  const entries = await client.getEntries({
    content_type: 'facilities',
  });

  return {
    props: {
      content: entries.items,
    },
    revalidate: 1,
  };
};
