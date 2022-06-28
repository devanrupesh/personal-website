import { generateClient } from '../../lib/contentfulClient';
import Content from '../../components/Content';
import Seo from '../../components/Seo';
import { transformedContent } from '../../lib/utils';
import NoContent from '../../components/NoContent';

export default function BookAndBookChapters({ pageContent = [] }) {
  const content = transformedContent(pageContent);
  return (
    <>
      <Seo
        title='Book & Book chapters'
        description='Book and Book chapters written or recommended by Dr. Rupesh S. Devan'
      />
      {content.length !== 0 ? (
        content.map((content) => <Content key={content.id} content={content} />)
      ) : (
        <NoContent />
      )}
    </>
  );
}

export const getStaticProps = async () => {
  const client = generateClient();
  const entries = await client.getEntries({
    content_type: 'bookAndBookChapters',
  });

  return {
    props: {
      pageContent: entries.items,
    },
    revalidate: 1,
  };
};
