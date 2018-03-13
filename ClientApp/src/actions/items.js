import { CREATE_ITEM } from '../types';

export const createItem = (data: {}): {} => (dispatch: {}) => {
  // api.books.create(data).then((books: {}) => {
  //   dispatch(bookCreated(normalize(book, bookSchema)));
  // });
  dispatch(itemCreated(item));
};
