export const defineSearchType = (str: string) => {
  switch (str) {
    case 'title':
      return 'Título';

    case 'author':
      return 'Autor';

    case 'subject':
      return 'Assunto';
  }
};
