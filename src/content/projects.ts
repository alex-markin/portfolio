import { Project } from '../types/types';

import {
  stellarBurgersImages,
  mestoImages,
  bikesImages,
  algososhImages,
  kupiPodariDaiImages,
} from '../img/images';

export const burgersProject: Project = {
  title: 'Space Burgers',
  description:
    'The student project aimed to master working with React and Redux state management. Interface in Russian language.',
  feautures: [
    'Backend integration through API and WebSocket connections.',
    'User authorization functionality with protected routing.',
    "User account page for changing user's details and log out securely.",
    'Interactive burger construction feature that allows users to customize their burgers by dragging and dropping ingredients into the constructor section.',
    'Ingredient reordering by dragging and dropping them over each other.',
    'Order placement functionality, with orders displayed on the Orders page and the users personal profile.',
    'Modal windows provide additional details for both orders and ingredients.',
  ],
  stack: [
    'JavaScript & TypeScript',
    'React + React Router, D-n-D',
    'Redux toolkit',
    'UUID',
    'Responsive Web Design',
  ],
  images: stellarBurgersImages,
  ghLink: 'https://github.com/alex-markin/react-stellar-burger',
  previewLink: 'https://alex-markin.github.io/react-stellar-burger/',
};

export const bikesProject: Project = {
  title: 'Bikes Landing Page',
  description:
    'This landing page project showcases the implementation of a responsive web design using pure Vanilla JavaScript.',
  feautures: [
    'Responsive Web Design',
    'Mobile screens menu adaptation',
    'Model lines slider',
    'Bikes switching',
    'Theme switching',
  ],
  stack: ['HTML, CSS', 'JavaScript', 'Figma', 'BEM', 'VSCode'],
  images: bikesImages,
  ghLink: 'https://github.com/alex-markin/bike-landing',
  previewLink: 'https://alex-markin.github.io/bike-landing/',
};

export const mestoProject: Project = {
  title: 'Mesto Project',
  description:
    'Study project Mesto is aimed at practicing adaptive layout, working with JS, form validation and setting up server interaction',
  feautures: [
    'Backed built on Express',
    'Backend integration through API connection',
    'Loading the other users placed cards',
    "Uploading or deleting user's cards",
    "Changing the profile's details",
  ],
  stack: [
    'HTML & CSS (GRID, flex, @media-querries)',
    'Express',
    'JavaScript',
    'OOP',
    'Webpack',
    'API (server integration)',
  ],
  images: mestoImages,
  ghLink: 'https://github.com/alex-markin/mesto-project-plus ',
  previewLink: 'https://markin.students.nomoredomainswork.ru',
};

export const algososhProject: Project = {
  title: 'MBOU Algososh Project',
  description:
    'This study project showcases a combination of skills in algorithms, React, and JavaScript.',
  feautures: [
    'Solving typical algorithms tasks like string and array manipulation, sorting, and fibonacci function.',
    'Rendering the results and process of the algorithms with animation',
    'Testing the algorithms with Jest and animation with Cypress',
  ],
  stack: ['JS Algorithms', 'React 18', 'Jest', 'Cypress'],
  images: algososhImages,
  ghLink: 'https://github.com/alex-markin/mbou_algososh',
  previewLink: 'https://alex-markin.github.io/mbou_algososh/#/',
};

export const kupiPodariDaiProject: Project = {
  title: 'KupiPodariDai Project',
  description:
    'This projects shows the experience working with Nest.js and deploying an app on cloud server with Docker',
  feautures: [
    'Utilisation of Nest.js for the backend of the KupiPodariDay project',
    'Authentication and sign-up for Users',
    "Editing and exiting User's profile",
    "Searching and viewing other user's profiles",
    'Editing new wishes',
    "Copying other User's wishes",
    "Pledging money to other's wishes",
    'Creating collections of wishes',
    "Validation of all User's inputs on server side",
  ],
  stack: ['Nest.js', 'Node.js', 'Docker', 'TypeORM', 'passport-JWT'],
  images: kupiPodariDaiImages,
  ghLink: 'https://github.com/alex-markin/web-plus-docker-and-compose',
  previewLink: 'https://markin.nomoredomainswork.ru',
};

export const projects = [
  burgersProject,
  bikesProject,
  mestoProject,
  algososhProject,
  kupiPodariDaiProject,
];
