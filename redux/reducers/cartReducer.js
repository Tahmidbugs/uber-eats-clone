let defaultState = {
  selectedItems: { items: [], restaurantName: "" }, //must first start by defining the original state of the cart button
};
let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      console.log("ADDED");
      let newState = { ...state }; // first copy the old state
      newState.selectedItems = {
        // then bring in the new change
        items: [...newState.selectedItems.items, action.payload], // new change= action.payload
        restaurantName: action.payload.restaurantName,
      };
      console.log(newState);
      return newState;
    }
    case "REMOVE_FROM_CART": {
      console.log("REMOVED");
      let newState = { ...state };
      newState.selectedItems = {
        items: [
          ...newState.selectedItems.items.filter(
            (item) => item.title != action.payload.title
          ),
        ],
        restaurantName: action.payload.restaurantName,
      };
      console.log(newState);
      return newState;
    }
    default: {
      //   console.log("defaulted");
      //   console.log("action type is: ", action.type);
      return state;
    }
  }
};

export default cartReducer;
