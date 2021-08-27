import Carousel from '../components/Carousel';
import { generateClient } from '../lib/contentfulClient';
import { transformedImagesForCarousel } from '../lib/utils';
import Content from '../components/Content';
import Seo from '../components/Seo';
import { Image } from 'react-bootstrap';

export default function Home({ pageContent = [], featureImagesContent = {} }) {
  const transformedImages = transformedImagesForCarousel(featureImagesContent);

  return (
    <>
      <Seo title='Home' description='Home page for Dr Rupesh S. Dewan' />
      <div className='d-md-flex p-sm-2 justify-content-between align-items-center flex-column-sm'>
        <Carousel
          images={transformedImages}
          description={featureImagesContent.fields.description}
          imgWidth='600'
          imgHeight='350'
        />
        <div
          className='card border-dark mb-3 d-flex flex-column justify-content-center text-center w-120 h-50'
          // style={{ maxWidth: '18rem' }}
        >
          <div class='card-header'>
            <Image
              src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80'
              roundedCircle
              height='100'
              width='100'
            />
          </div>
          <div className='card-body text-dark'>
            <h5 className='card-title'>Dr. Rupesh S. Devan</h5>
            <h6 className='card-title'>Nano Architectures Research Group</h6>
            <hr />
            <p className='card-text'>Indian Institue of Technology Indore</p>
          </div>
        </div>
      </div>

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
