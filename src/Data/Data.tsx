import AdvancedReactCert from "../images/screenshots/AdvancedReactCert.png";
import CustomWebIcons from "../images/screenshots/Custom-Icons-SS-min.png";
import DoublePendulumSS from "../images/screenshots/DoublePendulum-SS-min.png";
import FeatureSpotlight from "../images/screenshots/FeatureSpotlight-SS-min.png";
import FractalTreesSS from "../images/screenshots/FractalTrees-SS-min.png";
import KyleBonarReactWebsite from "../images/screenshots/KyleBonarReactWebsite-SS-min.png";
import KyleBonarOriginalWebsite from "../images/screenshots/KyleBonarOriginalWebsite-SS-min.png";
import PhyllotaxisSS from "../images/screenshots/Phyllotaxis-SS-min.png";
import PingPongSS from "../images/screenshots/PingPong-SS-min.png";
import SonsofVidya from "../images/screenshots/SonsofVidya-SS-min.png";
import TamuAstronomySS from "../images/screenshots/Tamu-Astronomy-SS-min.png";
import TamuPhysicsSS from "../images/screenshots/Tamu-Physics-SS-min.png";
import TexasOakWiltSS from "../images/screenshots/Texas-Oak-Wilt-SS-min.png";
import SFYTSS from "../images/screenshots/SFYT-SS-min.png";
import SickFitsSS from "../images/screenshots/SickFits-SS-min.png";
import WordCounterSS from "../images/screenshots/WordCounter-SS-min.png";

import AdobeIllustratorLogo from "../images/icons/Adobe-Illustrator-CC-Logo.png";
import ApolloClientLogo from "../images/icons/ApolloClient-Logo.png";
import BootstrapLogo from "../images/icons/Bootstrap-Logo.png";
import CSS3Logo from "../images/icons/CSS3-Logo.png";
import ExpressLogo from "../images/icons/ExpressJS-Logo.png";
import FoundationLogo from "../images/icons/Foundation-Logo.png";
import GitHubLogo from "../images/icons/GitHub-Logo.png";
import HTML5Logo from "../images/icons/HTML5-Logo.png";
import JSLogo from "../images/icons/JS-Logo.png";
import JQueryLogo from "../images/icons/JQuery-Logo.png";
import LinuxLogo from "../images/icons/Linux-Logo.png";
import MySQLLogo from "../images/icons/MySQL-Logo.png";
import NginxLogo from "../images/icons/Nginx-Logo.png";
import NodeJSLogo from "../images/icons/NodeJS-Logo.png";
import PHPLogo from "../images/icons/PHP-Logo.png";
import PrismaLogo from "../images/icons/Prisma-Logo.png";
import ReactJSLogo from "../images/icons/ReactJS-Logo.png";
import ReduxLogo from "../images/icons/Redux-Logo.png";
import SassLogo from "../images/icons/Sass-Logo.png";
import StyledComponentsLogo from "../images/icons/StyledComponents-Logo.png";
import TSLogo from "../images/icons/TS-Logo.png";
import WordPressLogo from "../images/icons/Wordpress-Logo.png";
import YogaLogo from "../images/icons/Yoga-Logo.png";

export interface IProjectItem {
  url: string;
  documentTitleName: string;
  name: string;
  purpose?: string;
  results?: string;
  description: string;
  tools: Array<{ name: string; img: any }>;
  img: any;
  external: { linkPath: string; name: string };
  isActive: boolean;
}

