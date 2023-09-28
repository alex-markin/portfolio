import { Project } from "../types/types";

import burgerImg from "../img/burgerImg.png";
import bikesImg from "../img/bikesImg.png";
import mestoImg from "../img/mestoImg.png";

export const burgersProject: Project = {
  title: "Space Burgers",
  description:
    "The student project aimed to master working with React and Redux state management. Interface in Russian language.",
  feautures: [
    "Backend integration through API and WebSocket connections.",
    "User authorization functionality with protected routing.",
    "User account page enabling users to modify their details and log out securely.",
    "Interactive burger construction feature that allows users to customize their burgers by dragging and dropping ingredients into the constructor section.",
    "Intuitive ingredient reordering by dragging and dropping them over each other.",
    "Order placement functionality, with orders displayed on the Orders page and the users personal profile.",
    "Implementation of modal windows to provide additional details for both orders and ingredients.",
  ],
  stack: [
    "JavaScript & TypeScript",
    "React + React Router, D-n-D",
    "Redux toolkit",
    "UUID",
    "Responsive Web Design",
  ],
  image: burgerImg,
  ghLink: "https://github.com/alex-markin/react-stellar-burger",
  previewLink: "https://alex-markin.github.io/react-stellar-burger/",
};

export const bikesProject: Project = {
  title: "Bikes Landing Page",
  description:
    "This landing page project showcases the implementation of a responsive web design using pure Vanilla JavaScript.",
  feautures: [
    "Responsive Web Design",
    "Mobile screens menu adaptation",
    "Model lines slider",
    "Bikes switching",
    "Theme switching",
  ],
  stack: ["HTML, CSS", "JavaScript", "Figma", "BEM", "VSCode"],
  image: bikesImg,
  ghLink: "https://github.com/alex-markin/bike-landing",
  previewLink: "https://alex-markin.github.io/bike-landing/",
};

export const mestoProject: Project = {
  title: "Mesto Project",
  description:
    "Study project Mesto is aimed at practicing adaptive layout, working with JS, form validation and setting up server interaction",
  feautures: [
    "Backend integration through API connection",
    "Loading the other users placed cards",
    "Uploading or deleting user's cards",
    "Changing the profile's details",
  ],
  stack: [
    "HTML & CSS (GRID, flex, @media-querries)",
    "JavaScript",
    "OOP",
    "Webpack",
    "API (server integration)",
  ],
  image: mestoImg,
  ghLink: "https://github.com/alex-markin/mesto-project",
  previewLink: "https://alex-markin.github.io/mesto-project/",
};
