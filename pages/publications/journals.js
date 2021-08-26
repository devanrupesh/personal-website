import { generateClient } from '../../lib/contentfulClient';
import Content from '../../components/Content';
import Seo from '../../components/Seo';

export default function Journals({ pageContent = [] }) {
  return (
    <>
      <Seo
        title='Journals'
        description='Journals published by Dr. Rupesh S. Devan'
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
    content_type: 'journals',
  });

  return {
    props: {
      pageContent: entries.items,
    },
    revalidate: 1,
  };
};
