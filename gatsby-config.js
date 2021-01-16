module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://hopeful-stonebraker-0e5458.netlify.app`,
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
    Highly motivated and knowledgeable software developer with eleven years of 
    commercial experience, I am currently working for Ricoh Europe PLC, as a 
    Software development engineer, creating applications using Java, and 
    React/TypeScrip. 
    
    My path in programming started as early as primary school when I was 
    introduced to my very first programming language, Logo. 
    Later, I really started learning to program at university, where I learned 
    Java, which I am still using today, and discovered the first programming 
    methodologies such as TDD and Extreme Programming. 
    During my first professional experience, we worked on accessibility solutions, 
    creating frontend interfaces with Swing and mobile applications (J2ME, 
    Android, and iOS). 
    This is during that experience that I learn to focus on creating clean code,
    maintainable and easy to read.
    
    Nowadays I am working on office solutions, in an Agile environment, to 
    provide to our customer easy connection to the cloud to improve their productivity.
    `,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Advent of code 2020',
        description:
          'Advent of code is a yearly event, during which a new puzzle is published every day during the advent season',
        link: 'https://github.com/LoicB/Advent-of-Code-2020',
      }
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
