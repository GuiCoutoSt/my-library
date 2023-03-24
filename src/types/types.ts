export type BookData = {
  number: string;
  title: string;
  author: string;
  edition: string;
  volume: string;
  publication_date: string;
  subject: string;
  note: string;
  general_subject?: string;
};

export type BookDataArray = Array<BookData>;
