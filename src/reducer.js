import { StateProvider } from "./StateProvider";

export const initialState = {
  basket: [],
  user: null,
  searchResults: []
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { 
        ...state,
        basket: [...state.basket, action.item]
      }
      break;
      case "REMOVE_FROM_BASKET":

        //cloned basket
              let newBasket = [...state.basket]
        
              const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
        
              if (index >= 0) {
        //item exists in basket, remove it
                newBasket.splice(index, 1)
              } else {
                console.warn(`Can't remove product (id: ${action.title})`)
              }
        
              return { ...state, basket: newBasket}
              break;
      case "ADD_SEARCH_RESULTS":
        return{
          ...state,
          searchResults: action.item
        }
        break;
            default:
              return state;

  }
}

export default reducer;