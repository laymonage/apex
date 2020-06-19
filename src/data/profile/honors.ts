import djangochat from '@/assets/img/profile/djangochat.jpg';
import besutkode from '@/assets/img/profile/besutkode.png';

export const data = [
  {
    id: 1,
    title: '**Guest**',
    institution: 'DjangoChat',
    institutionLogo: {
      image: djangochat,
      url: 'https://djangochat.com/episodes/google-summer-of-code-sage-abdullah',
      class: ['ph:w-1/2', 'xs:w-4/12', 'w-1/4', 'md:w-7/12'],
    },
    description: `Discussed my programming background, Google Summer of Code experience,
    and advice for future student Django contributors in an episode of
    DjangoChat, a weekly podcast on the Django Web Framework.`,
    dates: {
      start: 'Mar 2020',
    },
  },
  {
    id: 0,
    title: '**Grand Prize Winner**',
    institution: 'Besut Kode',
    institutionLogo: {
      image: besutkode,
      url: 'https://github.com/BesutKode',
      class: ['ph:w-1/2', 'xs:w-4/12', 'w-1/4', 'md:w-7/12'],
    },
    description: `Won the grand prize of Besut Kode, an open source software development
    competition for high school students held by Wikimedia Indonesia.`,
    dates: {
      start: 'Jun 2016',
      end: 'Sep 2016',
    },
    details: {
      type: 'disc',
      children: [
        'Set up a CI/CD service to automatically run static code analysis tools.',
        `[Fixed Python 3 support](https://github.com/loklak/loklak_python_api/pull/56)
        for the \`loklak-python-api\` library.`,
        'Wrote bug reports and fixed static code errors for open source projects on GitHub.',
      ],
    },
  },
];

export default {
  id: 3,
  type: 'Honors',
  data,
};
