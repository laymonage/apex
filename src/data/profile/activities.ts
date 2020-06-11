import dsc from '@/assets/img/profile/dsc.svg';
import genbi from '@/assets/img/profile/genbi.png';

export const data = [
  {
    id: 0,
    title: '**Lead**',
    institution: 'Developer Student Clubs - Universitas Indonesia Chapter',
    institutionLogo: {
      image: dsc,
      url: 'https://g.co/dev/dsc',
    },
    description: `Led the Universitas Indonesia chapter of
    Developer Student Clubs, a program by Google Developers.`,
    dates: {
      start: 'Jul 2019',
      end: 'present',
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
  {
    id: 1,
    title: '**Commissariat Staff**',
    institution: 'Generasi Baru Indonesia - Universitas Indonesia Commissariat',
    institutionLogo: {
      image: genbi,
      url: 'https://genbi.id',
      class: ['w-1/2', 'sm:w-4/12', 'md:w-3/4'],
    },
    description: `Became a member of GenBI, a community of
    [Bank Indonesia](https://www.bi.go.id/en)'s scholarship grantees.`,
    dates: {
      start: 'Jul 2019',
      end: 'present',
    },
    details: {
      type: 'disc',
      children: [
        'Held social projects that aim to improve economics literacy in Indonesia.',
        'Wrote opinion articles for newspaper publications.',
        'Wrote content to be published in social media feeds.',
      ],
    },
  },
];

export default {
  id: 2,
  type: 'Activities',
  data,
};
