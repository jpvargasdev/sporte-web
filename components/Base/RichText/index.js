/* eslint-disable react/prop-types */
import React from 'react';

import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Bold = ({ children }) => <span className="font-bold">{children}</span>;

const Italic = ({ children }) => <span className="italic">{children}</span>;

const Underline = ({ children }) => <span className="underline">{children}</span>;

const Paragraph = ({ children }) => <p>{children}</p>;

const Hr = () => <br />;

const H1 = ({ children }) => <h1>{children}</h1>;

const H2 = ({ children }) => <h2>{children}</h2>;

const H3 = ({ children }) => <h3>{children}</h3>;

const H4 = ({ children }) => <h4>{children}</h4>;

const H5 = ({ children }) => <h5>{children}</h5>;

const H6 = ({ children }) => <h6>{children}</h6>;

const Custom = ({ node }) => {
  const { file } = node.data.target.fields;
  const { url, fileName } = file;
  return (
    <img className="embed-image" src={url} alt={fileName} />
  );
};

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    [MARKS.ITALIC]: (text) => <Italic>{text}</Italic>,
    [MARKS.UNDERLINE]: (text) => <Underline>{text}</Underline>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
    [BLOCKS.HR]: () => <Hr />,
    [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
    [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
    [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
    [BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>,
    [BLOCKS.HEADING_5]: (node, children) => <H5>{children}</H5>,
    [BLOCKS.HEADING_6]: (node, children) => <H6>{children}</H6>,
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => <Custom node={node} />,
  },
};

function renderRichText(richText) {
  return documentToReactComponents(richText, options);
}

export default renderRichText;
