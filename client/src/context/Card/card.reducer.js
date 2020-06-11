import { LOGIN_CARD, REGISTER_CARD } from './card.type';

export default function CardReducer(state, { type }) {
  switch (type) {
    case LOGIN_CARD:
      return {
        ...state,
        card: 1,
      };
    case REGISTER_CARD:
      return {
        ...state,
        card: 0,
      };
    default:
      return state;
  }
}
