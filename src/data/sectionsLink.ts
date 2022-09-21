import { childrens_literature } from './childrens_literature';
import { ecology } from './ecology';
import { economy } from './economy';
import { general_medicine } from './general_medicine';
import { history } from './history';
import { literature } from './literature';
import { nutrition } from './nutrition';
import { pedagogy } from './pedagogy';
import { psicology } from './psicology';
import { reference } from './reference';
import { religion } from './religion';
import { social_sciences } from './social_sciences';

export const sectionsLink = [
  {
    url: '/subject/social-sciences',
    innerText: 'Ciências Sociais',
    data: social_sciences,
  },
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
  {
    url: '/subject/religion',
    innerText: 'Religião',
    data: religion,
  },
];
