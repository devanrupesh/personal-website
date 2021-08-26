import Carousel from '../components/Carousel';
import { generateClient } from '../lib/contentfulClient';
import { transformedImagesForCarousel } from '../lib/utils';
import Content from '../components/Content';
import Seo from '../components/Seo';

export default function ResearchInterest({
  pageContent = [],
  featureImagesContent = {},
}) {
  const transformedImages = transformedImagesForCarousel(featureImagesContent);

  return (
    <>
      <Seo title='Research Interest' description='Research Interests' />
      <Carousel
        images={transformedImages}
        description={featureImagesContent.fields.description}
      />
      {pageContent.map((content) => (
        <Content key={content.sys.id} content={content} />
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  const client = generateClient();
  const entries = await client.getEntries({ content_type: 'researchInterest' });
  const featureImagesEntry = await client.getEntry('pBcsogtkB061HOUOj7KuF');

  return {
    props: {
      pageContent: entries.items,
      featureImagesContent: featureImagesEntry,
    },
    revalidate: 1,
  };
};
