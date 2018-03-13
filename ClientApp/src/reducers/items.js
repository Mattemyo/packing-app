import { createSelector } from 'reselect';
import { ITEM_CREATED } from '../constants/actionTypes';
import { initialList } from '../utils/db';

export default (
  state: {} = initialList,
  { type, data: { entities: { items } } }: { type: string, items: [] } = {}
): {} => {
  switch (type) {
    case ITEM_CREATED:
      return {
        ...state,
        ...items
      };
    default:
      return state;
  }
};

// SELECTORS
export const itemsSelector = (state: {}): [] => state.items;

export const allItemsSelector = createSelector(itemsSelector, (items: []): [] =>
  Object.values(items)
);
