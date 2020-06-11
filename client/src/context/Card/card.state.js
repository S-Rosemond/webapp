import React from 'react';
import CardContext from './card.context';
import CardReducer from './card.reducer';
import { REGISTER_CARD, LOGIN_CARD } from './card.type';

const CardState = (props) => {
  const initialState = {
    card: 0,
  };

  const [state, dispatch] = React.useReducer(CardReducer, initialState);

  const setRegisterCard = () => dispatch({ type: REGISTER_CARD });

  const setLoginCard = () => dispatch({ type: LOGIN_CARD });

  return (
    <CardContext.Provider
      value={{
        card: state.card,
        setRegisterCard,
        setLoginCard,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardState;
