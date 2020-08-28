export const cardString = (card) => (card ? `${card.rank.shortName}${card.suit.name}` : '');
