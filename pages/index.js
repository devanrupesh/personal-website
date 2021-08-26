import Head from 'next/head';
import Image from 'next/image';

import Carousel from '../components/Carousel';
import Richtext from '../components/Richtext';
import { Card, Button } from 'react-bootstrap';
import { generateClient } from '../lib/contentfulClient';

export default function Home({ homeContent = [], featureImagesContent = {} }) {
  console.log(homeContent);
  console.log(featureImagesContent);

  const transformedImages = featureImagesContent.fields.images.map((image) => ({
    id: image.sys.id,
    description: image.fields.description,
    url: `https:${image.fields.file.url}`,
    height: image.fields.file.details.image.height,
    width: image.fields.file.details.image.width,
  }));

  return (
    <div>
      <Carousel
        images={transformedImages}
        description={featureImagesContent.fields.description}
      />
      {/* <Carousel variant='dark' /> */}
      <hr />
      {homeContent.map((content) => (
        <div key={content.sys.id}>
          <h3>{content.fields.title}</h3>
          <Richtext text={content.fields.details} />
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const client = generateClient();

  const homeEntries = await client.getEntries({ content_type: 'home' });

  const fetureImagesEntery = await client.getEntry('2biFVyGWXKtSn3lLg8ZXxZ');

  return {
    props: {
      homeContent: homeEntries.items,
      featureImagesContent: fetureImagesEntery,
    },
  };
};
