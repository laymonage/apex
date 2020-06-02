import dsc from '@/assets/img/profile/dsc.svg';

export const data = [
  {
    id: 0,
    title: '**Lead**',
    institution: 'Developer Student Clubs Universitas Indonesia',
    institutionLogo: {
      image: dsc,
      url: 'https://g.co/dev/dsc',
      class: ['w-full'],
      useClass: false,
    },
    description: `Led the Universitas Indonesia chapter of
    Developer Student Clubs, a program by Google Developers.`,
    dates: {
      start: 'Jul 2019',
      end: 'Jun 2020',
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
  type: 'Activity',
  data,
};
