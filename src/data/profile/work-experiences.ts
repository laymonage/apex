import viperdev from '@/assets/img/profile/viperdev.svg';
import csui from '@/assets/img/profile/csui_horizontal_transparent_english.png';
import gsoc from '@/assets/img/profile/gsoc.png';
import wmid from '@/assets/img/profile/wmid.svg';

export const data = [
  {
    id: 4,
    title: '**Software Developer**',
    institution: 'VIPERdev',
    institutionLogo: {
      image: viperdev,
      url: 'https://viper.dev/en',
      class: ['p-2', 'ph:w-full', 'w-3/4', 'md:w-full', 'dark:bg-white'],
    },
    description: 'Developing new products, features, and bug fixes for various startups.',
    dates: {
      start: 'Jul 2020',
      end: 'present',
    },
    details: {
      type: 'disc',
      children: [
        'Main tech stack: Django + Celery, Ionic Angular, PostgreSQL, and Docker.',
        'Working remotely with other team members from all around the world.',
      ],
    },
  },
  {
    id: 0,
    title: '**Teaching Assistant**',
    institution: 'Faculty of Computer Science, Universitas Indonesia',
    institutionLogo: {
      image: csui,
      url: 'https://cs.ui.ac.id',
      class: ['p-2', 'ph:w-full', 'w-3/4', 'md:w-full', 'dark:bg-white'],
    },
    description: `Tutored students, designed problem sets, and graded student assignments
    in four different courses.`,
    dates: {
      start: 'Aug 2018',
      end: 'present',
    },
    details: {
      type: 'decimal',
      children: [
        `
**Programming Foundations I**

Programming basics, OOP basics, and GUI basics in Python.`,

        `
**Introduction to Computer Organization**

MIPS & AVR architecture and emulated devices (LCD, buttons, keypad).`,

        `
**Web Design and Programming** (2 times)

Web development with Django (with test-driven development), JQuery, Bootstrap,
GitLab CI, and Heroku.`,

        `
**Programming Foundations II**

OOP with Java, GUI with JavaFX, and basic web programming with Spring Boot.

Additional work as a coordinator:

- Worked with two other coordinators to manage a team of 28 teaching assistants.
- Reviewed and created grading schemes for weekly lab assignments given out to 400+ students.
- Built an automatic submission checking system using JUnit, Gradle, and GitLab CI.
`,
      ],
    },
  },
  {
    id: 3,
    title: '**Web Developer**',
    institution: 'Faculty of Computer Science, Universitas Indonesia',
    institutionLogo: {
      image: csui,
      url: 'https://cs.ui.ac.id',
      class: ['p-2', 'ph:w-full', 'w-3/4', 'md:w-full', 'dark:bg-white'],
    },
    description: 'Improved and added new features to a room reservation system.',
    dates: {
      start: 'Jan 2020',
      end: 'Jan 2020',
    },
    details: {
      type: 'disc',
      children: [
        `Upgraded the stack from Django 1.9 and Python 2.7 to
        Django 3.0 and Python 3.8.`,
        `Optimized some of the database queries, resulting in more than
        10x performance increase to certain pages.`,
        'Fixed multiple bugs and security vulnerabilities found in the system.',
        'Added new features to enhance the user experience.',
      ],
    },
  },
  {
    id: 2,
    title: `**Student** with
    [**Django Software Foundation**](https://www.djangoproject.com/foundation)`,
    institution: 'Google Summer of Code 2019',
    institutionLogo: {
      image: gsoc,
      url: 'https://g.co/gsoc',
      class: ['w-5/12', 'sm:w-5/12', 'ph:w-7/12', 'md:w-10/12', 'p-2', 'dark:bg-white'],
    },
    description: `Participated in the annual open source software development program
    held by Google.`,
    dates: {
      start: 'May 2019',
      end: 'Aug 2019',
    },
    details: {
      type: 'disc',
      children: [
        `
Added a new
[**JSONField**](https://docs.djangoproject.com/en/dev/ref/models/fields/#django.db.models.JSONField)
that can be used for all database backends supported by Django
(PostgreSQL, MySQL, MariaDB, SQLite, and Oracle Database).`,

        `
Identified and provided an initial patch for
[**a security vulnerability**](https://www.djangoproject.com/weblog/2019/aug/01/security-releases/)
in Django.`,

        `
Documented the whole journey on [**a blog**](https://gsoc.laymonage.com)
on a regular basis during the program.`,
      ],
    },
  },
  {
    id: 1,
    title: '**Technical Staff Intern**',
    institution: 'Wikimedia Indonesia',
    institutionLogo: {
      image: wmid,
      url: 'https://wikimedia.or.id',
      class: ['ph:w-1/2', 'xs:w-5/12', 'sm:w-5/12', 'md:w-9/12', 'dark:bg-white', 'p-4'],
    },
    description: `Set up a local server to host applications internally and
    instructed the employees on how to use them.`,
    dates: {
      start: 'July 2018',
      end: 'July 2018',
    },
    details: {
      type: 'disc',
      children: [
        'Deployed a financial program used by the accountants.',
        'Localized and deployed a NodeJS application to manage employees\' annual leave.',
      ],
    },
  },
];

export default {
  id: 1,
  type: 'Work Experiences',
  anchor: 'work-experiences',
  data,
};
