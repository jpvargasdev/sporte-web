import React from 'react';
import './AboutCard.scss';
import PropTypes from 'prop-types';
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Card, Avatar } from 'antd';

const { Meta } = Card;

const AboutCard = ({
  card,
}) => {
  return (
    <Card style={{ width: 300, marginTop: 16 }}>
    <Meta
      avatar={
        <Avatar src={card.url}/>
      }
      title={card.title}
      description={card.description}
    />
    </Card>
  )
}

AboutCard.propTypes = {
  card: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  })
};

AboutCard.defaultProps = {
  card: {
    url: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    title: "Card title",
    description: "This is the description This is the description This is the description",
  }
};

export default AboutCard;
