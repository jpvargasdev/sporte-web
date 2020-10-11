/* eslint-disable react/prop-types */
import React from 'react';

import { Block, BLOCKS, Document, Inline, INLINES, MARKS, Text } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


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

function defaultInline(type, node) {
  return (
    <span key={node.data.target.sys.id}>
      type: {node.nodeType} id: {node.data.target.sys.id}
    </span>
  );
}

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b>{text}</b>,
    [MARKS.ITALIC]: (text) => <i>{text}</i>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => <code>{text}</code>,
  },
  renderNode: {
    [BLOCKS.DOCUMENT]: (node, children) => children,
    [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
    [BLOCKS.HR]: () => <hr />,
    [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
    [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
    [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
    [BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>,
    [BLOCKS.HEADING_5]: (node, children) => <H5>{children}</H5>,
    [BLOCKS.HEADING_6]: (node, children) => <H6>{children}</H6>,
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => <Custom node={node} />,
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => <div>{children}</div>,
    [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
    [INLINES.ASSET_HYPERLINK]: (node) => defaultInline(INLINES.ASSET_HYPERLINK, node),
    [INLINES.ENTRY_HYPERLINK]: (node) => defaultInline(INLINES.ENTRY_HYPERLINK, node),
    [INLINES.EMBEDDED_ENTRY]: (node) => defaultInline(INLINES.EMBEDDED_ENTRY, node),
    [INLINES.HYPERLINK]: (node, children) => <a href={node.data.uri}>{children}</a>,
  },
};

function renderRichText(richText) {
  return documentToReactComponents(richText, options);
}

export default renderRichText;
