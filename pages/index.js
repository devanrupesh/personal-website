import Carousel from '../components/Carousel';
import { generateClient } from '../lib/contentfulClient';
import { transformedImagesForCarousel, transformedContent } from '../lib/utils';
import { transformedImagesForCarousel as transformedImagesForHome } from '../lib/utils';
import Content from '../components/Content';
import Seo from '../components/Seo';
import { Image, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Richtext from '../components/Richtext';

export default function Home({
  pageContent = [],
  featureImagesContent = {},
  profileImageContent,
}) {
  const router = useRouter();
  const transformedImages = transformedImagesForCarousel(featureImagesContent);
  const profile = transformedImagesForHome(profileImageContent)[0];
  const content = transformedContent(pageContent);
  return (
    <>
      <Seo title='Home' description='Home page for Dr Rupesh S. Dewan' />
      <div className='d-lg-flex p-sm-2 justify-content-between align-items-center flex-column-xs'>
        <Carousel
          images={transformedImages}
          details={featureImagesContent.fields.details}
          imgWidth='600'
          imgHeight='350'
        />
        <div
          className='card border-dark mb-3 d-flex flex-column justify-content-center text-center w-100 h-50'
          // style={{ maxWidth: '100vw' }}
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
            <Richtext text={profileImageContent.fields.details} />
            <Button onClick={() => router.push('/group-leader/profile')}>
              view profile
            </Button>
          </div>
        </div>
      </div>

      {content.map((content) => (
        <Content key={content.id} content={content} />
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  const client = generateClient();
  const entries = await client.getEntries({ content_type: 'home' });
  const featureImagesEntry = await client.getEntry('2biFVyGWXKtSn3lLg8ZXxZ');
  const profileImageEntry = await client.getEntry('6GNjPYdFHFQwlHixje7kbo');

  return {
    props: {
      pageContent: entries.items,
      featureImagesContent: featureImagesEntry,
      profileImageContent: profileImageEntry,
    },
    revalidate: 1,
  };
};
