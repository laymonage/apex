import djth from '@/assets/img/projects/djth.png';
import jsonfield from '@/assets/img/projects/django-jsonfield-backport.svg';
import apex from '@/assets/img/projects/apex.svg';
import kbbi from '@/assets/img/projects/kbbi.png';
import sigap from '@/assets/img/projects/sigap.png';
import santun from '@/assets/img/projects/santun.png';
import flappymecin from '@/assets/img/projects/flappymecin.png';
import aiden from '@/assets/img/projects/aiden.svg';
import ssoui from '@/assets/img/projects/sso-ui.png';
import evaluation from '@/assets/img/projects/eval.png';

export const data = [
  {
    id: 9,
    image: {
      src: djth,
      class: [],
    },
    title: 'django-template-heroku',
    url: 'https://github.com/laymonage/django-template-heroku',
    description: `Simple Django project template ready for Heroku deployment
    with GitLab CI or GitHub Actions.`,
    details: {
      type: 'disc',
      children: [
        'Single `requirements.txt` file for simplicity.',
        'Project-wide and app-level static files and templates directories.',
        'Pre-configured unit tests and functional tests.',
        '100% code coverage on initial project spawn.',
        'Automatic testing, coverage checking, and deployment to Heroku.',
        'Includes GitLab CI and GitHub Actions configurations with caching support for `pip`.',
      ],
    },
  },
  {
    id: 8,
    image: {
      src: jsonfield,
      class: ['w-6/12', 'md:w-8/12', 'xl:w-7/12', 'rounded-full'],
    },
    title: 'django-jsonfield-backport',
    url: 'https://github.com/laymonage/django-jsonfield-backport',
    description: 'Backport of the cross-DB JSONField model and form fields from Django 3.1.',
    details: {
      type: 'disc',
      children: [
        'Brings a highly-anticipated feature of Django 3.1 into previous versions.',
        'Supports multiple versions of MariaDB, MySQL, Oracle Database, PostgreSQL, and SQLite.',
        '`isort` and `flake8`-compliant with `black` code style and 100% code coverage.',
        'Automated testing on 29 different system environments with Django 2.2, 3.0, and 3.1.',
        'Automated PyPI releases with GitHub Actions.',
      ],
    },
  },
  {
    id: 0,
    image: {
      src: apex,
      class: ['w-6/12', 'md:w-8/12', 'xl:w-7/12'],
    },
    title: 'laymonage.com',
    url: 'https://github.com/laymonage/apex',
    description: 'A personal website built with Vue, TypeScript, and Tailwind.',
    details: {
      type: 'disc',
      children: [
        'Responsive design for devices with screen width of 320px and up.',
        'Clean architecture with reusable single-file components.',
        'Dark and light modes support.',
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
    description: `A module that scraps the
    [online Indonesian dictionary (KBBI)](https://kbbi.kemdikbud.go.id).`,
    details: {
      type: 'disc',
      children: [
        'Provides a much-needed (unofficial) API and a CLI to the online dictionary.',
        'Supports authentication with a KBBI account to increase the rate limit.',
        'Built with `requests`, `beautifulsoup4`, and Python\'s `argparse` module.',
        '30+ stars and used by 80+ projects on GitHub.',
        '24,000+ downloads according to [PePy](https://pepy.tech/project/kbbi).',
        '`isort` and `flake8`-compliant with `black` code style and 100% code coverage.',
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
        'Utilizes Cloud Firestore to provide real-time data.',
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
    description: 'An Android app to send anonymous messages.',
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
    id: 6,
    image: {
      src: flappymecin,
      class: ['p-4'],
    },
    title: 'Flappy Mecin',
    url: 'https://gitlab.com/MecinLearning/FlappyMecin',
    description: `A Flappy Bird clone with an artificial intelligence opponent
    trained with a [Neuroevolution](https://en.wikipedia.org/wiki/Neuroevolution) algorithm.`,
    details: {
      type: 'disc',
      children: [
        'Implemented a neural network and genetic algorithm from scratch.',
        'Successfully trained the AI so that it has almost zero chance of losing the game.',
        `Made use of C# delegate functions to bind methods dynamically
        and make the code more modular.`,
        `Worked with 2 other classmates to build the game with little prior knowledge
        about Unity and C#.`,
      ],
    },
  },
  {
    id: 1,
    image: {
      src: aiden,
      class: ['dark:bg-white'],
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
  {
    id: 7,
    image: {
      src: evaluation,
      class: ['w-1/2'],
    },
    title: 'eval',
    url: 'https://github.com/laymonage/eval',
    description: 'A simple form to write anonymous evaluations for me.',
    details: {
      type: 'disc',
      children: [
        'Minimal setup with HTML, CSS (Materialize), and JS (JQuery).',
        'Serverless architecture with Netlify Forms to handle form submissions.',
      ],
    },
  },
];

export default {
  id: 0,
  type: 'Software',
  anchor: 'software',
  data,
};
