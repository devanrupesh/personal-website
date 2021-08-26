import { generateClient } from '../../lib/contentfulClient';
import Content from '../../components/Content';
import Seo from '../../components/Seo';

export default function AwardsAndAcademics({ pageContent = [] }) {
  return (
    <>
      <Seo
        title='Awards & Academics'
        description='Awards and Academics gained by Dr. Rupesh S. Devan'
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
    content_type: 'awardsAndAcademics',
  });

  return {
    props: {
      pageContent: entries.items,
    },
    revalidate: 1,
  };
};
