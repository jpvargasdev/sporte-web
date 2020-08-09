import React from 'react';

// styles
import './About.scss';

// components
import renderRichText from '../../components/Base/RichText';

const About = ({ content }) => {
  const ContentText = renderRichText(content);
  return (
    <section className="about">
      {ContentText}
    </section>
  );
};

export default About;
