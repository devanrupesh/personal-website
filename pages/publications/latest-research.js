import { generateClient } from '../../lib/contentfulClient';
import Content from '../../components/Content';
import Seo from '../../components/Seo';
import Carousel from '../../components/Carousel';
import {
  transformedImagesForCarousel,
  transformedContent,
} from '../../lib/utils';
import NoContent from '../../components/NoContent';

export default function LatestResearch({
  pageContent = [],
  featureImagesContent = {},
}) {
  const transformedImages = transformedImagesForCarousel(featureImagesContent);
  const content = transformedContent(pageContent);

  return (
    <>
      <Seo
        title='Latest Research'
        description='Latest Research conducted by Dr. Rupesh S. Devan'
      />
      <Carousel
        images={transformedImages}
        details={featureImagesContent.fields.details}
        imgWidth='800'
        imgHeight='500'
      />
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
  const entries = await client.getEntries({
    content_type: 'latestResearch',
  });
  const featureImagesEntry = await client.getEntry('2ebwgzvnkNzOvM0sckcjyG');

  return {
    props: {
      pageContent: entries.items,
      featureImagesContent: featureImagesEntry,
    },
    revalidate: 1,
  };
};
