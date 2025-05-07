// "use server"

import {
  asn,
  bbo,
  betteru_app,
  betteru_landing,
  birrul,
  dinacom,
  fundex,
  kostku,
  nuri,
  ppdb,
  ruscare,
  ruscareMentor,
  smartchoice,
  snbp,
  techcom,
  tedikap,
} from "@/lib/utils/image";
import { BiLogoGoLang } from "react-icons/bi";
import {
  RiFlutterFill,
  RiMetaFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiAmazon,
  SiDart,
  SiFlutter,
  SiJavascript,
  SiLaravel,
  SiMeta,
  SiMetabase,
  SiMysql,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { FiFigma } from "react-icons/fi";

const projects = [
  {
    title: "CultureKu Website",
    type: "Website Development",
    desc: `This project was developed by our team as part of Techomfest 2024, where I served as the Lead and Frontend Developer. The project aims to commemorate and document the richness of Indonesian culture through a digital historiography approach. Through this platform, users can explore various information about Indonesia's history and culture, including articles, visuals, and other resources presented in an interactive and structured way. By utilizing modern web technologies, our goal is to increase awareness and appreciation of Indonesian cultural heritage among the younger generation and the general public. <strong>Our team's efforts were recognized with the "Best Spirit" award at Techomfest 2024.</strong>`,
    link: "https://github.com/YasaKafi/Techomfest-CultureKu",
    programs: [
      { logo: RiReactjsFill, color: "#61DBFB", prev: "reactjs" },
      { logo: SiJavascript, color: "#F7DF1E", prev: "javascript" },
      { logo: RiTailwindCssFill, color: "#06B6D4", prev: "tailwindcss" },
      { logo: SiLaravel, color: "#f55247 ", prev: "laravel" },
      { logo: SiMysql, color: "#00758F", prev: "mysql" },
    ],

    image: techcom,
  },
  {
    title: "BetterU App",
    type: "Mobile Development",
    desc: `This project was developed by our team as part of the Dinacom 2025 competition, where I served as the Mobile Developer. The application was created to help users maintain a healthier lifestyle by analyzing their personal nutrition needs and tracking the nutritional content of foods they consume. The app leverages AI technology for food and activity analysis, allowing users to scan food items, track daily calories, monitor water intake, and receive personalized nutritional insights. It also includes a smart assistant feature powered by BetterAI chatbot to enhance user experience and accessibility. <strong>Our team's effort and innovation were recognized by winning 3rd Place in the Dinacom 2025 competition.</strong>`,
    link: "https://github.com/YasaKafi/BetterU",
    programs: [
      { logo: RiFlutterFill, color: "#61DBFB", prev: "reactjs" },
      { logo: SiDart, color: "#40c4ff", prev: "javascript" },
      { logo: RiMetaFill, color: "#06B6D4", prev: "Llama" },
      { logo: SiPython, color: "#4584b6", prev: "python" },
      { logo: SiMysql, color: "#00758F", prev: "mysql" },
    ],

    image: betteru_app,
  },
  {
    title: "Tedikap App",
    type: "Mobile Development",
    desc: `This application was developed as part of my final assignment project. It is designed to make it easier for customers, particularly students, to place orders online and pick them up once they're ready. The app was created in collaboration with local small businesses (UMKM) around the school, aiming to support the local economy while providing a convenient service for students at Raden Umar Said Vocational School.`,
    link: "https://github.com/YasaKafi/tedikap-user-bloc",
    programs: [
      { logo: SiLaravel, color: "#FF2D20", prev: "laravel" },
      { logo: RiFlutterFill, color: "#61DBFB", prev: "reactjs" },
      { logo: SiDart, color: "#40c4ff", prev: "javascript" },
      { logo: SiMysql, color: "#00758F", prev: "mysql" },
    ],

    image: tedikap,
  },
  {
    title: "Smartchoice Pemilu Website",
    type: "Website Development",
    desc: "This project was created to commemorate the PEMILU 2024 Indonesia, where we chose to create information about candidate pairs, starting from biodata, vision and mission, and videos during the presidential debate. Here there is also a real count to find out the votes of Indonesian citizens during the PEMILU 2024",
    link: "https://github.com/YasaKafi/smartchoice-nextjs",
    programs: [
      { logo: SiNextdotjs, color: "#00000", prev: "nextjs" },
      { logo: SiJavascript, color: "#F7DF1E", prev: "javascript" },
      { logo: RiTailwindCssFill, color: "#06B6D4", prev: "tailwindcss" },
      { logo: BiLogoGoLang, color: "#29beb0 ", prev: "golang" },
      { logo: SiMysql, color: "#00758F", prev: "mysql" },
    ],

    image: smartchoice,
  },
  {
    title: "SmartCarrier Website",
    type: "Website Development",
    desc: "This project was created for the Dinacom 2024 competition, with the theme From Smart Cities to Intelligent Governance. Where we create websites that can help the community, namely training and job search websites. After our research, it turned out that the main problem with the community was a lack of information regarding employment opportunities and a lack of adequate skills to get a job. Therefore, we created this SmartCarrier website.",
    link: "https://github.com/Fadzaa/nextjs-smartcarrier",
    programs: [
      { logo: SiNextdotjs, color: "#00000", prev: "nextjs" },
      { logo: SiJavascript, color: "#F7DF1E", prev: "javascript" },
      { logo: RiTailwindCssFill, color: "#06B6D4", prev: "tailwindcss" },
      { logo: SiLaravel, color: "#FF2D20", prev: "laravel" },
      { logo: SiMysql, color: "#00758F", prev: "mysql" },
    ],

    image: dinacom,
  },

  {
    title: "SD Birrul Walidain Profile",
    type: "Web Development",
    desc: "My team and I were trusted by one of the companies in our city to create a website profile for one of the schools in our city, where we made it according to what the client wanted.",
    link: "",
    programs: [
      { logo: SiNextdotjs, color: "#ffffff", prev: "nextjs" },
      { logo: RiTailwindCssFill, color: "#06B6D4", prev: "tailwindcss" },
      { logo: SiLaravel, color: "#FF2D20", prev: "laravel" },
      { logo: SiMysql, color: "#00758F", prev: "mysql" },
      { logo: SiTypescript, color: "#3178C6", prev: "typescript" },
    ],

    image: birrul,
  },
  {
    title: "PPDB SD Birrul Walidain ",
    type: "Web Development",
    desc: "My team and I were trusted by one of the companies in our city to create a website PPDB for one of the schools in our city, where we made it according to what the client wanted.",
    link: "",
    programs: [
      { logo: SiNextdotjs, color: "#ffffff", prev: "nextjs" },
      { logo: RiTailwindCssFill, color: "#06B6D4", prev: "tailwindcss" },
      { logo: SiLaravel, color: "#FF2D20", prev: "laravel" },
      { logo: SiMysql, color: "#00758F", prev: "mysql" },
      { logo: SiTypescript, color: "#3178C6", prev: "typescript" },
    ],

    image: ppdb,
  },
];

export default projects;
