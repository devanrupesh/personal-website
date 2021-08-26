import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Richtext = ({ text }) => {
  return <>{documentToReactComponents(text)}</>;
};

export default Richtext;
