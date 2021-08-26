import { generateClient } from '../../lib/contentfulClient';
import Content from '../../components/Content';
import Seo from '../../components/Seo';

export default function InvitedTalks({ pageContent = [] }) {
  return (
    <>
      <Seo
        title='Invited Talks'
        description='All talks to which Dr. Rupesh S. Devan has been invited'
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
    content_type: 'invitedTalks',
  });

  return {
    props: {
      pageContent: entries.items,
    },
    revalidate: 1,
  };
};
