import { generateClient } from '../../lib/contentfulClient';
import Content from '../../components/Content';
import Seo from '../../components/Seo';

export default function BookAndBookChapters({ pageContent = [] }) {
  return (
    <>
      <Seo
        title='Book & Book chapters'
        description='Book and Book chapters written or recommended by Dr. Rupesh S. Devan'
      />
      {pageContent.map((content) => (
        <Content key={content.sys.id} content={content} />
      ))}
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
