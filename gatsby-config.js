module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Loïc Beylot',
    // Main Site Title
    title: `Loïc Beylot | Software Development Engineer`,
    // Description that goes under your name in main bio
    description: `Software development engineer`,
    // Optional: Twitter account handle
    author: `@_LoicB`,
    // Optional: Github account URL
    github: `https://github.com/LoicB`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/loicbeylot/`,
    // Content of the About Me section
    about: `
    I am a highly motivated and knowledgeable Java developer with eleven years of commercial experience, including front end development experiences (React, Swing) and mobile experiences (J2ME, iOS, and Android).
    Currently, I work for Ricoh Europe PLC, as a Software development engineer, creating applications using Java, and Typescript as main programming languages.
    
My very first experience of coding was in Primary school. With my classmates, we were introduced to our very first programming language, Logo. We did not know that it was coding per se. but moving the little turtle using simple commands was a lot of fun. 
It is a university that I really learned how to do programming, by applying newly acquired language such as Java and C, combined with methodologies (XP, TDD)`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Devfolio',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Ricoh Europe PLC',
        description: 'Software Development Engineer, June 2013 - Present',
        link: 'https://www.ricoh-europe.com/index.html',
      },
      {
        name: 'Anritsu',
        description: 'Software Development Engineer, February 2012 - October 2012',
        link: 'https://www.anritsu.com/',
      },
      {
        name: 'DSPG Telecom',
        description: 'Software Developer, June 2007 - August 2001',
        link: 'http://www.dspg.co.uk',
      },
    ],
    // Optional: List your skills, mthey must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Java (SDK-8), Groovy, Junit, Spock, React, Typescript',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
