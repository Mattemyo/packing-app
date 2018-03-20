import { ITEM_CREATED, ITEM_CHECKED, ITEM_DELETED, ITEM_UPDATED } from '../constants/actionTypes';

export const itemChecked = (payload) => ({
  type: ITEM_CHECKED,
  payload
});

export const itemDeleted = (payload) => ({
  type: ITEM_DELETED,
  payload
});

export const itemUpdated = (payload) => ({
  type: ITEM_UPDATED,
  payload
});

export const itemCreated = (payload) => ({
  type: ITEM_CREATED,
  payload
});
