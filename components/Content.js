import React from 'react';
import Richtext from './Richtext';

const Content = ({ content, html }) => {
  return (
    <div>
      <h4>{content.title}</h4>
      {html && html}
      <hr />
      <Richtext text={content.details} />
    </div>
  );
};

export default Content;
