import csui from '@/assets/img/csui_horizontal_transparent_english.png';

export default {
  data: [
    {
      id: 0,
      title: '**Computer Science Undergraduate**',
      institution: 'Universitas Indonesia',
      institutionLogo: {
        image: csui,
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
  ],
};
