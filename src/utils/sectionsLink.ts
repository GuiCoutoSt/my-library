import { architecture } from '../data/architecture';
import { art } from '../data/art';
import { children_literature } from '../data/children-literature';
import { ecology } from '../data/ecology';
import { economy } from '../data/economy';
import { general_medicine } from '../data/general-medicine';
import { history } from '../data/history';
import { literature } from '../data/literature';
import { nutrition } from '../data/nutrition';
import { pedagogy } from '../data/pedagogy';
import { psicology } from '../data/psicology';
import { reference } from '../data/reference';
import { religion } from '../data/religion';
import { social_sciences } from '../data/social-sciences';

export const sectionsLink = [
  {
    url: 'architecture',
    innerText: 'Arquitetura',
    data: architecture,
  },
  {
    url: 'art',
    innerText: 'Arte',
    data: art,
  },
  {
    url: 'social-sciences',
    innerText: 'Ciências Sociais',
    data: social_sciences,
  },
  {
    url: 'ecology',
    innerText: 'Ecologia',
    data: ecology,
  },
  {
    url: 'economy',
    innerText: 'Economia',
    data: economy,
  },
  {
    url: 'history',
    innerText: 'História',
    data: history,
  },
  {
    url: 'literature',
    innerText: 'Literatura',
    data: literature,
  },
  {
    url: 'childrens-literature',
    innerText: 'Literatura Infantil',
    data: children_literature,
  },
  {
    url: 'general-medicine',
    innerText: 'Medicina',
    data: general_medicine,
  },
  {
    url: 'nutrition',
    innerText: 'Nutrição',
    data: nutrition,
  },
  {
    url: 'pedagogy',
    innerText: 'Pedagogia',
    data: pedagogy,
  },
  {
    url: 'psicology',
    innerText: 'Psicologia',
    data: psicology,
  },
  {
    url: 'reference',
    innerText: 'Referência',
    data: reference,
  },
  {
    url: 'religion',
    innerText: 'Religião',
    data: religion,
  },
];
