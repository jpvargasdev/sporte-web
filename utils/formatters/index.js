import { useRouter } from 'next/router'

/**
 * Inject the link to redirect to desired page
 * @param {Object} card - Card
 * @returns {Object}
 */
export function injectLinkHandler(card) {
  const router = useRouter()

  const linkHandler = () => router.push(`/article?id=${card.id}`);
  card.linkHandler = linkHandler;
  return card;
}

/**
 * Create widgets structure to render
 * @param {Object} structure 
 * @param {Array} cards 
 */
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
