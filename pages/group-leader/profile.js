import { generateClient } from '../../lib/contentfulClient';
import Content from '../../components/Content';
import Seo from '../../components/Seo';
import { transformedContent, sortDescending } from '../../lib/utils';
import NoContent from '../../components/NoContent';

export default function Profile({ pageContent = [] }) {
  const content = sortDescending(transformedContent(pageContent));

  return (
    <>
      <Seo title='Profile' description='Profile of Dr. Rupesh S. Devan' />
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
  const entries = await client.getEntries({ content_type: 'profile' });

  return {
    props: {
      pageContent: entries.items,
    },
    revalidate: 1,
  };
};
