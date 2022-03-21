const cartProductsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      const { product } = action;
      return [...state, product];

    case "DEL":
      const deleted = state.filter((product) => product.id !== action.id);
      return deleted;

    default:
      return state;
  }
};

export default cartProductsReducer;
