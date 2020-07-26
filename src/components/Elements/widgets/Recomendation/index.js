import React from "react";
import PropTypes from "prop-types";

// utils
import { injectLinkHandler } from "../../../../Utils/Formatters";

// components
import RecomendationCard from "../../cards/RecomendationCard";

// styles
import "./recomendation.scss";


const Recomendation = ({ cards, items }) => {
  let newCards = cards;
  if (!cards.length) return null;
  if (cards.length > items) newCards = cards.slice(0, items);
  return (
    <section className="card_recoment">
      {
        newCards.map(( article ) => {
          const card = injectLinkHandler(article);
          return <RecomendationCard { ...card } key={card.id}/>;
        })
      }
    </section>
  );
};

Recomendation.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      article: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          id: PropTypes.string,
          bannerImage: PropTypes.shape({
            title: PropTypes.string,
            file: PropTypes.shape({
              url: PropTypes.string,
            }),
          }),
        }),
      ),
    }),
  ),
  items: PropTypes.number,
};

// return(
//   <div className="container">
//       <img className="Recoment_img" src={item.url} alt="HELLO" />
//     <div>
//       <p className="Recoment_p">{item.text}</p>
//     </div>
//   </div>
// )


// Recomen.propTypes = {
//   description: PropTypes.string,
//   bannerImage: PropTypes.shape({
//     title: PropTypes.string,
//     file: PropTypes.shape({
//     url: PropTypes.string,
//     }),
//   }),
//   linkHandler: PropTypes.func,
// }

// Recomen.defaultProps= {
//   description:"La breve carrera de un perro perdido como mascota presidencial de Brasil",
//   bannerImage: {
//     title: "test",
//     file: {
//       url: "https://picsum.photos/700/400?random",
//     },
//   },
// }

export default Recomendation;