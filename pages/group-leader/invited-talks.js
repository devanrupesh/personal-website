import { generateClient } from '../../lib/contentfulClient';
import Content from '../../components/Content';
import Seo from '../../components/Seo';
import { transformedContent } from '../../lib/utils';

export default function InvitedTalks({ pageContent = [] }) {
  const content = transformedContent(pageContent);
  return (
    <>
      <Seo
        title='Invited Talks'
        description='All talks to which Dr. Rupesh S. Devan has been invited'
      />
      {content.map((content) => (
        <Content key={content.id} content={content} />
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  const client = generateClient();
  const entries = await client.getEntries({
    content_type: 'invitedTalks',
  });

  return {
    props: {
      pageContent: entries.items,
    },
    revalidate: 1,
  };
};
