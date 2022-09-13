import { childrens_literature } from './childrens_literature';
import { ecology } from './ecology';
import { economy } from './economy';
import { filosofy } from './filosofy';
import { general_medicine } from './general_medicine';
import { history } from './history';
import { literature } from './literature';
import { nutrition } from './nutrition';
import { pedagogy } from './pedagogy';
import { psicology } from './psicology';
import { reference } from './reference';

export const sectionsLink = [
  {
    url: '/subject/ecology',
    innerText: 'Ecologia',
    data: ecology,
  },
  {
    url: '/subject/economy',
    innerText: 'Economia',
    data: economy,
  },
  {
    url: '/subject/filosofy',
    innerText: 'Filosofia',
    data: filosofy,
  },
  {
    url: '/subject/history',
    innerText: 'História',
    data: history,
  },
  {
    url: '/subject/literature',
    innerText: 'Literatura',
    data: literature,
  },
  {
    url: '/subject/childrens-literature',
    innerText: 'Literatura Infantil',
    data: childrens_literature,
  },
  {
    url: '/subject/general-medicine',
    innerText: 'Medicina',
    data: general_medicine,
  },

  {
    url: '/subject/nutrition',
    innerText: 'Nutrição',
    data: nutrition,
  },
  {
    url: '/subject/pedagogy',
    innerText: 'Pedagogia',
    data: pedagogy,
  },
  {
    url: '/subject/psicology',
    innerText: 'Psicologia',
    data: psicology,
  },
  {
    url: '/subject/reference',
    innerText: 'Referência',
    data: reference,
  },
];
