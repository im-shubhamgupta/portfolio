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

//  "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
const greeting = {
  username: "Shubham Gupta",
  title: "Hi, I am Shubham Gupta",
  subTitle: emoji(
    "A passionate Backend Developer 🚀 specializing in Laravel, MySQL, DynamoDB, and Node.js, helping businesses achieve growth through secure and scalable web solutions."
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
      logo: require("./assets/images/logo/nielit-logo.webp"),
      subHeader: "O Level Foundation Course in Information Technology",
      duration: "2021 - 2022",
      desc: "Completed my O Level Foundation Course in Information Technology with 71% marks. I have done my O Level from Nielit University, Bokaro, Jharkhand.",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur ad  ipiscing elit"]
    },
    {
      schoolName: "Vinoba Bhave University",
      logo: require("./assets/images/logo/vbu-logo.png"),
      subHeader: "Bachelor's Degree",
      duration: "April 2014 - August 2017",
      desc: "Completed my Bachelor's Degree with 69% marks. I have done my Bachelors in Commerce from Vinoba Bhave University, Hazaribagh, Jharkhand.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Higher Secondry Education (12th)",
      logo: require("./assets/images/logo/jac-logo.webp"),
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
      logo: require("./assets/images/logo/jac-logo.webp"),
      subHeader: "Jharkhand Academic Council",
      duration: "April 2012",
      desc: "Complete my Secondary Education with 62.6% marks.",
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
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    // {
    //   Stack: "Frontend/Design", //Insert stack or technology you have experience in
    //   progressPercentage: "90%" //Insert relative proficiency in percentage
    // },
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
      href: "https://talentrack.in",
      date: "Febraury 2025 - Present",
      desc: "Talentrack.in is India's leading online platform and content marketplace for the Media, Entertainment, and Creative (MECA) industries. It connects businesses with a wide range of creative professionals, including agencies, freelancers, and influencers, to help them create high-quality content for their brands.",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Software Developer",
      company: "Rjs Tech Solutions",
      href: "https://rjs.in/",
      companylogo: require("./assets/images/logo/rjs-logo3.jpg"),
      date: "July 2023 - January 2025",
      desc: "RJS is a leading game and app development company based out of Kolkata, India. Our products are available across all major mobile and web platforms.",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Software Developer",
      company: "iSoftcare Technology",
      href: "https://isoftcare.com/",
      companylogo: require("./assets/images/logo/isoft-logo.png"),
      date: "August 2022 - June 2023",
      desc: "iSoftcare Technology is a Servie based Company. it provide the solution IT Solutions for Web and Mobile. Company based on Delhi."
    },
    {
      role: "Php Developer (Intern)",
      company: "Jharkhand It Solutions",
      href: "https://www.jharkhanditsolutions.com/",
      companylogo: require("./assets/images/logo/jis-web-logo.png"),
      date: "May 2022 - July 2022",
      desc: "Jharkhand It Solutions is web & App development Company. which is on Ranchi"
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
  subtitle: "Projects Where I Contributed to Achieving Business Success",//SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
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
      image: require("./assets/images/logo/bazaloni.png"),
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
      image: require("./assets/images/logo/abhigya-logo.png"),
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
      projectDesc: " Phindbook is an online book retailer and physical store based in Dubai, UAE, specializing in a wide range of books, including children's books, self-help, business, young adult, manga, and academic (CBSE and UK school) books. ",
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
      image: require("./assets/images/logo/hotel-managment-system.png"),
      projectName: "Hotel Management System",
      projectDesc: "Hotel Management System built to automate reservations, check-in/out, and billing. It features a user-friendly interface for staff to manage room availability, guest information.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://isoftcare.in/demo/hotel/index.php"
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
      title: "C++ Programming",//"First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      subtitle:"Certified in C++ programming with strong knowledge of object-oriented concepts, data structures, and algorithmic problem solving.",
      image: require("./assets/images/logo/cpp-logo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1PnA_4ygfnKEwjXEdWLBGvydi3okt6SIG/view"
        },
        //   I have Complete my C++ Programmin Languge with a best Institute with efforts and learned great things and certified from West Bengal Government",
        /*{
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }*/
      ]
    },
    {
      title: "Computing and Peripherals",
      subtitle: "Field Technician (NSQF4): hardware, OS setup, troubleshoot—boosts backend deployment, infra stability",
        // "Certified in Field Technician - Computing and Peripherals (NSQF Level-4), providing strong fundamentals in computer hardware, OS setup, and troubleshooting, which enhance my backend development and deployment skills",
      image: require("./assets/images/logo/NSDC-logo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1mKaie8wMDTnlrcgh_-jZaf7KFBWD0ZNu/view"
        }
      ]
    },

    {
      title: "Tally Accounting",
      subtitle: "Certified in Tally Accounting with strong understanding of bookkeeping, GST, payroll, and financial reporting.",
      image: require("./assets/images/logo/tally.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false
};

// Resume Section
const resumeSection = {
//   title: "Resume",
//   subtitle: "Feel free to download my resume",

//   // Please Provide with Your Podcast embeded Link
//   display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  href: "https://api.whatsapp.com/send?phone=7004083341&amp;text=Hi%20Shubham",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7004083341",
  email_address: "shubhamkumargupta8@gmail.com"
};//

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
