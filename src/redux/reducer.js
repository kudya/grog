import { ADD_NAME } from './actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case (ADD_NAME):
      return {
      names: [...state.names, action.payload],
    } 
        
        default:
      return state;
  }
}
