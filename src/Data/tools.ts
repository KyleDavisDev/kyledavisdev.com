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

export interface IToolsItem {
  name: string;
  img: string;
  link?: string;
}

export const tools: { [name: string]: IToolsItem } = {
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
