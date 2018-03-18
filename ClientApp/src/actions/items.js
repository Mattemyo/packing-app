import { ITEM_CREATED, ITEM_CHECKED } from '../constants/actionTypes';

const itemChecked = (data) => ({
  type: ITEM_CHECKED,
  data
});
