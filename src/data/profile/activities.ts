import dsc from '@/assets/img/profile/dsc.svg';

export const data = [
  {
    id: 0,
    title: '**Lead**',
    institution: 'Developer Student Clubs - Universitas Indonesia Chapter',
    institutionLogo: {
      image: dsc,
      url: 'https://g.co/dev/dsc',
      class: ['p-2', 'dark:bg-white', 'ph:w-full', 'w-3/4', 'md:w-full'],
    },
    description: `Led the Universitas Indonesia chapter of
    Developer Student Clubs, a program by Google Developers.`,
    dates: {
      start: 'Jul 2019',
      end: 'Aug 2020',
    },
    details: {
      type: 'disc',
      children: [
        'Built a new community from the ground-up with a core team of five people.',
        'Gathered 270+ students to become community members.',
        'Held workshops, talks, and a sprint to improve students\' software development skills.',
        `Raised awareness about open source by helping students contribute to
        open source software projects.`,
      ],
    },
  },
];

export default {
  id: 2,
  type: 'Activities',
  anchor: 'activities',
  data,
};
