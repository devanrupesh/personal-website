import { useState } from 'react';
import { generateClient } from '../../lib/contentfulClient';
import Content from '../../components/Content';
import Seo from '../../components/Seo';
import { Button } from 'react-bootstrap';

export default function Journals({ pageContent = [] }) {
  const [oldestFirst, setOldestFirst] = useState(false);
  const handleReverseOrdering = (e) => {
    e.preventDefault();
    setOldestFirst((prevValue) => !prevValue);
  };

  const dropDownHtml = (
    <div>
      Sort By:{' '}
      <Button variant='primary' size='sm' onClick={handleReverseOrdering}>
        {oldestFirst ? 'Newest First' : 'Oldest First'} ↕️
      </Button>
    </div>
  );

  return (
    <>
      <Seo
        title='Journals'
        description='Journals published by Dr. Rupesh S. Devan'
      />
      {pageContent.map((content) => {
        if (content.fields.title === 'Journals') {
          content.fields.details.content.forEach((el) => {
            if (el.nodeType === 'ordered-list') {
              el.content = el.content.reverse();
            }
          });

          return (
            <Content
              key={content.sys.id}
              content={content}
              html={dropDownHtml}
            />
          );
        }

        return <Content key={content.sys.id} content={content} />;
      })}
    </>
  );
}

export const getStaticProps = async () => {
  const client = generateClient();
  const entries = await client.getEntries({
    content_type: 'journals',
  });

  return {
    props: {
      pageContent: entries.items,
    },
    revalidate: 1,
  };
};
