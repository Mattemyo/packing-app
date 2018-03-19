import { ITEM_CREATED, ITEM_CHECKED, ITEM_DELETED } from '../constants/actionTypes';
import initialState from '../utils/db';

const items = (state = initialState.items, action = {}) => {
  switch (action.type) {
    case ITEM_CHECKED:
      return state.reduce(
        (acc, item) =>
          item.name === action.payload.name
            ? [...acc, { ...item, isChecked: action.payload.checked }]
            : [...acc, item],
        []
      );
    case ITEM_DELETED:
      return state.filter((item) => item.name !== action.payload.name);
    default:
      return state;
  }
};

export default items;
