const AdvancedReactCert = "/static/screenshots/AdvancedReactCert.png";
const CustomWebIcons = "/static/screenshots/Custom-Icons-SS-min.png";
const DoublePendulumSS = "/static/screenshots/DoublePendulum-SS-min.png";
const FeatureSpotlight = "/static/screenshots/FeatureSpotlight-SS-min.png";
const FractalTreesSS = "/static/screenshots/FractalTrees-SS-min.png";
const KyleBonarReactWebsite =
  "/static/screenshots/KyleBonarReactWebsite-SS-min.png";
const KyleBonarOriginalWebsite =
  "/static/screenshots/KyleBonarOriginalWebsite-SS-min.png";
const PhyllotaxisSS = "/static/screenshots/Phyllotaxis-SS-min.png";
const PingPongSS = "/static/screenshots/PingPong-SS-min.png";
const SonsofVidya = "/static/screenshots/SonsofVidya-SS-min.png";
const TamuAstronomySS = "/static/screenshots/Tamu-Astronomy-SS-min.png";
const TamuPhysicsSS = "/static/screenshots/Tamu-Physics-SS-min.png";
const TexasOakWiltSS = "/static/screenshots/Texas-Oak-Wilt-SS-min.png";
const SFYTSS = "/static/screenshots/SFYT-SS-min.png";
const SickFitsSS = "/static/screenshots/SickFits-SS-min.png";
const WordCounterSS = "/static/screenshots/WordCounter-SS-min.png";

const AdobeIllustratorLogo = "/static/icons/Adobe-Illustrator-CC-Logo.png";
const ApolloClientLogo = "/static/icons/ApolloClient-Logo.png";
const BootstrapLogo = "/static/icons/Bootstrap-Logo.png";
const CSS3Logo = "/static/icons/CSS3-Logo.png";
const ExpressLogo = "/static/icons/ExpressJS-Logo.png";
const FoundationLogo = "/static/icons/Foundation-Logo.png";
const GitHubLogo = "/static/icons/GitHub-Logo.png";
const HTML5Logo = "/static/icons/HTML5-Logo.png";
const JSLogo = "/static/icons/JS-Logo.png";
const JQueryLogo = "/static/icons/JQuery-Logo.png";
const LinuxLogo = "/static/icons/Linux-Logo.png";
const MySQLLogo = "/static/icons/MySQL-Logo.png";
const NginxLogo = "/static/icons/Nginx-Logo.png";
const NodeJSLogo = "/static/icons/NodeJS-Logo.png";
const PHPLogo = "/static/icons/PHP-Logo.png";
const PrismaLogo = "/static/icons/Prisma-Logo.png";
const ReactJSLogo = "/static/icons/ReactJS-Logo.png";
const ReduxLogo = "/static/icons/Redux-Logo.png";
const SassLogo = "/static/icons/Sass-Logo.png";
const StyledComponentsLogo = "/static/icons/StyledComponents-Logo.png";
const TSLogo = "/static/icons/TS-Logo.png";
const WordPressLogo = "/static/icons/Wordpress-Logo.png";
const YogaLogo = "/static/icons/Yoga-Logo.png";

export interface IProjectImageItem {
  path: string;
  alt?: string;
}
export interface IToolsItem {
  name: string;
  img: string;
  link?: string;
}

export interface IProjectItem {
  isActive: boolean;
  url: string;
  documentTitleName: string;
  name: string;
  purpose?: string;
  results?: string;
  description: string;
  tools: Array<IToolsItem>;
  images: Array<IProjectImageItem>;
  external: { link: string; name: string };
}

