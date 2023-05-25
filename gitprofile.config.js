// gitprofile.config.js

const config = {
  github: {
    username: 'sulavmhrzn', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'sulav-maharjan-5ba47318a',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'sulavmhrzn',
    dev: 'sulavmhrzn',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://devsulav.com.np',
    phone: '',
    email: 'sulavmaharjan63@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
   'Python',
    'Go',
    'Git',
    'Postgresql',
    'CSS',
    'Django'
  ],
  experiences: [
   
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'SouthWestern State College',
      degree: 'Bachelors In Computer Application',
      from: '2020',
      to: 'present',
    },
    {
      institution: 'SouthWestern State College',
      degree: '+2',
      from: '2018',
      to: '2020',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'goblog',
      description:
        'Goblog is a backend for a blogging website made with go and postgresql',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://github.com/sulavmhrzn/goblog',
    },
    {
      title: 'Pay-To-View',
      description:
        'Pay-To-View is a over simplified version of Medium made using django, stripe and postgresql',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://github.com/sulavmhrzn/pay-to-view',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
