const projectsList = [
  {
    title: 'Wordle-Ish',
    description:
      'A Wordle-inspired MERN application with a React front end and backend support for the game experience. The project demonstrates component-based UI work, application state handling, and a TypeScript/Vite setup.',
    stack: 'React, TypeScript, Vite, MongoDB, Express',
    link: 'https://wordleish-mern.herokuapp.com/',
    github: 'https://github.com/MCSeal/wordleish',
    picture: 'wordle.jpg',
    highlights: [
      'Built a familiar game flow with reusable React components.',
      'Used a MongoDB/Express backend for server-side data handling.',
      'Designed a simple interface that is easy to understand quickly.',
    ],
  },
  {
    title: 'User Forum App',
    description:
      'A forum-style Node application with account management, authentication, and server-rendered pages. It shows backend routing, user flows, and database-connected application logic.',
    stack: 'Node, Express, EJS, MongoDB, Mongoose',
    link: 'https://user-app-ms.herokuapp.com/',
    github: 'https://github.com/MCSeal/userApp',
    picture: 'forum_pic.jpg',
    highlights: [
      'Implemented sign-up, authentication, password reset, and user flows.',
      'Used EJS templates for server-rendered pages.',
      'Connected the app to MongoDB through Mongoose models.',
    ],
  },
  {
    title: 'RSVP Wedding App',
    description:
      'A React RSVP application with a Firebase-backed form and map integration. The project is built around a clear real-world workflow: collect guest responses and provide location information in one place.',
    stack: 'React, Firebase, Google Maps',
    link: 'https://frosty-swirles-3e0def.netlify.app/',
    github: 'https://github.com/MCSeal/wedding',
    picture: 'wedding.jpg',
    highlights: [
      'Created a clean RSVP flow for guests.',
      'Stored submitted data with Firebase.',
      'Added location support through Google Maps integration.',
    ],
  },
  {
    title: 'Recipe App',
    description:
      'A browser-based recipe manager for creating, filtering, searching, and checking off recipe ingredients. It focuses on quick interactions and useful local data storage for everyday planning.',
    stack: 'JavaScript, local browser storage, HTML, CSS',
    link: 'https://recipe-app-ms.herokuapp.com/',
    github: 'https://github.com/MCSeal/Recipe-App',
    picture: 'recipe.jpg',
    highlights: [
      'Supported add, delete, filter, and search actions.',
      'Saved recipe data locally in the browser.',
      'Included ingredient toggles for quick meal planning.',
    ],
  },
  {
    title: 'Movie Favourite App',
    description:
      'A movie search and favourites application that connects to an external movie database and lets users save and share curated lists.',
    stack: 'JavaScript, API integration, MongoDB, Mongoose',
    link: 'https://movie-scraper-ms.herokuapp.com/',
    github: 'https://github.com/MCSeal/Movie-Scraper',
    picture: 'movies.jpg',
    highlights: [
      'Integrated a movie-search API into a custom interface.',
      'Saved favourite movies with a backend data model.',
      'Generated shareable favourite-list links.',
    ],
  },
  {
    title: 'Podcast Website',
    description:
      'A content-focused website built with GitHub Pages and Jekyll. The project demonstrates maintainable static-site structure, lightweight templates, and clear content organization.',
    stack: 'Jekyll, GitHub Pages, HTML, CSS',
    link: 'https://sealyoulater.github.io/',
    github: 'https://github.com/SealYouLater/sealyoulater.github.io',
    picture: 'podcast_website.jpg',
    highlights: [
      'Used Jekyll templates to keep posts easier to manage.',
      'Built a lightweight front end without extra framework weight.',
      'Added a pop-out menu and blog-style content structure.',
    ],
  },
];

export default projectsList;
