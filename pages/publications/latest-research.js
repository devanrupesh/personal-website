import { generateClient } from '../../lib/contentfulClient';
import Content from '../../components/Content';
import Seo from '../../components/Seo';
import Carousel from '../../components/Carousel';
import { transformedImagesForCarousel } from '../../lib/utils';

export default function LatestResearch({
  pageContent = [],
  featureImagesContent = {},
}) {
  const transformedImages = transformedImagesForCarousel(featureImagesContent);

  return (
    <>
      <Seo
        title='Latest Research'
        description='Latest Research conducted by Dr. Rupesh S. Devan'
      />
      <Carousel
        images={transformedImages}
        description={featureImagesContent.fields.description}
        imgWidth='800'
        imgHeight='500'
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