const tools: { [name: string]: IToolsItem } = {
  AdobeIllustrator: {
    name: "Adobe Illustrator CC",
    img: AdobeIllustratorLogo,
    link: "https://www.adobe.com/products/illustrator.html"
  },
  ApolloClient: {
    name: "Apollo Client",
    img: ApolloClientLogo,
    link: "https://www.apollographql.com/docs/react/"
  },
  Bootstrap3: {
    name: "Bootstrap CSS Library",
    img: BootstrapLogo,
    link: "https://getbootstrap.com/docs/3.3/"
  },
  CSS3: {
    name: "CSS3",
    img: CSS3Logo,
    link: "https://developer.mozilla.org/en-US/docs/Web/css"
  },
  ExpressJS: {
    name: "ExpressJS Routing",
    img: ExpressLogo,
    link: "https://expressjs.com/"
  },
  Foundation: {
    name: "Foundation Zurb CSS library",
    img: FoundationLogo,
    link: "https://get.foundation/"
  },
  GitHub: {
    name: "GitHub",
    img: GitHubLogo,
    link: "https://github.com/"
  },
  GraphQLYoga: {
    name: "GraphQL Yoga",
    img: YogaLogo,
    link: "https://github.com/prisma-labs/graphql-yoga"
  },
  HTML5: {
    name: "HTML5",
    img: HTML5Logo,
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
  },
  JavaScript: {
    name: "JavaScript",
    img: JSLogo,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  JQuery: {
    name: "JQuery JavaScript library",
    img: JQueryLogo,
    link: "https://jquery.com/"
  },
  Linux: {
    name: "Linux Server Language",
    img: LinuxLogo,
    link: "https://www.linux.org/"
  },
  MySQL: {
    name: "MySQL database",
    img: MySQLLogo,
    link: "https://www.mysql.com/"
  },
  Nginx: {
    name: "Nginx Web Server",
    img: NginxLogo,
    link: "https://www.nginx.com/"
  },
  NodeJS: {
    name: "NodeJS Server Language",
    img: NodeJSLogo,
    link: "https://nodejs.org/en/"
  },
  PHP7: {
    name: "PHP 7.3 Server Language",
    img: PHPLogo,
    link: "https://www.php.net/"
  },
  PHP5: {
    name: "PHP 5.4 Server Language",
    img: PHPLogo,
    link: "https://www.php.net/"
  },
  Prisma: { name: "Prisma", img: PrismaLogo, link: "https://www.prisma.io/s" },
  React: { name: "React", img: ReactJSLogo, link: "https://reactjs.org/" },
  Redux: { name: "Redux", img: ReduxLogo, link: "https://redux.js.org/" },
  Sass: { name: "Sass CSS", img: SassLogo, link: "https://sass-lang.com/" },
  StyledComponents: {
    name: "Styled Components styling",
    img: StyledComponentsLogo,
    link: "https://styled-components.com/"
  },
  TypeScript: {
    name: "TypeScript",
    img: TSLogo,
    link: "https://www.typescriptlang.org/"
  },
  Wordpress: {
    name: "Wordpress",
    img: WordPressLogo,
    link: "https://wordpress.org/"
  }
};

const ProjectList: IProjectItem[] = [
  {
    url: "texas_oak_wilt",
    documentTitleName: "Texas Oak Wilt",
    name: "Texas Oak Wilt",
    purpose:
      "Texas Oak Wilt is a public education campaign within the Texas A&M Forest Service whose primary goal is to inform homeowners and landowners about the devastating effects of Oak Wilt on their trees and to provide assistance where/when they can. The Texas Oak Wilt team wanted to revitalize their relationship with Texas citizens by providing easily accessible and relevant information.",
    description:
      "This site was built using Wordpress which allows for regular administrators to make content updates independently. Website users are able to directly contact their regional forester with questions and concerns through the use of custom forms as well as find local Oak Wilt events near them, which is powered by a custom widget. Additionally, the landing-page design is completely new and features a self-captured image. Lastly, the flow of the website was restructured to help give users a more streamlined flow of helpful information.",
    results:
      "The average users count increased by 40%, and the average session duration increased by 95%. The website also has the highest SEO score of it's search term (oak wilt). The server costs were cut by 94%, and page loading speed increased by 89%. This project was really special because it has real-world impact by helping Texans preserve their natural resources.",
    tools: [
      tools.PHP7,
      tools.Wordpress,
      tools.MySQL,
      tools.JavaScript,
      tools.HTML5,
      tools.CSS3,
      tools.Linux
    ],
    images: [{ path: TexasOakWiltSS }],
    external: {
      link: "https://texasoakwilt.org",
      name: "Texas Oak Wilt Website"
    },
    isActive: true
  },
  {
    url: "sickfits",
    documentTitleName: "Sick Fits",
    name: "Sick Fits",
    purpose:
      "The purpose of this project was primarily self-education. The <a href='https://advancedreact.com/' target='_blank' rel='noopener nofollow'>course</a> walks you through the process of creating an online store using technologies like <a href='https://reactjs.org/' target='_blank' rel='noopener nofollow'>React</a>, <a href='https://graphql.org/' target='_blank' rel='noopeneer nofollow'>GraphQL</a>, and <a href='https://jestjs.io/' target='_blank' rel='noopener nofollow'>Jest</a>. Additionally, I used <a href='https://www.typescriptlang.org/' target='_blank' rel='noopener nofollow'>TypeScript</a> on the front-end which was not included in the course.",
    description:
      "The end-product is an online store where users can purchase/sell products. The application's database is created using five main relational models: <strong> Users, Items, Orders, CartItems, and OrderItems</strong> and is queried using GraphQL. Some of the fun server-side goodies include JWT authentication, user-specific permissions, sending emails, uploading images, and charging credit cards. ",
    results: `After <a href='${AdvancedReactCert}' target='_blank'>completing this course</a>, I am absolutely better at writing React/JavaScript tests. This will certainly be something I carry with me going forward as writing tests are a crucial part to any enterprise application. `,

    tools: [
      tools.React,
      tools.TypeScript,
      tools.ApolloClient,
      tools.StyledComponents,
      tools.NodeJS,
      tools.GraphQLYoga,
      tools.Prisma,
      tools.Linux,
      tools.GitHub
    ],
    images: [{ path: SickFitsSS }],
    external: {
      link: "https://sick-fits.now.sh/",
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
      "Sauce For Your Thoughts (SFYT) was first thought of in early 2017 and was created using the modern JavaScript tech stack like <a href='https://www.typescriptlang.org/' target='_blank' rel='noopener nofollow'>TypesScript</a>, <a href='https://reactjs.org/' target='_blank' rel='noopener nofollow'>ReactJS</a>, <a href='https://redux.js.org/' target='_blank' rel='noopener nofollow'>Redux</a>, <a href='https://nodejs.org/en/' target='_blank' rel='noopener nofollow'>Node</a>, and <a href='https://expressjs.com/' target='_blank' rel='noopener nofollow'>ExpressJS</a>. One of the biggest challenges was, like many side projects, actually finishing it. SFYT was redesigned (both in appearance and code structure), rewritten in TypeScript, put on hold, and picked up again several different times until it was finally published in late 2019. ",
    results:
      "While application is technically open and live to the public, there has not been any official advertising or mentioning yet so it is hard to really gauge any results. I know, personally, this application has been a huge learning asset as far as <a href='https://reactjs.org/' target='_blank' rel='noopener nofollow'>React</a>, <a href='https://redux.js.org/' target='_blank' rel='noopener nofollow'>Redux</a> and <a href='https://www.typescriptlang.org/' target='_blank' rel='noopener nofollow'>TypeScript</a> are concerned. The front-end code can be found <a href='https://github.com/KyleDavisDev/sauce-for-your-thoughts-front' target='_blank' rel='noopener nofollow'>here</a> and the back-end code <a href='https://github.com/KyleDavisDev/sauce-for-your-thoughts-api' target='_blank' rel='noopener nofollow'>here</a>.",
    tools: [
      tools.React,
      tools.TypeScript,
      tools.Redux,
      tools.HTML5,
      tools.StyledComponents,
      tools.NodeJS,
      tools.ExpressJS,
      tools.MySQL,
      tools.Linux,
      tools.GitHub
    ],
    images: [{ path: SFYTSS }],
    external: {
      link: "https://sauceforyourthoughts.com",
      name: "Texas Oak Wilt Website"
    },
    isActive: true
  },
  {
    url: "sons_of_vidya",
    documentTitleName: "Sons of Vidya",
    name: "Sons of Vidya",
    description:
      "The site features a garage-like theme with an awesome vintage logo, several custom badges each with a common Sons' catchphrase, and a 'Feature Video' section that automatically pulls the most-recent Sons video. The front end consists of React and SCSS, while the backend includes Node and Nginx reverse proxying. Additionally, the site has an auto-refreshing SSL certificate through Let's Encrypt and has an overall score of \"A+\" from SSL Labs for security.",
    purpose:
      "The 'Sons of Vidya' is a very small channel on YouTube that I have been watching for years now. In most of their videos, you will find The Sons commentating over themselves playing video games and I find their quirky sense of humor entertaining. After noticing that their previous website was put together in 2011 (and looked like it!) I decided to offer up my skills and contribute back to the channel.",
    results:
      "Using Google Analytics, we can are able to see that the site gets about 30 hits a month which, they have told me, was way more than they were expecting. The Sons continue to sporadically mention the website in their video and continue to show excitement about it. Code can be found <a href='https://github.com/KyleDavisDev/sons-of-vidya' target='_blank' rel='noopener nofollow'>here</a>.",
    tools: [
      tools.NodeJS,
      tools.ExpressJS,
      tools.React,
      tools.HTML5,
      tools.Sass,
      tools.Linux,
      tools.Nginx,
      tools.GitHub
    ],
    images: [{ path: SonsofVidya }],
    external: {
      link: "https://sonsofvidya.kyledavisdev.com",
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
    tools: [tools.HTML5, tools.Bootstrap3, tools.CSS3],
    images: [{ path: FeatureSpotlight }],
    external: {
      link:
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
      tools.Linux,
      tools.Nginx,
      tools.NodeJS,
      tools.ExpressJS,
      tools.React,
      tools.HTML5,
      tools.Sass
    ],
    images: [{ path: KyleBonarReactWebsite }],
    external: {
      link: "https://kyledavisdev.com",
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
      tools.PHP5,
      tools.Wordpress,
      tools.MySQL,
      tools.JQuery,
      tools.JavaScript,
      tools.HTML5,
      tools.Foundation,
      tools.CSS3
    ],
    images: [{ path: TamuPhysicsSS }],
    external: {
      link: "http://physics.tamu.edu",
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
      tools.PHP5,
      tools.Wordpress,
      tools.MySQL,
      tools.JQuery,
      tools.JavaScript,
      tools.HTML5,
      tools.Foundation,
      tools.CSS3
    ],
    images: [{ path: TamuAstronomySS }],
    external: {
      link: "http://mitchell.physics.tamu.edu",
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
      tools.Linux,
      tools.Nginx,
      tools.PHP5,
      tools.JavaScript,
      tools.HTML5,
      tools.CSS3
    ],
    images: [{ path: KyleBonarOriginalWebsite }],
    external: {
      link: "/KyleBonar_2015",
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
    tools: [tools.AdobeIllustrator],
    images: [{ path: CustomWebIcons }],
    external: {
      link: "https://github.com/KyleDavisDev/utsa-icons",
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
    tools: [tools.JavaScript, tools.HTML5, tools.CSS3],
    images: [{ path: WordCounterSS }],
    external: {
      link: "/JSGames/wordCount",
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
    tools: [tools.JavaScript, tools.HTML5, tools.CSS3],
    images: [{ path: PhyllotaxisSS }],
    external: {
      link: "/JSGames/phyllotaxis",
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
    tools: [tools.JavaScript, tools.HTML5, tools.CSS3],
    images: [{ path: FractalTreesSS }],
    external: {
      link: "/JSGames/fractalTrees",
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
    tools: [tools.JavaScript, tools.HTML5, tools.CSS3],
    images: [{ path: DoublePendulumSS }],
    external: {
      link: "/JSGames/doublePend",
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
    tools: [tools.JavaScript, tools.HTML5, tools.CSS3],
    images: [{ path: PingPongSS }],
    external: {
      link: "/JSGames/pong",
      name: "Simple Pong Game"
    },
    isActive: true
  }
];

export default ProjectList;
