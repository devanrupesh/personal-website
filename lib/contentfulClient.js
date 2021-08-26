import { createClient } from 'contentful';

export const generateClient = () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY_API_KEY,
  });

  return client;
};
