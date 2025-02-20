import { act } from "react";

export const initialState ={
    basket: [],
  
};

//selector
// reducer.js
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);


  

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      console.log(state)
      return {
        ...state,
        basket: [...state.basket, action.item], // Add new item to basket
      };
    
    case 'REMOVE_FROM_BASKET':
      const index= state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket=[...state.basket]

      if( index >=0){
        newBasket.splice(index, 1);

      }else{
        console.warn(
        `cant remove the product(id: ${action.id}) as it is not in basket!`
        )
      }

      return{
        ...state,
        basket: newBasket
      }
      
 
    default:
      return state;
  }
};

export default reducer;