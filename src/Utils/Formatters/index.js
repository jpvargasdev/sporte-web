import { navigate } from "gatsby";

// components
import PublicityBanner from "../../components/Base/PublicityBanner";

export function injectLinkHandler(card) {
  const linkHandler = () => navigate(
    `/article?id=${card.id}`,
    {
      state: card
    }
  );
  card.linkHandler = linkHandler;
  return card;
}

export function shapeContent(structure, cards) {
  const { page } = structure;
  const widgetsToRender = [];
  page.forEach(({ widget }) => {
    const data = [];
    for (let i = 0; i < widget.items ; i++) {
      if (cards.length > 0) {
        const card = injectLinkHandler(cards.shift())
        data.push(card);
      }
    }
    widgetsToRender.push({ type:widget.type, data:data, title: widget.title });
    widgetsToRender.push({ type: "publicityBanner"});
  });

  return widgetsToRender;
}
