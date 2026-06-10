const projectsList = [
  {
    title: 'Wordle-Ish',
    description:
      'A Wordle-inspired MERN project built as a personal coding challenge. The project shows front-end state handling, TypeScript/Vite setup, and a backend that supports the game experience.',
    stack: 'React, TypeScript, Vite, MongoDB, Express',
    link: 'https://wordleish-mern.herokuapp.com/',
    github: 'https://github.com/MCSeal/wordleish',
    picture: 'wordle.jpg',
    highlights: [
      'Built a familiar game flow with reusable React components.',
      'Used a MongoDB/Express backend for server-side data handling.',
      'Focused on a simple interface that is easy to understand quickly.',
    ],
  },
  {
    title: 'User Forum App',
    description:
      'A forum-style Node application with user accounts and backend authentication features. It is one of my stronger examples of building beyond a static front end.',
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
      'A React mock-up of a wedding RSVP site with a Firebase-backed form and map integration. It was built around a real-world use case instead of a generic demo.',
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
      'A browser-based recipe manager for creating, filtering, searching, and checking off recipe ingredients. It is a practical app focused on small daily tasks.',
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
      'A movie search and favourites app that connects to an external movie database and allows users to keep and share a favourites list.',
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
      'A content-focused website built for a podcast using GitHub Pages and Jekyll. This project is a good example of a simpler static site with maintainable templates.',
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
