import { generateClient } from '../lib/contentfulClient';
import Content from '../components/Content';
import Seo from '../components/Seo';
import { transformedContent } from '../lib/utils';

export default function Vacancy({ pageContent = [] }) {
  const content = transformedContent(pageContent);
  return (
    <>
      <Seo
        title='Vacancy'
        description='Vacancies available for dept. of Dr. Rupesh S. Devan'
      />
      {content.map((content) => (
        <Content key={content.id} content={content} />
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  const client = generateClient();
  const entries = await client.getEntries({ content_type: 'vacancy' });

  return {
    props: {
      pageContent: entries.items,
    },
    revalidate: 1,
  };
};
