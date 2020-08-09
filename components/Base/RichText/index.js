import React from "react";
import PropTypes from "prop-types";

import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const types = {
  children: PropTypes.array,
};
const typesDefault = {
  children: PropTypes.array,
};

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

Bold.propTypes = types;
Bold.defaultProps = typesDefault;
Italic.propTypes = types;
Italic.defaultProps = typesDefault;
Underline.propTypes = types;
Underline.defaultProps = typesDefault;
Paragraph.propTypes = types;
Paragraph.defaultProps = typesDefault;
Hr.propTypes = types;
Hr.defaultProps = typesDefault;
H1.propTypes = types;
H1.defaultProps = typesDefault;
H2.propTypes = types;
H2.defaultProps = typesDefault;
H3.propTypes = types;
H3.defaultProps = typesDefault;
H4.propTypes = types;
H4.defaultProps = typesDefault;
H5.propTypes = types;
H5.defaultProps = typesDefault;
H6.propTypes = types;
H6.defaultProps = typesDefault;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
    [MARKS.UNDERLINE]: text => <Underline>{text}</Underline>
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
    [INLINES.ENTRY_HYPERLINK]: (node, children) => <a>{children}</a>
  }
};

function renderRichText(richText) {
  return documentToReactComponents(richText, options);
}

export default renderRichText;