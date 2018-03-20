import {
  ITEM_CREATED,
  ITEM_CHECKED,
  ITEM_DELETED,
  ITEM_UNCHECKED,
  ITEM_RENAMED
} from '../constants/actionTypes';
import initialState from '../utils/db';

const items = (state = initialState.items, action = {}) => {
  switch (action.type) {
    case ITEM_CHECKED:
    case ITEM_UNCHECKED:
      return state.reduce(
        (acc, item) =>
          item.name === action.payload.name ? [...acc, action.payload] : [...acc, item],
        []
      );

    case ITEM_RENAMED:
      return state.reduce(
        (acc, item) =>
          item.name === action.payload.name
            ? [...acc, { ...item, name: action.payload.newName }]
            : [...acc, item],
        []
      );

    case ITEM_DELETED:
      return state.filter((item) => item.name !== action.payload.name);
    case ITEM_CREATED:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default items;
