/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file


// https://github.com/30047shivam?tab=repositories

// https://portshivamfolio.vercel.app/#services

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shubham Gupta",
  title: "Hi, I am Shubham Gupta",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/im-shubhamgupta",
  linkedin: "https://www.linkedin.com/in/shubham-gupta-200761191",
  gmail: "shubhamkumargupta8@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com",
  // medium: "https://medium.com/",
  // stackoverflow: "https://stackoverflow.com/,
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Backend DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop a Robust and Scalable Web Applications with a Best User Experience"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Razorpay Payment Gateway"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Mysql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Nielit University",
      logo: require("./assets/images/logo/nielit-logo.avif"),
      subHeader: "O Level Foundation Course in Information Technology",
      duration: "2021 - 2022",
      desc: "Completed my O Level Foundation Course in Information Technology with 71% marks. I have done my O Level from Nielit University, Bokaro, Jharkhand.",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur ad  ipiscing elit"]
    },
    {
      schoolName: "Vinoba Bhave University",
      logo: require("./assets/images/logo/vbu-logo.avif"),
      subHeader: "Master of Science in Computer Science",
      duration: "April 2014 - August 2017",
      desc: "Completed my Bachelor's Degree in Commerce with 69% marks. I have done my Bachelors in Commerce from Vinoba Bhave University, Hazaribagh, Jharkhand.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Higher Secondry Education (12th)",
      logo: require("./assets/images/logo/jac-logo.avif"),
      subHeader: "Jharkhand Academic Council",
      duration: "April 2012 - April 2014",
      desc: "Complete my Higher Secondary Education with 58.4% marks.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Secondry Education (10th)",
      logo: require("./assets/images/logo/jac-logo.avif"),
      subHeader: "Jharkhand Academic Council",
      duration: "Complete my Secondary Education with 62.6% marks.",
      // desc: "Complete ",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    
  ]
};

// Your top 3 proficient stacks/tech experience
/*Proficiencies:
- Languages: PHP (Advanced), JavaScript (Proficient), Python (Intermediate)
- Frameworks: Laravel (Advanced), CodeIgniter (Proficient)
- Databases: MySQL (Advanced), DynamoDB (Intermediate)
- Tools: Git, Postman, Composer*/
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    /*{
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },*/
    {
      Stack: "Backend Developer",
      progressPercentage: "100%"
    },
    {
      Stack: "Laravel Framework",
      progressPercentage: "100%"
    },
    {
      Stack: "Node.js, Expess.js",
      progressPercentage: "80%"
    },
    // {
    //   Stack: "React.js",
    //   progressPercentage: "80%"
    // },
    {
      Stack: "HTML/CSS Javascript",
      progressPercentage: "100%"
    },
    {
      Stack: "MySQL, DynamoDB, MongoDB",
      progressPercentage: "80%"
    }

  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "PHP Developer",
      company: "Talentrack",
      companylogo: require("./assets/images/logo/talentrack-logo.avif"),
      date: "Febraury 2025 - Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Software Developer",
      company: "Rjs Tech Solutions",
      companylogo: require("./assets/images/logo/rjs-logo.avif"),
      date: "July 2023 - January 2025",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Software Developer",
      company: "iSoftcare Technology",
      companylogo: require("./assets/images/logo/isoftcare-logo.avif"),
      date: "August 2022 - June 2023",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Php Developer (Intern)",
      company: "Jharkhand It Solutions",
      companylogo: require("./assets/images/logo/jis-logo.avif"),
      date: "May 2022 - July 2022",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/logo/talentrack-logo.avif"),
      projectName: "Content Marketplace",
      projectDesc: "Find Agencies, Freelancers, and Influencers to create contents for your brand.",
      //      projectDesc: "This is a health and wellness platform that promotes a plant-based lifestyle.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://talentrack.in/"
        //  you can add extra buttons here.
        }
      ]
    },
    {
      image: require("./assets/images/logo/satvic-logo.avif"),
      projectName: "Satvic Movement",
      projectDesc: "Satvic Movement is India's largest community driven health revolution helping you reach the peak of your physical, mental, and spiritual well-being.",
      //      projectDesc: "This is a health and wellness platform that promotes a plant-based lifestyle.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://satvicmovement.org/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/logo/bazaloni-logo.png"),
      projectName: "Bazaloni",
      projectDesc: "Bazaloni is CRM Software for Maintaining selling and purchase with Auction Tea leafs in all over india",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://www.bazaloni.com/"
        }
      ]
    },
    {
      image: require("./assets/images/logo/abhigya-logo.avif"),
      projectName: "Institute Management Software",
      projectDesc: "Institute Management Software to streamline operations including admissions, student records, fee collection, timetable scheduling, attendance tracking, and communication modules; improved administrative efficiency by automating manual processes and enabling real-time access to academic and financial data.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://www.abhigya.in/"
        }
      ]
    },
    {
      image: require("./assets/images/logo/harrison-logo.png"),
      projectName: "Harrison",
      projectDesc: "Harrison is a CRM Software for Maintaining selling and purchase with of his own products in all over india",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ],
      footerLink: [
        {
          name: "Visit Website",
          url: "http://www.harrisonlocks.com/"
        }
      ]
    },
     {
      image: require("./assets/images/logo/phindbooks-logo.png"),
      projectName: "PhindBooks",
      projectDesc: "Harrison is a CRM Software for Maintaining selling and purchase with of his own products in all over india",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://phindbooks.ae/"
        }
      ]
    },
     {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Hotel Management System",
      projectDesc: "Harrison is a CRM Software for Maintaining selling and purchase with of his own products in all over india",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ],
      footerLink: [
        {
          name: "Visit Website",
          url: "http://www.harrisonlocks.com/"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications"),
  subtitle:
    "Certifications that I have done !",

  achievementsCards: [
    {
      title: "C++ Programming",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Computer Hardware",
      subtitle:
        "Complete Computer Hardware Course from Government NSDC, Bokaro",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Tally Accounting",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7004083341",
  email_address: "shubhamkumargupta8@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
