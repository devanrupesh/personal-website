import React from 'react';
import Richtext from './Richtext';

const Content = ({ content, html }) => {
  return (
    <div>
      <h4>{content.fields.title}</h4>
      {html && html}
      <hr />
      <Richtext text={content.fields.details} />
    </div>
  );
};

export default Content;
