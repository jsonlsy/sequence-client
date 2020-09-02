// TODO: move this logic to the backend
export const getCardCode = (card) => (card ? `${card.rank.shortName}${card.suit.name}` : '');
export const isWildcard = (cardCode) => ['JD', 'JH'].includes(cardCode);
export const isRemove = (cardCode) => ['JC', 'JS'].includes(cardCode);
