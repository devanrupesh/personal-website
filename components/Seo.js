import React from 'react';
import Head from 'next/head';
const Seo = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' description={description} />
    </Head>
  );
};

export default Seo;
