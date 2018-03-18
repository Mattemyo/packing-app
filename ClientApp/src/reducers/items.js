import { ITEM_CREATED, ITEM_CHECKED } from '../constants/actionTypes';
import { initialState } from '../utils/db';

const items = (state = initialState, action = {}) => {
  console.log('action fired');
  switch (action.type) {
    case ITEM_CHECKED:
      return {
        ...state,
        items: [
          items.reduce((acc, item) => {
            let updatedItem = {};
            if (item.name === action.payload.name) {
              updatedItem = {
                name: action.payload.name,
                isChecked: !action.payload.checked
              };
            }
            return acc.push(updatedItem);
          }, [])
        ]
      };

    default:
      return state;
  }
};

export default items;
