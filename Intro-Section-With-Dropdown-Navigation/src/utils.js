// Menus image
import calendar from './images/icon-calendar.svg';
import planning from './images/icon-planning.svg';
import reminders from './images/icon-reminders.svg';
import todo from './images/icon-todo.svg';

// Testimonials image
import databiz from './images/client-databiz.svg';
import audiophile from './images/client-audiophile.svg';
import meet from './images/client-meet.svg';
import maker from './images/client-maker.svg';

// Max-width
export const minWidth = '(min-width: 750px)';
export const maxWidth = '(min-width: 1440px)';

export const menus = [
  {
    id: 1,
    name: 'features',
    haveSub: true,
    subMenu: [
      { id: 's1', name: 'todo list', logo: todo },
      { id: 's2', name: 'calendar', logo: calendar },
      { id: 's3', name: 'reminders', logo: reminders },
      { id: 's4', name: 'planning', logo: planning },
    ],
  },
  {
    id: 2,
    name: 'company',
    haveSub: true,
    subMenu: [
      { id: 'sm1', name: 'history' },
      { id: 'sm2', name: 'our team' },
      { id: 'sm3', name: 'blog' },
    ],
  },
  {
    id: 3,
    name: 'careers',
    haveSub: false,
  },
  {
    id: 4,
    name: 'about',
    haveSub: false,
  },
];

export const testimonials = [
  { id: 't1', logo: databiz },
  { id: 't2', logo: audiophile },
  { id: 't3', logo: meet },
  { id: 't4', logo: maker },
];
