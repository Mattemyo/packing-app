import { ITEM_CREATED, ITEM_CHECKED, ITEM_UNCHECKED, ITEM_DELETED, ITEM_RENAMED, LIST_SAVED } from '../constants/actionTypes';

export const itemChecked = (payload) => ({
  type: ITEM_CHECKED,
  payload
});

export const itemUnchecked = (payload) => ({
  type: ITEM_UNCHECKED,
  payload
});

export const itemDeleted = (payload) => ({
  type: ITEM_DELETED,
  payload
});

export const itemRenamed = (payload) => ({
  type: ITEM_RENAMED,
  payload
});

export const itemCreated = (payload) => ({
  type: ITEM_CREATED,
  payload
});
