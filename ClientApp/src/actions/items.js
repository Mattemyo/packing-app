import { ITEM_CREATED, ITEM_CHECKED, ITEM_DELETED } from '../constants/actionTypes';

export const itemChecked = (payload) => ({
  type: ITEM_CHECKED,
  payload
});

export const itemDeleted = (payload) => ({
  type: ITEM_DELETED,
  payload
});
