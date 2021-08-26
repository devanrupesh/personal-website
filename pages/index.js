import Carousel from '../components/Carousel';
import { generateClient } from '../lib/contentfulClient';
import { transformedImagesForCarousel } from '../lib/utils';
import Content from '../components/Content';
import Seo from '../components/Seo';

export default function Home({ pageContent = [], featureImagesContent = {} }) {
  const transformedImages = transformedImagesForCarousel(featureImagesContent);

  return (
    <>
      <Seo title='Home' description='Home page for Dr Rupesh S. Dewan' />
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
  const entries = await client.getEntries({ content_type: 'home' });
  const featureImagesEntry = await client.getEntry('2biFVyGWXKtSn3lLg8ZXxZ');

  return {
    props: {
      pageContent: entries.items,
      featureImagesContent: featureImagesEntry,
    },
    revalidate: 1,
  };
};
