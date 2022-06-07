import Carousel from '../components/Carousel';
import { generateClient } from '../lib/contentfulClient';
import { transformedImagesForCarousel } from '../lib/utils';
import { transformedImagesForCarousel as transformedImagesForHome } from '../lib/utils';
import Content from '../components/Content';
import Seo from '../components/Seo';
import { Image, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function Home({
  pageContent = [],
  featureImagesContent = {},
  profileImageContent,
}) {
  const router = useRouter();
  const transformedImages = transformedImagesForCarousel(featureImagesContent);
  const profile = transformedImagesForHome(profileImageContent)[0];

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
          <div className='card-header'>
            <Image
              src={profile.url}
              alt='profile image'
              roundedCircle
              height='180'
              width='180'
            />
          </div>
          <div className='card-body text-dark'>
            <h5 className='card-title'>Dr. Rupesh S. Devan</h5>
            <h6 className='card-title'>Nano Architectures Research Group</h6>
            <hr />
            <p className='card-text'>Indian Institue of Technology Indore</p>
            <Button onClick={() => router.push('/group-leader/profile')}>
              view profile
            </Button>
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
  const profileImageContent = await client.getEntry('6GNjPYdFHFQwlHixje7kbo');

  return {
    props: {
      pageContent: entries.items,
      featureImagesContent: featureImagesEntry,
      profileImageContent,
    },
    revalidate: 1,
  };
};
