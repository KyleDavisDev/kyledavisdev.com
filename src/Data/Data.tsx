import { tools, IToolsItem } from "./tools";

export interface IProjectImageItem {
  thumbnailPath: string;
  largePath: string;
  alt?: string;
}

export interface IExternalData {
  isActive: boolean;
  link: string;
  name: string;
  linkText?: string;
}

export interface IProjectItem {
  isActive: boolean;
  url: string;
  documentTitleName: string;
  name: string;
  pubYear?: string;
  purpose?: string;
  results?: string;
  description: string;
  tools: Array<IToolsItem>;
  images: Array<IProjectImageItem>;
  external: IExternalData;
}

const ProjectList: IProjectItem[] = [
  {
    url: "turtle",
    pubYear: "2022",
    documentTitleName: "Wordle clone",
    name: "Wordle clone (Turtle)",
    purpose:
      "For the final project in one of my <a href='/project/vanderbilt' target='_blank'>Vanderbilt</a> classes, we were asked to create something that demonstrates the ideas that we've learned throughout the course. I chose to make a clone of the extremely popular <a href='https://www.nytimes.com/games/wordle/index.html' target='_blank' rel='noopener'>Wordle</a> game!",
    description:
      "Turtle, the name of my Wordle clone, follows the same ruleset as <a href='https://www.nytimes.com/games/wordle/index.html' target='_blank' rel='noopener'>Wordle</a> where users attempt to guess the secret word and then are provided visual feedback on each of the letters that were used. In comparison to <a href='https://www.nytimes.com/games/wordle/index.html' target='_blank' rel='noopener'>Wordle</a>, Turtle is very configurable! Users can adjust how long of a word they want to guess (instead of the default 5), as well as how many guesses they want to have (instead of the default 6). I also included a Spanish mode and a Vanderbilt-specific mode! At the end of each Turtle game, you can share your results and choose to play another round. Each time you load the game up, it's a new word, so you won't have to wait until the next day.",
    results:
      "I'm extremely happy with how this project turned out! Since there were no requirements on the language we had to use, I was able to implement my project using a technology that I've been wanting to learn for a while now. That technology is <a href='https://reactnative.dev/' target='_blank' rel='noopener'>React Native</a>, and more specifically, the <a href='https://expo.dev/' target='_blank' rel='noopener'>Expo framework</a>. With <a href='https://expo.dev/' target='_blank' rel='noopener'>Expo</a>, you can write your codebase once and then publish the application as a website, as an Apple app, or as an Android app. I was able to use the following design patterns: <a href='https://en.wikipedia.org/wiki/Factory_method_pattern' target='_blank' rel='noopener'>Factory Method</a>, <a href='https://en.wikipedia.org/wiki/Strategy_pattern' target='_blank' rel='noopener'>Strategy</a>, <a href='https://en.wikipedia.org/wiki/Dependency_injection' target='_blank' rel='noopener'>Dependency Injection</a>, and the <a href='https://en.wikipedia.org/wiki/Observer_pattern' target='_blank' rel='noopener'>Observer</a>. This project was an absolute joy to work on and even more fun to play!",
    tools: [tools.React, tools.Expo, tools.GitHub],
    images: [
      {
        thumbnailPath: "/static/screenshots/Turtle/instructions_1024x1024.png",
        largePath: "/static/screenshots/Turtle/instructions_1024x1024.png"
      },
      {
        thumbnailPath: "/static/screenshots/Turtle/first_1024x1024.png",
        largePath: "/static/screenshots/Turtle/first_1024x1024.png"
      },
      {
        thumbnailPath: "/static/screenshots/Turtle/second_1024x1024.png",
        largePath: "/static/screenshots/Turtle/second_1024x1024.png"
      },
      {
        thumbnailPath: "/static/screenshots/Turtle/third_1024x1024.png",
        largePath: "/static/screenshots/Turtle/third_1024x1024.png"
      },
      {
        thumbnailPath: "/static/screenshots/Turtle/fourth_1024x1024.png",
        largePath: "/static/screenshots/Turtle/fourth_1024x1024.png"
      },
      {
        thumbnailPath: "/static/screenshots/Turtle/fifth_1024x1024.png",
        largePath: "/static/screenshots/Turtle/fifth_1024x1024.png"
      },
      {
        thumbnailPath: "/static/screenshots/Turtle/winner_1024x1024.png",
        largePath: "/static/screenshots/Turtle/winner_1024x1024.png"
      },
      {
        thumbnailPath: "/static/screenshots/Turtle/options_1024x1024.png",
        largePath: "/static/screenshots/Turtle/options_1024x1024.png"
      },
      {
        thumbnailPath: "/static/screenshots/Turtle/bigGrid3_1024x1024.png",
        largePath: "/static/screenshots/Turtle/bigGrid3_1024x1024.png"
      },
      {
        thumbnailPath: "/static/screenshots/Turtle/spanish_1024x1024.png",
        largePath: "/static/screenshots/Turtle/spanish_1024x1024.png"
      }
    ],
    external: {
      isActive: true,
      linkText: "View game",
      link: "https://turtle.kyledavisdev.com",
      name: "Wordle clone (Turtle)"
    },
    isActive: true
  },
  {
    url: "vanderbilt",
    pubYear: "2022",
    documentTitleName: "Vanderbilt University - Master's in Computer Science",
    name: "Master's in Computer Science",
    purpose:
      "Earning a Master's in Computer Science has been a personal goal for many years. A Master's degree will help me gain specialized knowledge and demonstrate advanced expertise. Additionally, I'll have a stronger foundation to work across many different industries such as mobile and cloud computing.",
    description:
      "I applied to <a href='https://www.vanderbilt.edu/' target='_blank' rel='nofollow noopener'>Vanderbilt University</a> in the summer of 2021 due to their high-quality program and their online-only format. I was accepted quickly after and my first semester was in January 2022. The curriculum includes topics such as Mobile and cloud computing, Cybersecurity, Distributed systems, Intelligent systems, Software and systems engineering, and Computer science theory.",
    results:
      "My first semester started in January 2022, and I have been impressed and engaged with the program so far. The online format seems to lend itself towards self-motivated, working professionals. I have classmates across the nation and many of them are in very different industries from me; each bringing their own perspective and experience to the classroom. Every week our discussions are productive and show me different angles and styles of coding. I've learned so much within just a few months.",
    tools: [tools.Java, tools.GitHub],
    images: [
      {
        thumbnailPath: "/static/screenshots/Vanderbilt/Engineering_300x300.png",
        largePath: "/static/screenshots/Vanderbilt/Engineering_512x512.png"
      }
    ],
    external: {
      isActive: true,
      linkText: "View program",
      link: "https://engineeringonline.vanderbilt.edu/computer-science/",
      name: "Vanderbilt University - Master's in Computer Science"
    },
    isActive: true
  },
  {
    url: "watchbatterychart",
    pubYear: "2021",
    documentTitleName: "Watchbatterychart.com",
    name: "Watch Battery Conversion Chart",
    purpose:
      "This is a dead-simple project that allows you to compare the sizes of different watch battery brands against one another. Need to know how the size of a specific Timex battery compares to a Duracell battery? This is your chart! This site was also created to help alleviate the pain-point of there not being any good-looking and easy-to-read conversion charts online. Every example I could find looked dated or is trying to sell you something. Hopefully this application changes that!",
    description:
      "<a href='https://watchbatterychart.com' target='_blank' rel='nofollow noopener'>Watchbatterychart.com</a> is made using  <a href='https://www.typescriptlang.org/' target='_blank' rel='noopener nofollow'>TypesScript</a>, <a href='https://reactjs.org/' target='_blank' rel='noopener nofollow'>ReactJS</a>, and <a href='https://nextjs.org/' target='_blank' rel='noopener nofollow'>NextJS</a>. It offers a way to sort the table by columns, it has a text input to help filter by, and is responsive! Additionally, the text and spacing is larger than other charts online as well as offers an on-hover color change effect for each row for improved readability.",
    results:
      "Although this application has only just released, I hope that others can make use of it and will find it valuable! I really like enjoyed working with <a href='https://nextjs.org/' target='_blank' rel='noopener nofollow'>NextJS</a> on an application that is simply and straight-forward too because it let me use this technology in a new way.",
    tools: [tools.React, tools.TypeScript, tools.NextJS, tools.StyledComponents, tools.GitHub],
    images: [
      {
        thumbnailPath: "/static/screenshots/WatchBatteryChart/main_300x300.png",
        largePath: "/static/screenshots/WatchBatteryChart/main_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/WatchBatteryChart/middle_300x300.png",
        largePath: "/static/screenshots/WatchBatteryChart/middle_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/WatchBatteryChart/bottom_300x300.png",
        largePath: "/static/screenshots/WatchBatteryChart/bottom_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/WatchBatteryChart/responsive_300x300.png",
        largePath: "/static/screenshots/WatchBatteryChart/responsive_512x512.png"
      }
    ],
    external: {
      isActive: true,
      link: "https://watchbatterychart.com",
      name: "Watch Battery Conversion Chart!"
    },
    isActive: true
  },
  {
    url: "sfyt",
    pubYear: "2017-2020",
    documentTitleName: "Sauce For Your Thoughts",
    name: "Sauce For Your Thoughts",
    purpose:
      "I love trying new foods. I love new flavors. I cannot resist buying a new bottle of hot sauce when I see it. The problem, however, is sometime I forget what a hot sauce tastes like and will end up buying the same bottle multiple times. This application serves as a catalog for all of the different sauces and flavors and helps me look back on the bottles I really enjoyed and the ones I did not.",
    description:
      "Sauce For Your Thoughts (SFYT) was first thought of in early 2017 and was created using the modern JavaScript tech stack like <a href='https://www.typescriptlang.org/' target='_blank' rel='noopener nofollow'>TypesScript</a>, <a href='https://reactjs.org/' target='_blank' rel='noopener nofollow'>ReactJS</a>, <a href='https://redux.js.org/' target='_blank' rel='noopener nofollow'>Redux</a>, <a href='https://nodejs.org/en/' target='_blank' rel='noopener nofollow'>Node</a>, and <a href='https://expressjs.com/' target='_blank' rel='noopener nofollow'>ExpressJS</a>. One of the biggest challenges was, like many side projects, actually finishing it. SFYT was redesigned (both in appearance and code structure), rewritten in TypeScript, put on hold, and picked up again many times until it was finally published in late 2019. ",
    results:
      "While application is technically open and live to the public, there has not been any official advertising or mentioning, so it is hard to really gauge any results. I know, personally, this application has been a huge learning asset as far as <a href='https://reactjs.org/' target='_blank' rel='noopener nofollow'>React</a>, <a href='https://redux.js.org/' target='_blank' rel='noopener nofollow'>Redux</a> and <a href='https://www.typescriptlang.org/' target='_blank' rel='noopener nofollow'>TypeScript</a> are concerned. The front-end code can be found <a href='https://github.com/KyleDavisDev/sauce-for-your-thoughts-front' target='_blank' rel='noopener nofollow'>here</a> and the back-end code <a href='https://github.com/KyleDavisDev/sauce-for-your-thoughts-api' target='_blank' rel='noopener nofollow'>here</a>.",
    tools: [
      tools.React,
      tools.TypeScript,
      tools.Redux,
      tools.NextJS,
      tools.HTML5,
      tools.StyledComponents,
      tools.NodeJS,
      tools.ExpressJS,
      tools.MySQL,
      tools.Linux,
      tools.GitHub
    ],
    images: [
      {
        thumbnailPath: "/static/screenshots/SFYT/Home_300x300.png",
        largePath: "/static/screenshots/SFYT/Home_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/SFYT/Sauces_300x300.jpg",
        largePath: "/static/screenshots/SFYT/Sauces_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/SFYT/Spotlight_300x300.jpg",
        largePath: "/static/screenshots/SFYT/Spotlight_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/SFYT/Add1_300x300.png",
        largePath: "/static/screenshots/SFYT/Add1_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/SFYT/Add2_300x300.png",
        largePath: "/static/screenshots/SFYT/Add2_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/SFYT/Review1_300x300.png",
        largePath: "/static/screenshots/SFYT/Review1_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/SFYT/Review2_300x300.png",
        largePath: "/static/screenshots/SFYT/Review2_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/SFYT/Register_300x300.png",
        largePath: "/static/screenshots/SFYT/Register_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/SFYT/Login_300x300.png",
        largePath: "/static/screenshots/SFYT/Login_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/SFYT/Settings_300x300.png",
        largePath: "/static/screenshots/SFYT/Settings_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/SFYT/UpdateEmail_300x300.png",
        largePath: "/static/screenshots/SFYT/UpdateEmail_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/SFYT/UpdateAvatar_300x300.png",
        largePath: "/static/screenshots/SFYT/UpdateAvatar_512x512.png"
      }
    ],
    external: {
      isActive: true,
      link: "https://sauceforyourthoughts.com",
      name: "Sauce for your thoughts!"
    },
    isActive: true
  },
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
    pubYear: "2018-2019",
    tools: [tools.PHP7, tools.Wordpress, tools.MySQL, tools.JavaScript, tools.HTML5, tools.CSS3, tools.Linux],
    images: [
      {
        thumbnailPath: "/static/screenshots/TexasOakWilt/Main_300x300.jpg",
        largePath: "/static/screenshots/TexasOakWilt/Main_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/TexasOakWilt/FindMyForester_300x300.png",
        largePath: "/static/screenshots/TexasOakWilt/FindMyForester_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/TexasOakWilt/Vendors_300x300.png",
        largePath: "/static/screenshots/TexasOakWilt/Vendors_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/TexasOakWilt/RecommendedTrees_300x300.png",
        largePath: "/static/screenshots/TexasOakWilt/RecommendedTrees_512x469.png"
      },
      {
        thumbnailPath: "/static/screenshots/TexasOakWilt/FAQ2_300x300.png",
        largePath: "/static/screenshots/TexasOakWilt/FAQ2_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/TexasOakWilt/OakwiltSpread_300x300.png",
        largePath: "/static/screenshots/TexasOakWilt/OakwiltSpread_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/TexasOakWilt/Identification_300x300.png",
        largePath: "/static/screenshots/TexasOakWilt/Identification_512x512.png"
      }
    ],
    external: {
      isActive: true,
      link: "https://texasoakwilt.org",
      name: "Texas Oak Wilt"
    },
    isActive: true
  },
  {
    url: "conversationexchange",
    documentTitleName: "Conversation Exchange (POC)",
    name: "Conversation Exchange (POC)",
    purpose:
      "Conversation Exchange (CE) is an extremely popular website for language learning where the main idea is that the best way to learn a second language is to practice someone who speaks it natively. When I noticed that there wasn't a mobile app for the website, I took it upon myself to create a simple Proof of Concept (POC) which is what you see here!",
    description:
      "This POC was built using <a href='https://www.sketch.com/' target='_blank' rel='nofollow noopener'>Sketch</a> and while I have used Sketch to create mock websites, this was the first time using it to create a mock mobile app. The POC includes a login page, a home \"feed\" with clickable articles from the website, a page to read the article, a page for chatroom selection, a page for a specific chatroom, a page to manage your app settings, and a page to manage your profile settings.",
    results:
      "Apart from the owners showing great appreciation for the POC, not a whole lot has come out of project. I really enjoyed the challenge and change-of-pace of designing for a mobile interface instead of my normal website interface and I may do it again in the future!",
    pubYear: "2019",
    tools: [tools.Sketch],
    images: [
      {
        thumbnailPath: "/static/screenshots/ConversationExchange/Login_300x300.png",
        largePath: "/static/screenshots/ConversationExchange/Login_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/ConversationExchange/Home_300x300.png",
        largePath: "/static/screenshots/ConversationExchange/Home_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/ConversationExchange/Home2_300x300.png",
        largePath: "/static/screenshots/ConversationExchange/Home2_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/ConversationExchange/Article_300x300.png",
        largePath: "/static/screenshots/ConversationExchange/Article_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/ConversationExchange/Article2_300x300.png",
        largePath: "/static/screenshots/ConversationExchange/Article2_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/ConversationExchange/Chatrooms_300x300.png",
        largePath: "/static/screenshots/ConversationExchange/Chatrooms_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/ConversationExchange/Chatrooms2_300x300.png",
        largePath: "/static/screenshots/ConversationExchange/Chatrooms2_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/ConversationExchange/Conversation_300x300.png",
        largePath: "/static/screenshots/ConversationExchange/Conversation_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/ConversationExchange/Settings_300x300.png",
        largePath: "/static/screenshots/ConversationExchange/Settings_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/ConversationExchange/Profile_300x300.png",
        largePath: "/static/screenshots/ConversationExchange/Profile_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/ConversationExchange/Profile2_300x300.png",
        largePath: "/static/screenshots/ConversationExchange/Profile2_512x512.png"
      }
    ],
    external: {
      isActive: true,
      link: "https://conversationexchange.com/",
      name: "Conversation Exchange (POC)"
    },
    isActive: true
  },
  {
    url: "sickfits",
    pubYear: "2018",
    documentTitleName: "Sick Fits",
    name: "Sick Fits",
    purpose:
      "The purpose of this project was primarily self-education. The <a href='https://advancedreact.com/' target='_blank' rel='noopener nofollow'>course</a> walks you through the process of creating an online store using technologies like <a href='https://reactjs.org/' target='_blank' rel='noopener nofollow'>React</a>, <a href='https://graphql.org/' target='_blank' rel='noopeneer nofollow'>GraphQL</a>, and <a href='https://jestjs.io/' target='_blank' rel='noopener nofollow'>Jest</a>. Additionally, I used <a href='https://www.typescriptlang.org/' target='_blank' rel='noopener nofollow'>TypeScript</a> on the front-end which was not included in the course.",
    description:
      "The end-product is an online store where users can purchase/sell products. The application's database is created using five main relational models: <strong> Users, Items, Orders, CartItems, and OrderItems</strong> and is queried using GraphQL. Some fun server-side goodies include JWT authentication, user-specific permissions, sending emails, uploading images, and charging credit cards. ",
    results: `After <a href="/static/screenshots/SickFits/AdvancedReactCert.png" target="_blank">completing this course</a>, I am absolutely better at writing React/JavaScript tests. This will certainly be something I carry with me going forward as writing tests are a crucial part to any enterprise application. `,
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
    images: [
      {
        thumbnailPath: "/static/screenshots/SickFits/Main_300x300.png",
        largePath: "/static/screenshots/SickFits/Main_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/SickFits/Login_300x300.png",
        largePath: "/static/screenshots/SickFits/Login_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/SickFits/CreditCardPayment_300x300.png",
        largePath: "/static/screenshots/SickFits/CreditCardPayment_512x647.png"
      },
      {
        thumbnailPath: "/static/screenshots/SickFits/Cart_300x300.png",
        largePath: "/static/screenshots/SickFits/Cart_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/SickFits/SellItem_300x300.png",
        largePath: "/static/screenshots/SickFits/SellItem_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/SickFits/TechStack_300x202.png",
        largePath: "/static/screenshots/SickFits/TechStack_512x344.png"
      },
      {
        thumbnailPath: "/static/screenshots/SickFits/AdvancedReactCert_300x300.png",
        largePath: "/static/screenshots/SickFits/AdvancedReactCert.png"
      }
    ],
    external: {
      isActive: true,
      link: "https://advancedreact.com/",
      name: "Sick Fits",
      linkText: "View Course page"
    },
    isActive: true
  },
  {
    url: "sons_of_vidya",
    pubYear: "2018",
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
    images: [
      {
        thumbnailPath: "/static/screenshots/SonsOfVidya/Landing2_300x300.png",
        largePath: "/static/screenshots/SonsOfVidya/Landing2_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/SonsOfVidya/Banner_300x300.jpg",
        largePath: "/static/screenshots/SonsOfVidya/Banner_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/SonsOfVidya/Banner2_300x300.jpg",
        largePath: "/static/screenshots/SonsOfVidya/Banner2_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/SonsOfVidya/Videos_300x300.jpg",
        largePath: "/static/screenshots/SonsOfVidya/Videos_512x512.png"
      }
    ],
    external: {
      isActive: true,
      link: "https://sonsofvidya.kyledavisdev.com",
      name: "Sons of Vidya Fan"
    },
    isActive: true
  },
  {
    url: "feature_spotlight",
    pubYear: "2017-2018",
    documentTitleName: "Feature Spotlight",
    name: "Feature Spotlight",
    description:
      "This project was originally developed for the UTSA Mobile App in an attempt to battle the feeling of staleness, which existed on the app prior. Originally, the app would open up to a \"What's New\" landing page which would be updated every couple of months but with the new design and layout, any of the app's components can be promoted and shown off at the drop of a hat. In production, this design has been used for the calendar, student registration, a tech conference, and now dining. This design is responsive and will soon be used on other non-mobile platforms as well.",
    tools: [tools.HTML5, tools.Bootstrap3, tools.CSS3],
    images: [
      {
        thumbnailPath: "/static/screenshots/FeatureSpotlight/Athletics_300x300.png",
        largePath: "/static/screenshots/FeatureSpotlight/Athletics_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/FeatureSpotlight/Banner_300x300.png",
        largePath: "/static/screenshots/FeatureSpotlight/Banner_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/FeatureSpotlight/Calendar_300x300.png",
        largePath: "/static/screenshots/FeatureSpotlight/Calendar_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/FeatureSpotlight/Dashboard_300x300.png",
        largePath: "/static/screenshots/FeatureSpotlight/Dashboard_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/FeatureSpotlight/Dining_300x300.png",
        largePath: "/static/screenshots/FeatureSpotlight/Dining_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/FeatureSpotlight/Educuase_300x300.png",
        largePath: "/static/screenshots/FeatureSpotlight/Educuase_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/FeatureSpotlight/Harvey_300x300.png",
        largePath: "/static/screenshots/FeatureSpotlight/Harvey_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/FeatureSpotlight/MyCourses_300x300.png",
        largePath: "/static/screenshots/FeatureSpotlight/MyCourses_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/FeatureSpotlight/MyHolds_300x300.png",
        largePath: "/static/screenshots/FeatureSpotlight/MyHolds_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/FeatureSpotlight/Orientation_300x300.png",
        largePath: "/static/screenshots/FeatureSpotlight/Orientation_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/FeatureSpotlight/Registration_300x300.png",
        largePath: "/static/screenshots/FeatureSpotlight/Registration_512x512.png"
      }
    ],
    external: {
      isActive: false,
      link: "https://crane.it.utsa.edu:8443/resources/appSpotlight/dining/index.html",
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
    tools: [tools.Linux, tools.Nginx, tools.NodeJS, tools.ExpressJS, tools.React, tools.HTML5, tools.Sass],
    images: [
      {
        thumbnailPath: "/static/screenshots/KyleBonarReactWebsite-SS-min.png",
        largePath: "/static/screenshots/KyleBonarReactWebsite-SS-min.png"
      }
    ],
    external: {
      isActive: false,
      link: "https://kyledavisdev.com",
      name: "Kyle Davis ReactJS Portfolio"
    },
    isActive: false
  },
  {
    url: "tamu_physics",
    pubYear: "2016",
    documentTitleName: "TAMU Physics",
    name: "Texas A&M Physics",
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
    images: [
      {
        thumbnailPath: "/static/screenshots/Physics/Home_300x300.png",
        largePath: "/static/screenshots/Physics/Home_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/Physics/ProspectiveStudents_300x300.jpg",
        largePath: "/static/screenshots/Physics/ProspectiveStudents_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/Physics/ProspectiveStudents2_300x300.jpg",
        largePath: "/static/screenshots/Physics/ProspectiveStudents2_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/Physics/Calendar_300x300.png",
        largePath: "/static/screenshots/Physics/Calendar_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/Physics/Calendar2_300x300.png",
        largePath: "/static/screenshots/Physics/Calendar2_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/Physics/Directory_300x300.png",
        largePath: "/static/screenshots/Physics/Directory_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/Physics/Outreach_300x300.jpg",
        largePath: "/static/screenshots/Physics/Outreach_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/Physics/Research_300x300.png",
        largePath: "/static/screenshots/Physics/Research_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/Physics/Research2_300x300.jpg",
        largePath: "/static/screenshots/Physics/Research2_512x512.png"
      }
    ],
    external: {
      isActive: true,
      link: "https://physics.tamu.edu",
      name: "TAMU Physics"
    },
    isActive: true
  },
  {
    url: "tamu_mitchell",
    pubYear: "2015-2016",
    documentTitleName: "TAMU Astronomy",
    name: "Texas A&M Astronomy",
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
    images: [
      {
        thumbnailPath: "/static/screenshots/Astronomy/Main_300x300.jpg",
        largePath: "/static/screenshots/Astronomy/Main_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/Astronomy/Courses_300x300.jpg",
        largePath: "/static/screenshots/Astronomy/Courses_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/Astronomy/Faculty_300x300.jpg",
        largePath: "/static/screenshots/Astronomy/Faculty_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/Astronomy/Person_300x300.png",
        largePath: "/static/screenshots/Astronomy/Person_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/Astronomy/Publications_300x300.png",
        largePath: "/static/screenshots/Astronomy/Publications_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/Astronomy/Research_300x300.jpg",
        largePath: "/static/screenshots/Astronomy/Research_512x512.png"
      }
    ],
    external: {
      isActive: true,
      link: "https://mitchell.physics.tamu.edu",
      name: "TAMU Astronomy"
    },
    isActive: true
  },
  {
    url: "kyle_davis_original",
    pubYear: "2015",
    documentTitleName: "Original Portfolio",
    name: "Kyle Davis First Portfolio",
    description:
      "When I started this project, I simply wanted to show off some projects that I had built, I had no idea the steps involved to put a website out on the internet. Starting from scratch, I had to configure a fresh server, install all of the proper tools, register and connect to the proper domain name, and implement security protocols. Luckily, with enough documentation and triple-checking each and every step, I was able to create this all my own. The webpage may not be the most visually appealing thing but I am incredibly proud of myself for sticking it out, and not getting overwhelmed by the immense challenge. Lastly, this project was built on the LEMP stack although, as it stands, is mostly just a static webpage.",
    tools: [tools.Linux, tools.Nginx, tools.PHP5, tools.JavaScript, tools.HTML5, tools.CSS3],
    images: [
      {
        thumbnailPath: "/static/screenshots/KyleDavisOriginal/Main_300x300.jpg",
        largePath: "/static/screenshots/KyleDavisOriginal/Main_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/KyleDavisOriginal/Projects_300x300.png",
        largePath: "/static/screenshots/KyleDavisOriginal/Projects_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/KyleDavisOriginal/Email_300x300.jpg",
        largePath: "/static/screenshots/KyleDavisOriginal/Email_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/KyleDavisOriginal/Resume_300x300.jpg",
        largePath: "/static/screenshots/KyleDavisOriginal/Resume_512x512.png"
      }
    ],
    external: {
      isActive: false,
      link: "/KyleBonar_2015",
      name: "Original Kyle Davis Portfolio"
    },
    isActive: true
  },
  {
    url: "illustrator_web_icons",
    documentTitleName: "Adobe Illustrator Web Icons",
    name: "Adobe Illustrator Web Icons",
    description:
      "As a UI/UX Developer for The University of Texas at San Antonio, I have spent a fair amount of time inside of the Adobe Suite. In doing so, I have created many icons, logos, and document designs which are currently being used across UTSA including UTSA Mobile App itself. I have also grown more comfortable in optimizing high-resolution images into a more web appropriate form to increase page load times and to decrease page load sizes.",
    tools: [tools.AdobeIllustrator],
    images: [
      {
        thumbnailPath: "/static/screenshots/Custom-Icons-SS-min.png",
        largePath: "/static/screenshots/Custom-Icons-SS-min.png"
      }
    ],
    external: {
      isActive: false,
      link: "https://github.com/KyleDavisDev/utsa-icons",
      name: "GitHub of Web Icons"
    },
    isActive: false
  },
  {
    url: "JSGames",
    pubYear: "2015",
    documentTitleName: "Games with JavaScript",
    name: "JavaScript Games",
    description:
      "<b>Phyllotaxis:</b> To create nice <a href='https://www.google.com/search?q=phyllotaxis' target='_blank' rel='nofollow noopener'>phyllotaxis</a> images using only client-side rendering. Users can click anywhere within the canvas to create unique patterns and hopefully learn a bit too! The most common of phyllotaxis plants is the Aloe Polyphylla. This code can be found in my gitHub." +
      "<br /><br /> " +
      "<b>Fractal trees:</b> To create a nice application which captures the ideas of fractal design. Users can click the canvas and cause a single branch to split into two. When the user clicks again, the branches will split again, so forth and so on. At any time, the tree can reset while sliders allow for customization and design a unique tree. This code can be found on my gitHub." +
      "<br /><br /> " +
      "<b>Word Counting:</b> Fun application that counts the number of times each unique word appears within a text area and creates a \"bubble\" with a respective area. Becoming more comfortable with JavaScript's Object-Oriented Programming and using JavaScript's canvas method to have a little fun were the main goals of this project. Even with a block of text 32,000 lines long and over 8,000 unique words, the application works like a charm. This code can be found in my gitHub." +
      "<br /><br /> " +
      "<b>Double Pendulum:</b> Inspired by my research as an undergraduate for my computational physics course, the double pendulum is an excellent example of chaos theory. The simplified idea is that even the slightest change in the initial conditions can lead to a drastic change in the overall outcome of a system is incredibly interesting. This application relies entirely on the browser to run the model and the user can modify the double pendulum by using sliders. This code can be found on my gitHub." +
      "<br /><br /> " +
      "<b>Ping Pong:</b> A classic arcade game brought to you in a browser! This was my first time messing around with HTML5's canvas as well as creating a very simple A.I.. Users simply need to click on the canvas to start the game, and use the arrow up and down arrow keys to move their paddle. The ball speeds up over time so be careful! This code can be found in my GitHub.",
    tools: [tools.JavaScript, tools.HTML5, tools.CSS3],
    images: [
      {
        thumbnailPath: "/static/screenshots/JSGames/Phyllotaxis_300x300.jpg",
        largePath: "/static/screenshots/JSGames/Phyllotaxis_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/JSGames/Phyllotaxis2_300x300.png",
        largePath: "/static/screenshots/JSGames/Phyllotaxis2_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/JSGames/Phyllotaxis3_300x300.jpg",
        largePath: "/static/screenshots/JSGames/Phyllotaxis3_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/JSGames/FractalTree_300x300.png",
        largePath: "/static/screenshots/JSGames/FractalTree_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/JSGames/FractalTree2_300x300.png",
        largePath: "/static/screenshots/JSGames/FractalTree2_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/JSGames/FractalTree3_300x300.png",
        largePath: "/static/screenshots/JSGames/FractalTree3_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/JSGames/WordCounter-SS-min_300x300.png",
        largePath: "/static/screenshots/JSGames/WordCounter-SS-min_300x300.png"
      },
      {
        thumbnailPath: "/static/screenshots/JSGames/DoublePendulum-SS-min_300x300.png",
        largePath: "/static/screenshots/JSGames/DoublePendulum-SS_512x512.png"
      },
      {
        thumbnailPath: "/static/screenshots/JSGames/PingPong-SS-min_300x300.png",
        largePath: "/static/screenshots/JSGames/PingPong-SS_512x512.png"
      }
    ],
    external: {
      isActive: false,
      link: "",
      name: "JavaScript Games"
    },
    isActive: true
  },
  {
    url: "Word_Counting_App",
    documentTitleName: "Word Counter",
    name: "Word Counting App",
    description:
      "Fun application that counts the number of times each unique word appears within a text area and creates a \"bubble\" with a respective area. Becoming more comfortable with JavaScript's Object Oriented Programming and using JavaScript's canvas method to have a little fun were the main goals of this project. Even with a block of text 32,000 lines long and over 8,000 unique words, the application works like a charm. This code can be found in my gitHub.",
    tools: [tools.JavaScript, tools.HTML5, tools.CSS3],
    images: [
      {
        thumbnailPath: "/static/screenshots/JSGames/WordCounter-SS-min.png",
        largePath: "/static/screenshots/JSGames/WordCounter-SS-min.png"
      }
    ],
    external: {
      isActive: false,
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
    images: [
      {
        thumbnailPath: "/static/screenshots/JSGames/Phyllotaxis-SS-min.png",
        largePath: "/static/screenshots/JSGames/Phyllotaxis-SS-min.png"
      }
    ],
    external: {
      isActive: false,
      link: "/JSGames/phyllotaxis",
      name: "Phyllotaxis Art"
    },
    isActive: false
  },
  {
    url: "Fractal_Trees_App",
    documentTitleName: "Fractal Trees",
    name: "Fractal Trees App",
    description:
      "To create a nice application which captures the ideas of fractal design. Users can click the canvas and cause a single branch to split into two. When the user clicks again, the branches will split again, so forth and so on. At any time, the tree can reset while sliders allow for customization and design a unique tree. This code can be found on my gitHub.",
    tools: [tools.JavaScript, tools.HTML5, tools.CSS3],
    images: [
      {
        thumbnailPath: "/static/screenshots/JSGames/FractalTrees-SS-min.png",
        largePath: "/static/screenshots/JSGames/FractalTrees-SS-min.png"
      }
    ],
    external: {
      isActive: false,
      link: "/JSGames/fractalTrees",
      name: "Fractal Tree Application"
    },
    isActive: false
  },
  {
    url: "Double_Pendulum_Vis",
    documentTitleName: "Double Pendulum",
    name: "Double Pendulum Visualization",
    description:
      "Inspired by my research as a senior in computational physics, the double pendulum is an excellent example of chaos theory. The simplified idea is that even the slightest change in the initial conditions can lead to a drastic change in the overall outcome of a system is incredibly interesting. This application relies entirely on the browser to run the model and the user can modify the double pendulum by using sliders. This code can be found on my gitHub.",
    tools: [tools.JavaScript, tools.HTML5, tools.CSS3],
    images: [
      {
        thumbnailPath: "/static/screenshots/JSGames/DoublePendulum-SS-min.png",
        largePath: "/static/screenshots/JSGames/DoublePendulum-SS-min.png"
      }
    ],
    external: {
      isActive: false,
      link: "/JSGames/doublePend",
      name: "Double Pendulum Visualization"
    },
    isActive: false
  },
  {
    url: "Classic_Ping_Pong",
    documentTitleName: "Ping Pong",
    name: "Classic Ping Pong Application",
    description:
      "A classic arcade game brought to you in a browser! This was my first time messing around with HTML5's canvas as well as creating a very simple A.I.. Users simply need to click on the canvas to start the game, and use the arrow up and down arrow keys to move their paddle. The ball speeds up over time so be careful! This code can be found in my GitHub.",
    tools: [tools.JavaScript, tools.HTML5, tools.CSS3],
    images: [
      {
        thumbnailPath: "/static/screenshots/JSGames/PingPong-SS-min.png",
        largePath: "/static/screenshots/JSGames/PingPong-SS-min.png"
      }
    ],
    external: {
      isActive: false,
      link: "/JSGames/pong",
      name: "Simple Pong Game"
    },
    isActive: false
  }
];

export default ProjectList;
