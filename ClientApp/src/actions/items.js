import { ITEM_CREATED, ITEM_CHECKED } from '../constants/actionTypes';

export const itemChecked = (payload) => ({
  type: ITEM_CHECKED,
  payload
});
