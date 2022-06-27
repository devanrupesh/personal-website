// import React from 'react';
// import { BLOCKS } from '@contentful/rich-text-types';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// const Richtext = ({ text }) => {
//   return <>{documentToReactComponents(text)}</>;
// };

// export default Richtext;

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

// Create a bespoke renderOptions object to target BLOCKS.EMBEDDED_ENTRY (linked block entries e.g. code blocks)
// INLINES.EMBEDDED_ENTRY (linked inline entries e.g. a reference to another blog post)
// and BLOCKS.EMBEDDED_ASSET (linked assets e.g. images)

const renderOptions = {
  renderNode: {
    // [INLINES.EMBEDDED_ENTRY]: (node, children) => {
    //   // target the contentType of the EMBEDDED_ENTRY to display as you need
    //   if (node.data.target.sys.contentType.sys.id === 'application/pdf') {
    //     return (
    //       <a href={`/blog/${node.data.target.fields.slug}`}>
    //         {' '}
    //         {node.data.target.fields.title}
    //       </a>
    //     );
    //   }
    // },
    // [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
    //   // target the contentType of the EMBEDDED_ENTRY to display as you need
    //   if (node.data.target.sys.contentType.sys.id === 'currentMembers') {
    //     return (
    //       <pre>
    //         <code>{node.data.target.fields.code}</code>
    //       </pre>
    //     );
    //   }

    //   if (node.data.target.sys.contentType.sys.id === 'videoEmbed') {
    //     return (
    //       <iframe
    //         src={node.data.target.fields.embedUrl}
    //         height='100%'
    //         width='100%'
    //         frameBorder='0'
    //         scrolling='no'
    //         title={node.data.target.fields.title}
    //         allowFullScreen={true}
    //       />
    //     );
    //   }
    // },

    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <a
          className='d-block'
          href={`https:${node.data.target.fields.file.url}`}
          download
          target='_blank'
        >
          {node.data.target.fields.title}
        </a>
      );
    },
  },
};

export default function BlogPost(props) {
  const { text } = props;

  return <>{documentToReactComponents(text, renderOptions)}</>;
}
