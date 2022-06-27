import { generateClient } from '../../lib/contentfulClient';
import Content from '../../components/Content';
import Seo from '../../components/Seo';
import { transformedContent, sortDescending } from '../../lib/utils';

export default function Profile({ pageContent = [] }) {
  const content = sortDescending(transformedContent(pageContent));
  console.log(content);

  return (
    <>
      <Seo title='Profile' description='Profile of Dr. Rupesh S. Devan' />
      {content.map((content) => (
        <Content key={content.id} content={content} />
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  const client = generateClient();
  const entries = await client.getEntries({ content_type: 'profile' });

  return {
    props: {
      pageContent: entries.items,
    },
    revalidate: 1,
  };
};
