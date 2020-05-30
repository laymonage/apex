import ui from '@/assets/img/profile/ui.svg';

export const data = [
  {
    id: 0,
    title: '**Computer Science Undergraduate**',
    institution: 'Universitas Indonesia',
    institutionLogo: {
      image: ui,
      url: 'https://ui.ac.id/en',
    },
    subtitle: '**3.93/4.00 CGPA**',
    description: 'Relevant courses taken:',
    dates: {
      start: 'Jun 2017',
      end: 'Aug 2021',
      expected: true,
    },
    details: {
      type: 'none',
      indented: false,
      children: [
        `Web Design and Programming, Software Engineering, Data Structures and Algorithms,
        Databases, Operating Systems, Computer Networks, Mobile Programming,
        Machine Learning, Natural Language Processing, Image Processing,
        Data Science and Analytics.`,
      ],
    },
  },
];

export default {
  id: 0,
  type: 'Education',
  data,
};
