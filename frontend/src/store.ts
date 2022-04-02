import { writable } from 'svelte/store'

export const searchArticles = writable([
  {
    id: 1,
    title: 'somesome',
    description: 'this is a short description',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 2,
    title: 'somesome',
    description: 'this is a short description',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 3,
    title: 'somesome',
    description: 'this is a short description',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 4,
    title: 'somesome',
    description: 'this is a short description',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 5,
    title: 'somesome',
    description: 'this is a short description',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },

  {
    id: 6,
    title: 'somesome',
    description: 'this is a short description',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 7,
    title: 'somesome',
    description: 'this is a short description',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 8,
    title: 'somesome',
    description: 'this is a short description',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
])
export const searchTerm = writable('')
