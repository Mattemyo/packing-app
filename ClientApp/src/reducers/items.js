import { ITEM_CREATED } from '../constants/actionTypes';
import { initialState } from '../utils/db';

export default (state = initialState.items, action = {}) => {
  switch (action.type) {
    case ITEM_CREATED:
      return {
        ...state,
        ...action.items
      };

    default:
      return state;
  }
};
