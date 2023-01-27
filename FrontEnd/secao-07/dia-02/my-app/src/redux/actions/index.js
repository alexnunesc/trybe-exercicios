// ./src/redux/actions/index.js

const INCREMENT_COUNTER = "INCREMENT_COUNTER";

export const actionCreator = (increment = 1, xablau) => ({ 
  type: INCREMENT_COUNTER,
  payload: increment,
});

const INCREMENT_CLICK = "INCREMENT_CLICK";

export const clickCounter = () => ({
  type: INCREMENT_CLICK,
});
