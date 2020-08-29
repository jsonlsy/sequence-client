export const getCardCode = (card) => (card ? `${card.rank.shortName}${card.suit.name}` : '');
