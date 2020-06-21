import sagesans from '@/assets/img/projects/sagesans.svg';
import tiga from '@/assets/img/projects/tiga.jpg';
import lunacy from '@/assets/img/projects/lunacy.png';
import dsobb from '@/assets/img/projects/dsobb.png';
import aidensreactions from '@/assets/img/projects/aidensreactions.png';
import portal2linetheme from '@/assets/img/projects/portal2linetheme.png';

export const data = [
  {
    id: 5,
    image: {
      src: sagesans,
      class: ['fill-current', 'text-white'],
    },
    title: 'sage sans',
    url: 'https://github.com/laymonage/sagesans',
    description: `A sans-serif font based on my own handwriting,
    made with FontForge and released under OFL 1.1.`,
    details: {
      type: 'disc',
      children: [
        '10,000+ downloads on [DaFont](https://www.dafont.com/sage-sans.font).',
        'Featured in some children\'s books published by Verlagsgruppe Oetinger.',
      ],
    },
  },
  {
    id: 4,
    image: {
      src: tiga,
      class: ['w-3/4'],
    },
    title: 'Tiga',
    url: 'https://www.instagram.com/p/BdRHV1TDYqx',
    description: 'A digitalized final assignment for my comic class.',
  },
  {
    id: 3,
    image: {
      src: lunacy,
      class: ['p-4', 'w-8/12', 'dark:bg-white'],
    },
    title: 'Lunacy',
    url: 'https://line.me/S/shop/theme/detail?id=33ef311d-7d79-444b-8e22-1f08d09c3f4b',
    description: 'A minimalist, simple, and clean LINE theme with beige and blue color scheme.',
  },
  {
    id: 2,
    image: {
      src: dsobb,
    },
    title: 'The Dark Side of Big Ben',
    url: 'https://www.youtube.com/watch?v=CEDrikeKgZs',
    description: 'A digital painting mashup of Big Ben and the legendary album art.',
  },
  {
    id: 1,
    image: {
      src: aidensreactions,
      class: ['w-3/4'],
    },
    title: 'Aiden\'s Reactions',
    url: 'https://telegram.me/addstickers/AidenR1',
    description: `An expressive sticker set for your daily conversations,
    available on [Telegram](https://telegram.me/addstickers/AidenR1)
    and [LINE](https://line.me/S/sticker/1306613).`,
  },
  {
    id: 0,
    image: {
      src: portal2linetheme,
    },
    title: 'Portal 2 LINE Theme',
    url: 'https://laymonage.deviantart.com/art/Portal-2-LINE-Theme-549706365',
    description: 'A clean Portal 2 theme for LINE Android app.',
  },
];

export default {
  id: 1,
  type: 'Art',
  anchor: 'art',
  data,
};
