export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      // Check if item already exists to avoid duplicates
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (exists) return state;

      return {
        ...state,
        items: [
          ...state.items,
          { ...action.payload, quantityAdded: 1, addedToCart: true },
        ],
        cartNumber: state.cartNumber + 1,
      };
    }

    case "INCREMENT": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantityAdded: item.quantityAdded + 1 }
            : item,
        ),
        cartNumber: state.cartNumber + 1,
      };
    }

    case "DECREMENT": {
      const itemToUpdate = state.items.find((item) => item.id === action.payload);
      if (!itemToUpdate) return state;

      // If quantity is 1 and we decrement, remove the item
      if (itemToUpdate.quantityAdded === 1) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
          cartNumber: state.cartNumber - 1,
        };
      }

      // Otherwise, just decrease the count
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantityAdded: item.quantityAdded - 1 }
            : item,
        ),
        cartNumber: state.cartNumber - 1,
      };
    }

    default:
      return state;
  }
}
