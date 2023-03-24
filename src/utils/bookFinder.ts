import { BookData } from '../types/types';

export const bookFinder = (book: BookData, search: string, query: string) => {
  if (!query) {
    return false;
  }

  switch (search) {
    case 'title':
      return searchByTitle(book, query);

    case 'author':
      return searchByAuthor(book, query);

    case 'subject':
      return searchBySubject(book, query);

    default:
      return false;
  }
};

export const searchByTitle = (book: BookData, query: string) => {
  if (book.title.toLowerCase().includes(query.toLowerCase())) {
    return true;
  }
};

export const searchByAuthor = (book: BookData, query: string) => {
  if (book.author.toLowerCase().includes(query.toLocaleLowerCase())) {
    return true;
  }
};

export const searchBySubject = (book: BookData, query: string) => {
  if (book.subject.toLowerCase().includes(query.toLocaleLowerCase())) {
    return true;
  }
};
