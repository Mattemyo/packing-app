import { ITEM_CREATED, ITEM_CHECKED } from '../constants/actionTypes';
import { initialState } from '../utils/db';

export default (state = initialState.items, action = {}) => {
  switch (action.type) {
    case ITEM_CREATED:
      return {
        ...state
      };

      case ITEM_CHECKED:
      return {
        ...state,
        ...state.items[]
      }

    default:
      return state;
  }
};
