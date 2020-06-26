import blog from '@/assets/img/blogs/blog.svg';
import gsoc from '@/assets/img/blogs/gsoc.svg';
import flee from '@/assets/img/blogs/flee.svg';

export const data = [
  {
    id: 0,
    image: {
      src: blog,
      class: ['p-8', 'ph:w-full', 'w-8/12', 'md:w-full'],
    },
    title: 'blog',
    url: 'https://blog.laymonage.com',
    description: 'Main blog. Posts are written in English.',
  },
  {
    id: 1,
    image: {
      src: gsoc,
      class: ['p-8', 'ph:w-full', 'w-8/12', 'md:w-full'],
    },
    title: 'gsoc',
    url: 'https://gsoc.laymonage.com',
    description: `Google Summer of Code blog.
    Documentation of my journey during GSoC 2019 with Django Software Foundation.`,
  },
  {
    id: 2,
    image: {
      src: flee,
      class: ['p-8', 'ph:w-full', 'w-8/12', 'md:w-full'],
    },
    title: 'flee',
    url: 'https://flee.laymonage.com',
    description: `Free writing about stuff to flee from other stuff.
    Posts are written (mostly) in Indonesian. Raw content. Not for mass consumption.`,
  },
];

export default {
  id: 0,
  type: 'Blogs',
  anchor: 'blogs',
  data,
};
