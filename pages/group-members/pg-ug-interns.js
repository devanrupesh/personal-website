import { generateClient } from '../../lib/contentfulClient';
import Content from '../../components/Content';
import Seo from '../../components/Seo';

export default function PgUgInterns({ pageContent = [] }) {
  return (
    <>
      <Seo
        title='Pg/Ug Interns'
        description='Postgraduate Undergraduate Interns working/worked under Dr. Rupesh S. Devan'
      />
      {pageContent.map((content) => (
        <Content key={content.sys.id} content={content} />
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  const client = generateClient();
  const entries = await client.getEntries({ content_type: 'pgUgInterns' });

  return {
    props: {
      pageContent: entries.items,
    },
    revalidate: 1,
  };
};
