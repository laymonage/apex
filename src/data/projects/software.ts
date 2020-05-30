import logo from '@/assets/img/logo.svg';
import kbbi from '@/assets/img/projects/kbbi.png';
import sigap from '@/assets/img/projects/sigap.png';
import santun from '@/assets/img/projects/santun.png';
import ssoui from '@/assets/img/projects/sso-ui.png';
import aiden from '@/assets/img/projects/aiden.svg';

export const data = [
  {
    id: 0,
    image: {
      src: logo,
      class: ['w-6/12', 'md:w-8/12', 'xl:w-7/12'],
    },
    title: 'laymonage.com',
    url: 'https://github.com/laymonage/root',
    description: 'A personal website built with Vue, TypeScript, and Tailwind.',
    details: {
      type: 'disc',
      children: [
        'Responsive design for devices with screen width of 320px and up.',
        'Clean architecture with reusable single-file components.',
      ],
    },
  },
  {
    id: 2,
    image: {
      src: kbbi,
    },
    title: 'kbbi-python',
    url: 'https://github.com/laymonage/kbbi-python',
    description: 'A module that scraps the online Indonesian dictionary (KBBI).',
    details: {
      type: 'disc',
      children: [
        'Provides a much-needed (unofficial) API and a CLI to the online dictionary.',
        'Built with `requests`, `beautifulsoup4`, and Python\'s `argparse` module.',
        '20+ stars and used by 80+ projects on GitHub.',
        '`flake8`-compliant with `black` code style and 100% code coverage.',
        'Automated PyPI releases with GitHub Actions.',
      ],
    },
  },
  {
    id: 5,
    image: {
      src: sigap,
      class: ['p-4'],
    },
    title: 'SIGAP',
    url: 'https://gitlab.cs.ui.ac.id/foss/covid-projects/mobile-apps',
    description: `A mobile app that facilitates medical institutions in fulfilling
      their medical equipment needs amidst the COVID-19 pandemic.`,
    details: {
      type: 'disc',
      children: [
        'Built with Flutter for Android, iOS, and Web.',
        'Utilized Cloud Firestore to provide real-time data in the app.',
        `Worked with 5 other developers to build the app in one week
          with little prior knowledge about Flutter.`,
      ],
    },
  },
  {
    id: 4,
    image: {
      src: santun,
      class: ['p-4'],
    },
    title: 'Santun',
    url: 'https://github.com/laymonage/santun',
    description: 'A native Android app to send anonymous messages.',
    details: {
      type: 'disc',
      children: [
        'Built using the MVVM architectural pattern.',
        `Utilizes a RecyclerView populated from a local SQLite database
          synced with a web service.`,
        'Utilizes Kotlin coroutines to avoid I/O blocking.',
        'Modular UI divided into fragments.',
      ],
    },
  },
  {
    id: 1,
    image: {
      src: aiden,
    },
    title: 'AidenBot',
    url: 'https://github.com/laymonage/AidenBot',
    description: 'Multi-purpose bot for LINE built with Flask.',
    details: {
      type: 'disc',
      children: [
        `[250+ users](https://timeline.line.me/user/_dX-DVwUqLSWhnad7z3GzS6asQG9VtPtGvBn3X-g)
          on LINE messaging platform.`,
        'Connected to various APIs like OpenWeather, Wikipedia, Reddit, WolframAlpha, etc.',
      ],
    },
  },
  {
    id: 3,
    image: {
      src: ssoui,
    },
    title: 'SSO UI Starter Pack for Django',
    url: 'https://github.com/laymonage/sso-ui-starter-django',
    description: `A Django starter project ready to be used with Universitas Indonesia's
      [CAS SSO](https://sso.ui.ac.id/cas2).`,
    details: {
      type: 'disc',
      children: [
        'Utilizes `django-cas-ng` to authenticate with UI\'s SSO system.',
        '100% code coverage and 10/10 code quality rated by `pylint`.',
        'Includes preconfigured Travis CI script for linting, testing, and Heroku deployment.',
      ],
    },
  },
];

export default {
  type: 'Software',
  id: 0,
  data,
};