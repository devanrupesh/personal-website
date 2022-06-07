import React from 'react';
import CustomGallery from '../components/Gallery';
import Seo from '../components/Seo';
import { generateClient } from '../lib/contentfulClient';

export default function Gallery({ galleryContent = [] }) {
  const formatedImages = galleryContent.map((content) => ({
    id: content.sys.id,
    src: `https:${content.fields.image.fields.file.url}`,
    title: content.fields.about,
    alt: content.fields.about,
    width: content.fields.image.fields.file.details.image.width,
    height: content.fields.image.fields.file.details.image.height,
  }));

  return (
    <>
      <Seo title='Gallery' description='Gallery of Dr. Rupesh S. Devan' />
      <CustomGallery photos={formatedImages} />
    </>
  );
}

export const getStaticProps = async () => {
  const client = generateClient();

  const entries = await client.getEntries({
    content_type: 'gallery',
  });

  return {
    props: {
      galleryContent: entries.items,
    },
    revalidate: 1,
  };
};