const ProjectList: IProjectItem[] = [
  {
    url: "texas_oak_wilt",
    documentTitleName: "Texas Oak Wilt",
    name: "Texas Oak Wilt",
    purpose:
      "The Texas Oak Wilt team wanted to revitalize their relationship with Texas homeowners by providing easily accessible information that is actually relevant to them.",
    description:
      "Texas Oak Wilt is a non-profit organization under the Texas Forest Service whose primary goal is to inform homeowners about the devastating effects of Oak Wilt and to provide assistance where they can. The site uses Wordpress, custom widgets, custom css, custom forms, custom images, and a custom logo. This was a really great project and I hope the residents of Texas utilize some of the awesome features built in.",
    results:
      "The average users count increased by 40%, and the average session duration increased by 95%. The website also has the highest SEO score of it's search term (oak wilt). The server costs were cut by 94%, and page loading speed increased by 89%. ",
    tools: [
      {
        name: "PHP 7.3 Server Language",
        img: PHPLogo
      },
      { name: "Wordpress", img: WordPressLogo },
      {
        name: "MySQL database",
        img: MySQLLogo
      },
      { name: "JavaScript", img: JSLogo },
      { name: "HTML5", img: HTML5Logo },
      { name: "CSS3", img: CSS3Logo },
      {
        name: "Linux Server Language",
        img: LinuxLogo
      }
    ],
    img: TexasOakWiltSS,
    external: {
      linkPath: "https://texasoakwilt.org",
      name: "Texas Oak Wilt Website"
    },
    isActive: true
  },
  {
    url: "sickfits",
    documentTitleName: "Sick Fits",
    name: "Sick Fits",
    purpose:
      "The purpose of this project was primarily for self-education. The <a href='https://advancedreact.com/' target='_blank' rel='noopener nofollow'>course</a> walks you through the process of creating an online store using technologies like <a href='https://reactjs.org/' target='_blank' rel='noopener nofollow'>React</a>, <a href='https://graphql.org/' target='_blank' rel='noopeneer nofollow'>GraphQL</a>, and <a href='https://jestjs.io/' target='_blank' rel='noopener nofollow'>Jest</a>. Additionally, I used <a href='https://www.typescriptlang.org/' target='_blank' rel='noopener nofollow'>TypeScript</a> on the front-end which was not a requirement of the course.",
    description:
      "The end-product is an online store where users can purchase/sell products. The application's database is created using five main relational models: <strong> Users, Items, Orders, CartItems, and OrderItems</strong> and is queried using GraphQL. Some of fun server goodies include JWT authentication, user-specific permissions, sending emails, uploading images, and charging credit cards. ",
    results: `After <a href='${AdvancedReactCert}' target='_blank'>completing this course</a>, I am absolutely better at writting React/JavaScript tests. This will certainly be something I carry with me going forward as writting tests is a crucial part to any enterprise application. `,
    tools: [
      { name: "React", img: ReactJSLogo },
      { name: "TypeScript", img: TSLogo },
      { name: "Apollo Client", img: ApolloClientLogo },
      { name: "Styled Components styling", img: StyledComponentsLogo },
      {
        name: "NodeJS Server Language",
        img: NodeJSLogo
      },
      { name: "GraphQL Yoga", img: YogaLogo },
      { name: "Prisma", img: PrismaLogo },
      {
        name: "Linux Server Language",
        img: LinuxLogo
      }
    ],
    img: SickFitsSS,
    external: {
      linkPath: "https://sick-fits.now.sh/",
      name: "Sick Fits website"
    },
    isActive: true
  },
  {
    url: "sfyt",
    documentTitleName: "Sauce For Your Thoughts",
    name: "Sauce For Your Thoughts",
    purpose:
      "I love trying new foods. I love new flavors. I cannot resist buying a new bottle of hot sauce when I see it. The problem, however, is sometime I forget what a hot sauce tastes like and will end up buying the same bottle multiple times. This application serves as a catalog for all of the different sauces and flavors and helps me look back on the bottles I really enjoyed and the ones I did not.",
    description:
      "Sauce For Your Thoughts (SFYT) was first thought of in early 2017 and was created using the modern JavaScript tech stack like TypesScript, ReactJS, Redux, Node, and ExpressJS. One of the biggest challenges was, like many side projects, actually finishing it. SFYT was redesigned, rearchitectured, rewritten, put on hold, and picked up again several different times until it was finally published in late 2019. ",
    results: "The catalog of sauces is growing ",
    tools: [
      { name: "React", img: ReactJSLogo },
      { name: "TypeScript", img: TSLogo },
      { name: "Redux", img: ReduxLogo },
      { name: "HTML5", img: HTML5Logo },
      { name: "Styled Components styling", img: StyledComponentsLogo },
      {
        name: "NodeJS Server Language",
        img: NodeJSLogo
      },
      {
        name: "ExpressJS Routing",
        img: ExpressLogo
      },
      {
        name: "MySQL database",
        img: MySQLLogo
      },
      {
        name: "Linux Server Language",
        img: LinuxLogo
      }
    ],
    img: SFYTSS,
    external: {
      linkPath: "https://sauceforyourthoughts.com",
      name: "Texas Oak Wilt Website"
    },
    isActive: true
  },
  {
    url: "sons_of_vidya",
    documentTitleName: "Sons of Vidya",
    name: "Sons of Vidya",
    description:
      "The site features a garage-like theme with an awesome vintage logo, several custom badges each with a common Sons' catchphrase, and a 'Feature Video' section that automatically pulls the most-recent Sons video. The front end consists of React and SCSS, while the backend includes Node and Nginx reverse proxying. Additionally, the site has an autorefreshing SSL certificate through Let's Encrypt and has an overall score of \"A+\" from SSL Labs for security.",
    purpose:
      "The 'Sons of Vidya' is a very small channel on YouTube that I have been watching for years now. In most of their videos, you will find The Sons commentating over themselves playing video games and I find their quirky sense of humor entertaining. After noticing that their previouse website was put together in 2011 (and looked like it!) I decided to offer up my skills and contribute back to the channel.",
    results:
      "Using Google Analytics, we can are able to see that the site gets about 30 hits a month which, they have told me, was way more than they were expecting. The Sons continue to sporatically mention the website in their video and continue to show excitement about it.",
    tools: [
      {
        name: "NodeJS Server Language",
        img: NodeJSLogo
      },
      {
        name: "ExpressJS Routing",
        img: ExpressLogo
      },
      {
        name: "ReactJS Library",
        img: ReactJSLogo
      },
      { name: "HTML5", img: HTML5Logo },
      { name: "Sass CSS", img: SassLogo },
      {
        name: "Linux Server Language",
        img: LinuxLogo
      },
      { name: "Nginx Web Server", img: NginxLogo }
    ],
    img: SonsofVidya,
    external: {
      linkPath: "https://sonsofvidya.kyledavisdev.com",
      name: "Sons of Vidya Fan Website"
    },
    isActive: true
  },
  {
    url: "feature_spotlight",
    documentTitleName: "Feature Spotlight",
    name: "Feature Spotlight",
    description:
      "This project was originally developed for the UTSA Mobile App in an attempt to battle the feeling of staleness, which existed on the app prior. Originally, the app would open up to a \"What's New\" landing page which would be updated every couple of months but with the new design and layout, any of the app's components can be promoted and shown off at the drop of a hat. In production, this design has been used for the calendar, student registration, a tech conference, and now dining. This design is responsive and will soon be used on other non-mobile platforms as well.",
    tools: [
      { name: "HTML5", img: HTML5Logo },
      {
        name: "Bootstrap CSS Library",
        img: BootstrapLogo
      },
      { name: "CSS3", img: CSS3Logo }
    ],
    img: FeatureSpotlight,
    external: {
      linkPath:
        "https://crane.it.utsa.edu:8443/resources/appSpotlight/dining/index.html",
      name: "UTSA Feature Spotlight"
    },
    isActive: true
  },
  {
    url: "kyle_bonar_react",
    documentTitleName: "React Portfolio",
    name: "ReactJS Portfolio",
    description:
      'A bit recursive, right? This project was a complete rewrite of my original portfolio website. This project has served as a platform for me to get comfortable with a ton of different popular JavaScript technologies and the build tools often associate with them; namely NodeJS, ReactJS, Express, Webpack, and Babel. Originally, I started with Facebook\'s "create-react-app", which greatly simplifies getting started with ReactJS, however I much prefer knowing what was going on under the hood. Because of this, I spent a good bit of time figuring out all of the individually pieces and how they work together. Understanding the ground-level components, I believe, have helped me to not only become a better ReactJS developer, but developer as a whole. Another awesome aspect of this project is scoring an "A+" in security, which is the highest score, from SSL Labs!',
    tools: [
      {
        name: "Linux Server Language",
        img: LinuxLogo
      },
      { name: "Nginx Web Server", img: NginxLogo },
      {
        name: "NodeJS Server Language",
        img: NodeJSLogo
      },
      {
        name: "ExpressJS Routing",
        img: ExpressLogo
      },
      {
        name: "ReactJS Library",
        img: ReactJSLogo
      },
      { name: "HTML5", img: HTML5Logo },
      { name: "Sass CSS", img: SassLogo }
    ],
    img: KyleBonarReactWebsite,
    external: {
      linkPath: "https://kyledavisdev.com",
      name: "Kyle Davis ReactJS Portfolio Website"
    },
    isActive: false
  },
  {
    url: "tamu_physics",
    documentTitleName: "TAMU Physics",
    name: "Texas A&M Physics Website",
    description:
      "In just two short months, the Physics Department's website was given a massive overhaul. Everything from choosing a new server host, to updating the backend logic and databases, to making the design responsive, to providing the staff and faculty members a practical way to update and manage content throughout the site. On a massive team of exactly two people, I played a huge role in getting this project up and running.",
    tools: [
      {
        name: "PHP 5.4 Server Language",
        img: PHPLogo
      },
      { name: "Wordpress", img: WordPressLogo },
      {
        name: "MySQL database",
        img: MySQLLogo
      },
      {
        name: "JQuery JavaScript library",
        img: JQueryLogo
      },
      { name: "JavaScript", img: JSLogo },
      { name: "HTML5", img: HTML5Logo },
      {
        name: "Foundation Zurb CSS library",
        img: FoundationLogo
      },
      { name: "CSS3", img: CSS3Logo }
    ],
    img: TamuPhysicsSS,
    external: {
      linkPath: "http://physics.tamu.edu",
      name: "TAMU Physics Website"
    },
    isActive: true
  },
  {
    url: "tamu_mitchell",
    documentTitleName: "TAMU Astronomy",
    name: "Texas A&M Astronomy Website",
    description:
      "As a student Web Development Assistant, I worked on a small team to recreate the Astronomy Department's home domain. We were responsible for migrating years of static content into a MySQL database, for both easier management and record keeping, while also ensuring that every page be responsive. Several custom Wordpress themes were developed for this project and are actively maintained today.",
    tools: [
      {
        name: "PHP 5.4 Server Language",
        img: PHPLogo
      },
      { name: "Wordpress", img: WordPressLogo },
      {
        name: "MySQL database",
        img: MySQLLogo
      },
      {
        name: "JQuery JavaScript library",
        img: JQueryLogo
      },
      { name: "JavaScript", img: JSLogo },
      { name: "HTML5", img: HTML5Logo },
      {
        name: "Foundation Zurb CSS library",
        img: FoundationLogo
      },
      { name: "CSS3", img: CSS3Logo }
    ],
    img: TamuAstronomySS,
    external: {
      linkPath: "http://mitchell.physics.tamu.edu",
      name: "TAMU Astronomy Website"
    },
    isActive: true
  },
  {
    url: "kyle_bonar_original",
    documentTitleName: "Original Website",
    name: "Kyle Bonar First Personal Website",
    description:
      "When I started this project, I simply wanted to show off some projects that I had built, I had no idea the steps involved to put a website out on the internet. Starting from scratch, I had to configure a fresh server, install all of the proper tools, register and connect to the proper domain name, and implement security protocols. Luckily, with enough documentation and triple-checking each and every step, I was able to create this all my own. The webpage may not be the most visually appealing thing but I am incredibly proud of myself for sticking it out, and not getting overwhelmed by the immense challenge. Lastly, this project was built on the LEMP stack although, as it stands, is mostly just a static webpage.",
    tools: [
      {
        name: "Linux Server Language",
        img: LinuxLogo
      },
      { name: "Nginx Web Server", img: NginxLogo },
      {
        name: "PHP 5.4 Server Language",
        img: PHPLogo
      },
      { name: "JavaScript", img: JSLogo },
      { name: "HTML5", img: HTML5Logo },
      { name: "CSS3", img: CSS3Logo }
    ],
    img: KyleBonarOriginalWebsite,
    external: {
      linkPath: "/KyleBonar_2015",
      name: "Original Kyle Bonar Website"
    },
    isActive: false
  },
  {
    url: "illustrator_web_icons",
    documentTitleName: "Adobe Illustrator Web Icons",
    name: "Adobe Illustrator Web Icons",
    description:
      "As a UI/UX Developer for The University of Texas at San Antonio, I have spent a fair amount of time inside of the Adobe Suite. In doing so, I have created many icons, logos, and document designs which are currently being used across UTSA including UTSA Mobile App itself. I have also grown more comfortable in optimizing high-resolution images into a more web appropriate form to increase page load times and to decrease page load sizes.",
    tools: [
      {
        name: "Adobe Illustrator CC",
        img: AdobeIllustratorLogo
      }
    ],
    img: CustomWebIcons,
    external: {
      linkPath: "https://github.com/KyleDavisDev/utsa-icons",
      name: "GitHub of Web Icons"
    },
    isActive: false
  },
  {
    url: "Word_Counting_App",
    documentTitleName: "Word Counter",
    name: "Word Counting App",
    description:
      "Fun application that counts the number of times each unique word appears within a text area and creates a \"bubble\" with a respective area. Becoming more comfortable with JavaScript's Object Oriented Programming and using JavaScript's canvas method to have a little fun were the main goals of this project. Even with a block of text 32,000 lines long and over 8,000 unique words, the application works like a charm. This code can be found in my gitHub.",
    tools: [
      { name: "JavaScript", img: JSLogo },
      { name: "HTML5", img: HTML5Logo },
      { name: "CSS3", img: CSS3Logo }
    ],
    img: WordCounterSS,
    external: {
      linkPath: "/JSGames/wordCount",
      name: "Fun Word Counting Application"
    },
    isActive: false
  },
  {
    url: "Phyllotaxis_App",
    documentTitleName: "Phyllotaxis",
    name: "Phyllotaxis App",
    description:
      "To create nice phyllotaxis images using only client-side rendering. Users can click anywhere within the canvas to create unique patterns and hopefully learn a bit too! The most common of phyllotaxis plants is the Aloe Polyphylla. This code can be found in my gitHub.",
    tools: [
      { name: "JavaScript", img: JSLogo },
      { name: "HTML5", img: HTML5Logo },
      { name: "CSS3", img: CSS3Logo }
    ],
    img: PhyllotaxisSS,
    external: {
      linkPath: "/JSGames/phyllotaxis",
      name: "Phyllotaxis Art"
    },
    isActive: true
  },
  {
    url: "Fractal_Trees_App",
    documentTitleName: "Fractal Trees",
    name: "Fractal Trees App",
    description:
      "To create a nice application which captures the ideas of fractal design. Users can click the canvas and cause a single branch to split into two. When the user clicks again, the branches will split again, so forth and so on. At any time, the tree can reset while sliders allow for customization and design a unique tree. This code can be found on my gitHub.",
    tools: [
      { name: "JavaScript", img: JSLogo },
      { name: "HTML5", img: HTML5Logo },
      { name: "CSS3", img: CSS3Logo }
    ],
    img: FractalTreesSS,
    external: {
      linkPath: "/JSGames/fractalTrees",
      name: "Fractal Tree Application"
    },
    isActive: true
  },
  {
    url: "Double_Pendulum_Vis",
    documentTitleName: "Double Pendulum",
    name: "Double Pendulum Visualization",
    description:
      "Inspired by my research as a senior in computational physics, the double pendulum is an excellent example of chaos theory. The simplified idea is that even the slightest change in the initial conditions can lead to a drastic change in the overall outcome of a system is incredibly interesting. This application relies entirely on the browser to run the model and the user can modify the double pendulum by using sliders. This code can be found on my gitHub.",
    tools: [
      { name: "JavaScript", img: JSLogo },
      { name: "HTML5", img: HTML5Logo },
      { name: "CSS3", img: CSS3Logo }
    ],
    img: DoublePendulumSS,
    external: {
      linkPath: "/JSGames/doublePend",
      name: "Double Pendulum Visualization"
    },
    isActive: true
  },
  {
    url: "Classic_Ping_Pong",
    documentTitleName: "Ping Pong",
    name: "Classic Ping Pong Application",
    description:
      "A classic arcade game brought to you in a browser! This was my first time messing around with HTML5's canvas as well as creating a very simple A.I.. Users simply need to click on the canvas to start the game, and use the arrow up and down arrow keys to move their paddle. The ball speeds up over time so be careful! This code can be found in my GitHub.",
    tools: [
      { name: "JavaScript", img: JSLogo },
      { name: "HTML5", img: HTML5Logo },
      { name: "CSS3", img: CSS3Logo }
    ],
    img: PingPongSS,
    external: {
      linkPath: "/JSGames/pong",
      name: "Simple Pong Game"
    },
    isActive: true
  }
];

export default ProjectList;
