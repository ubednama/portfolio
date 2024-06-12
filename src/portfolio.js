/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

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
  username: "Ubed Khan",
  title: "Hi all, I'm Ubed",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀  with passion for building Web applications using JavaScript, Reactjs, Nodejs and some other cool libraries and frameworks. I am also proficient in languages like C++ & Python."
  ),
  resumeLink: 
    "https://drive.google.com/file/d/1qFWL8OKoH27A3sYLaDKZY523cE-ICtBs/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ubednama",
  linkedin: "https://www.linkedin.com/in/ubed9/",
  gmail: "kubedrn@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/@",
  // stackoverflow: "https://stackoverflow.com/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end/User Interfaces for your web applications using technologies like React."
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as AWS"),
    emoji(
      "⚡ Craft dynamic and scalable web apps with JavaScript and Node.js, seamlessly merging frontend and backend for a unified user experience."
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
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
      skillName: "MongoDB & sql-databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Mumbai University",
      logo: require("./assets/images/mu.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "August 2019 - May 2023",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "Kothari Tech",
      companylogo: require("./assets/images/KTLogo.png"),
      date: "April 2024 – May 2024",
      desc: "",
      descBullets: [
        "Developed responsive and dynamic web applications at Kothari Tech using HTML, JavaScript React.js and Tailwind CSS, ensuring seamless user experiences for various devices and screen sizes.",
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "ADM Education Society",
      companylogo: require("./assets/images/ADMLogo.png"),
      date: "Oct 2023 – March 2024",
      desc: "",
      descBullets: [
        "Developed responsive websites using a combination of technologies including React.js & Tailwind CSS for various devices and screen sizes.",
        "Worked closely with design, backend, and QA teams to understand and fulfill customer requirements, ensuring high - quality deliverables",
      ]
    },
    {
      role: "Web developer Intern",
      company: "Jennifer Infocom",
      companylogo: null,
      date: "July 2021 – April 2022",
      desc: "",
      descBullets: [
        "Developed responsive websites using a combination of technologies including HTML, CSS, JavaScript and WordPress for various devices and screen sizes.",
        "ustomized WordPress themes and plugins to align with client branding and enhance website functionality",
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "Personal and College Projects",
  projects: [
    {
      image: require("./assets/images/ticTacToe.png"),
      projectName: "tic tac toe",
      projectDesc:
        "A simple web-based Tic Tac Toe game implemented using HTML, CSS, and JavaScript.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://65ae51a07077ff276e4d9826--deluxe-licorice-d069b8.netlify.app/"
        },
        {
          name: "Check code",
          url: "https://github.com/ubednama/tictactoe-js"
        }
      ]
    },
    {
      image: require("./assets/images/chatApp.png"),
      projectName: "Chat App",
      projectDesc: "MERN Stack project- Real time Chat App",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://chat-app-uwfk.onrender.com/"
        },
        {
          name: "Check code",
          url: "https://github.com/ubednama/chat-app"
        }
      ]
    },
    {
      image: require("./assets/images/Textutils.png"),
      projectName: "Text Utils",
      projectDesc: "React-based App that provides various text manipulation utilities.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ubednama.github.io/TextUtils/"
        },
        {
          name: "Check code",
          url: "https://github.com/ubednama/TextUtils"
        }
      ]
    },
    {
      image: require("./assets/images/NewsApp.png"),
      projectName: "YANewsApp",
      projectDesc: "Web application to read latest news, browse by category",
      footerLink: [
        {
          name: "Check code",
          url: "https://github.com/ubednama/YANewsApp"
        }
      ]
    },
    {
      image: require("./assets/images/CRUDApp.png"),
      projectName: "CRUD App",
      projectDesc:
        "CRUD Application with Server-side Pagination using Node.js, Express, EJS, and MySQL",
      footerLink: [
        {
          name: "Check Code",
          url: "https://github.com/ubednama/CRUD-App---ejs"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle: "Achievements and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Completed 100+ DSA Challenges",
      subtitle:
        "Successfully solved over 100 Data Structures and Algorithms (DSA) questions across various platforms such as LeetCode and CodingNinjas.",
      image: require("./assets/images/LeetCode.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Leetcode",
          url: "https://leetcode.com/ubednama/"
        },
        {
          name: "CodingNinjas",
          url: "https://www.codingninjas.com/studio/profile/ubednama"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description: ""
    }
  ],
  display: true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [
    //link
  ],
  display: false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8657567454",
  email_address: "kubedrn@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "__ubednama", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
