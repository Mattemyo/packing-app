import { ITEM_CREATED } from "../types";

export default (
  state: {} = {},
  { type, data: { entities: { items } } }: { items: {} } = {}
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
