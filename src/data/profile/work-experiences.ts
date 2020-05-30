import csui from '@/assets/img/profile/csui_horizontal_transparent_english.png';
import gsoc from '@/assets/img/profile/gsoc.png';
import wmid from '@/assets/img/profile/wmid.svg';

export const data = [
  {
    id: 0,
    title: '**Teaching Assistant**',
    institution: 'Faculty of Computer Science, Universitas Indonesia',
    institutionLogo: {
      image: csui,
      url: 'https://cs.ui.ac.id',
    },
    description: `
      Tutored students, designed problem sets, and graded student assignments
      in four different courses.
    `,
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
**Web Design and Programming**

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
    title: '**Student** with **Django Software Foundation**',
    institution: 'Google Summer of Code 2019',
    institutionLogo: {
      image: gsoc,
      class: ['ph:px-0', 'px-4', '-mb-4', 'md:-mb-2'],
      url: 'https://g.co/gsoc',
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
        'Deployed a financial software used by the accountants.',
        'Localized and deployed a NodeJS application to manage employees\' annual leave.',
      ],
    },
  },
];

export default {
  id: 1,
  type: 'Work Experiences',
  data,
};
