import { CircleHelp } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { brain, BuildingOffice, Graduation, send } from "./assets/icons/icon";
import {
  DepartmentDirector,
  DepartmentImage,
  LeadershipBanner,
  newsImage,
  ProjectBanner,
  ProjectImage as AlKhorezmiyImage,
  ItTalentsProjectImage,
} from "./assets";

export const Menus = [
  {
    name: "menu.center", // Translation key
    subMenu: [
      { name: "menu.aboutUs", icon: CircleHelp, link: "/about" },
      {
        name: "menu.openData",
        icon: CircleHelp,
        link: "/open-informations",
      },
      { name: "menu.leadership", icon: CircleHelp, link: "/leadership" },
      { name: "menu.structure", icon: CircleHelp, link: "/structure" },
      {
        name: "menu.departments",
        icon: CircleHelp,
        link: "/departments",
      },
      {
        name: "menu.antiCorruption",
        icon: CircleHelp,
        link: "/anti-corruption",
      },
      {
        name: "menu.higherOrganization",
        icon: CircleHelp,
        link: "/higher-standing-organization",
      },
    ],
    gridCols: 1,
  },
  {
    name: "menu.projects",
    link: "/projects",
    // subMenu: [
    //   {
    //     name: "Al Xorazmiy Vorislari",
    //     icon: PanelsTopLeft,
    //     link: "/projects/al-xorazmiy-vorislari",
    //   },
    //   {
    //     name: "IT Talents dasturi",
    //     icon: PanelsTopLeft,
    //     link: "/projects/it-talents-dasturi",
    //   },
    // ],
    gridCols: 1,
  },
  { name: "menu.studyCenters", link: "study-centers" },
  { name: "menu.itUniversities", link: "/universities" },
  { name: "menu.news", link: "/news" },
  { name: "menu.itTips", link: "/tips" },
  { name: "menu.contact", link: "/contact" },
];

export const aboutFilters = [
  { title: "menu.aboutUs", link: "/about" },
  {
    title: "menu.openData",
    link: "/open-informations",
  },
  { title: "menu.leadership", link: "/leadership" },
  { title: "menu.structure", link: "/structure" },
  {
    title: "menu.departments",
    link: "/departments",
  },
  {
    title: "menu.antiCorruption",
    link: "/anti-corruption",
  },
  {
    title: "menu.higherOrganization",
    link: "/higher-standing-organization",
  },
];

export const aboutCounts = [
  {
    value: "1,000",
    title: "IT ta’lim markazlari soni",
  },
  {
    value: "108,000",
    title: "IT ta’lim markazlaridagi \no'quvchilar soni",
  },
  {
    value: "300,000",
    title: "Nafar yoshlarni IT da \nband qilish ",
  },
  {
    value: "5 milliard",
    title: "IT mahsulotlar eksporti \nhajmini 5 milliard dollar qilish",
  },
];

export const projectCounts = [
  {
    icon: send,
    value: 13,
    desc: "Singular",
  },
  {
    icon: Graduation,
    value: "4,200",
    desc: "nafar o’quvchi",
  },
  {
    icon: brain,
    value: 59,
    desc: "nafar mentor",
  },
  {
    icon: BuildingOffice,
    value: 42,
    desc: "ta bino",
  },
];

export const openInformations = [
  {
    index: 1,
    desc: "Davlat organlari va tashkilotlarining o‘z faoliyatiga oid hisoboti (davlat sirlari va xizmatda foydalanish uchun mo‘ljallangan ma’lumotlar bundan mustasno).",
    id: 1,
  },
  {
    index: 2,
    desc: "Davlat organlari va tashkilotlarining o‘z faoliyatiga oid hisoboti (davlat sirlari va xizmatda foydalanish uchun mo‘ljallangan ma’lumotlar bundan mustasno).",
    id: 2,
  },
  {
    index: 3,
    desc: "Davlat organlari va tashkilotlarining o‘z faoliyatiga oid hisoboti (davlat sirlari va xizmatda foydalanish uchun mo‘ljallangan ma’lumotlar bundan mustasno).",
    id: 3,
  },
  {
    index: 4,
    desc: "Davlat organlari va tashkilotlarining o‘z faoliyatiga oid hisoboti (davlat sirlari va xizmatda foydalanish uchun mo‘ljallangan ma’lumotlar bundan mustasno).",
    id: 4,
  },
  {
    index: 5,
    desc: "Davlat organlari va tashkilotlarining o‘z faoliyatiga oid hisoboti (davlat sirlari va xizmatda foydalanish uchun mo‘ljallangan ma’lumotlar bundan mustasno).",
    id: 5,
  },
  {
    index: 6,
    desc: "Davlat organlari va tashkilotlarining o‘z faoliyatiga oid hisoboti (davlat sirlari va xizmatda foydalanish uchun mo‘ljallangan ma’lumotlar bundan mustasno).",
    id: 6,
  },
  {
    index: 7,
    desc: "Davlat organlari va tashkilotlarining o‘z faoliyatiga oid hisoboti (davlat sirlari va xizmatda foydalanish uchun mo‘ljallangan ma’lumotlar bundan mustasno).",
    id: 7,
  },
  {
    index: 8,
    desc: "Davlat organlari va tashkilotlarining o‘z faoliyatiga oid hisoboti (davlat sirlari va xizmatda foydalanish uchun mo‘ljallangan ma’lumotlar bundan mustasno).",
    id: 8,
  },
  {
    index: 9,
    desc: "Davlat organlari va tashkilotlarining o‘z faoliyatiga oid hisoboti (davlat sirlari va xizmatda foydalanish uchun mo‘ljallangan ma’lumotlar bundan mustasno).",
    id: 9,
  },
  {
    index: 10,
    desc: "Davlat organlari va tashkilotlarining o‘z faoliyatiga oid hisoboti (davlat sirlari va xizmatda foydalanish uchun mo‘ljallangan ma’lumotlar bundan mustasno).",
    id: 10,
  },
];

export const leadershipInformations = [
  {
    image: LeadershipBanner,
    fullname: "Shermatov Sherzod Xotamovich",
    desc: "O‘zbekiston Respublikasi raqamli texnologiyalar vaziri - Bosh Axborot Direktori (CIO)",
    email: "info@digital.uz",
    number: "+99871 238-41-07",
    time: "5/2, 9:00 - 18:00",
    id: 1,
  },
  {
    image: LeadershipBanner,
    fullname: "Shermatov Sherzod Xotamovich",
    desc: "O‘zbekiston Respublikasi raqamli texnologiyalar vaziri - Bosh Axborot Direktori (CIO)",
    email: "info@digital.uz",
    number: "+99871 238-41-07",
    time: "5/2, 9:00 - 18:00",
    id: 2,
  },
  {
    image: LeadershipBanner,
    fullname: "Shermatov Sherzod Xotamovich",
    desc: "O‘zbekiston Respublikasi raqamli texnologiyalar vaziri - Bosh Axborot Direktori (CIO)",
    email: "info@digital.uz",
    number: "+99871 238-41-07",
    time: "5/2, 9:00 - 18:00",
    id: 3,
  },
  {
    image: LeadershipBanner,
    fullname: "Shermatov Sherzod Xotamovich",
    desc: "O‘zbekiston Respublikasi raqamli texnologiyalar vaziri - Bosh Axborot Direktori (CIO)",
    email: "info@digital.uz",
    number: "+99871 238-41-07",
    time: "5/2, 9:00 - 18:00",
    id: 4,
  },
  {
    image: LeadershipBanner,
    fullname: "Shermatov Sherzod Xotamovich",
    desc: "O‘zbekiston Respublikasi raqamli texnologiyalar vaziri - Bosh Axborot Direktori (CIO)",
    email: "info@digital.uz",
    number: "+99871 238-41-07",
    time: "5/2, 9:00 - 18:00",
    id: 5,
  },
  {
    image: LeadershipBanner,
    fullname: "Shermatov Sherzod Xotamovich",
    desc: "O‘zbekiston Respublikasi raqamli texnologiyalar vaziri - Bosh Axborot Direktori (CIO)",
    email: "info@digital.uz",
    number: "+99871 238-41-07",
    time: "5/2, 9:00 - 18:00",
    id: 6,
  },
];

export const departmentsInformations = [
  {
    image: DepartmentImage,
    fullname: "Saidmurod Abdujabborov",
    position:
      '"Muhammad al-Xorazmiy vorislari" tizimini joriy etishni muvofiqlashtirish bo‘limi boshlig‘i',
    email: "education@digital.uz",
    number: "+998 71 203 03 43 (109)",
  },
  {
    image: DepartmentImage,
    fullname: "Saidmurod Abdujabborov",
    position:
      '"Muhammad al-Xorazmiy vorislari" tizimini joriy etishni muvofiqlashtirish bo‘limi boshlig‘i',
    email: "education@digital.uz",
    number: "+998 71 203 03 43 (109)",
  },
  {
    image: DepartmentImage,
    fullname: "Saidmurod Abdujabborov",
    position:
      '"Muhammad al-Xorazmiy vorislari" tizimini joriy etishni muvofiqlashtirish bo‘limi boshlig‘i',
    email: "education@digital.uz",
    number: "+998 71 203 03 43 (109)",
  },
  {
    image: DepartmentImage,
    fullname: "Saidmurod Abdujabborov",
    position:
      '"Muhammad al-Xorazmiy vorislari" tizimini joriy etishni muvofiqlashtirish bo‘limi boshlig‘i',
    email: "education@digital.uz",
    number: "+998 71 203 03 43 (109)",
  },
  {
    image: DepartmentImage,
    fullname: "Saidmurod Abdujabborov",
    position:
      '"Muhammad al-Xorazmiy vorislari" tizimini joriy etishni muvofiqlashtirish bo‘limi boshlig‘i',
    email: "education@digital.uz",
    number: "+998 71 203 03 43 (109)",
  },
  {
    image: DepartmentImage,
    fullname: "Saidmurod Abdujabborov",
    position:
      '"Muhammad al-Xorazmiy vorislari" tizimini joriy etishni muvofiqlashtirish bo‘limi boshlig‘i',
    email: "education@digital.uz",
    number: "+998 71 203 03 43 (109)",
  },
  {
    image: DepartmentImage,
    fullname: "Saidmurod Abdujabborov",
    position:
      '"Muhammad al-Xorazmiy vorislari" tizimini joriy etishni muvofiqlashtirish bo‘limi boshlig‘i',
    email: "education@digital.uz",
    number: "+998 71 203 03 43 (109)",
  },
  {
    image: DepartmentImage,
    fullname: "Saidmurod Abdujabborov",
    position:
      '"Muhammad al-Xorazmiy vorislari" tizimini joriy etishni muvofiqlashtirish bo‘limi boshlig‘i',
    email: "education@digital.uz",
    number: "+998 71 203 03 43 (109)",
  },
  {
    image: DepartmentImage,
    fullname: "Saidmurod Abdujabborov",
    position:
      '"Muhammad al-Xorazmiy vorislari" tizimini joriy etishni muvofiqlashtirish bo‘limi boshlig‘i',
    email: "education@digital.uz",
    number: "+998 71 203 03 43 (109)",
  },
];

export const studyCentersStandings = [
  {
    id: 1,
    name: "PDP Academy",
    type: "MCHJ",
    logo: "green",
    location: "Toshkent",
    col1: 76,
    col2: 32,
    col3: 50,
    score: "2526 Ball",
  },
  {
    id: 2,
    name: "AmoniLami EDU",
    type: "MCHJ",
    logo: "blue",
    location: "Samarqand",
    col1: 76,
    col2: 32,
    col3: 50,
    score: "91 Ball",
  },
  {
    id: 3,
    name: "AmoniLami EDU",
    type: "MCHJ",
    logo: "blue",
    location: "Samarqand",
    col1: 76,
    col2: 32,
    col3: 50,
    score: "91 Ball",
  },
  {
    id: 4,
    name: "AmoniLami EDU",
    type: "MCHJ",
    logo: "blue",
    location: "Samarqand",
    col1: 76,
    col2: 32,
    col3: 50,
    score: "91 Ball",
  },
  {
    id: 5,
    name: "AmoniLami EDU",
    type: "MCHJ",
    logo: "blue",
    location: "Samarqand",
    col1: 76,
    col2: 32,
    col3: 50,
    score: "91 Ball",
  },
  {
    id: 6,
    name: "AmoniLami EDU",
    type: "MCHJ",
    logo: "blue",
    location: "Samarqand",
    col1: 76,
    col2: 32,
    col3: 50,
    score: "91 Ball",
  },
  {
    id: 7,
    name: "AmoniLami EDU",
    type: "MCHJ",
    logo: "blue",
    location: "Samarqand",
    col1: 76,
    col2: 32,
    col3: 50,
    score: "91 Ball",
  },
  {
    id: 8,
    name: "AmoniLami EDU",
    type: "MCHJ",
    logo: "blue",
    location: "Samarqand",
    col1: 76,
    col2: 32,
    col3: 50,
    score: "91 Ball",
  },
  {
    id: 9,
    name: "AmoniLami EDU",
    type: "MCHJ",
    logo: "blue",
    location: "Samarqand",
    col1: 76,
    col2: 32,
    col3: 50,
    score: "91 Ball",
  },
  {
    id: 10,
    name: "AmoniLami EDU",
    type: "MCHJ",
    logo: "blue",
    location: "Samarqand",
    col1: 76,
    col2: 32,
    col3: 50,
    score: "91 Ball",
  },
  {
    id: 11,
    name: "AmoniLami EDU",
    type: "MCHJ",
    logo: "blue",
    location: "Samarqand",
    col1: 76,
    col2: 32,
    col3: 50,
    score: "91 Ball",
  },
  {
    id: 12,
    name: "AmoniLami EDU",
    type: "MCHJ",
    logo: "blue",
    location: "Samarqand",
    col1: 76,
    col2: 32,
    col3: 50,
    score: "91 Ball",
  },
];

export const news = [
  {
    id: 1,
    image: newsImage,
    date: "18-iyul, 2024",
    title: "O’zbekiston IT bozorida yangilik",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    tags: ["IT", "Shaharcha"],
  },
  {
    id: 2,
    image: newsImage,
    date: "18-iyul, 2024",
    title: "O’zbekiston IT bozorida yangilik",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    tags: ["IT", "Shaharcha"],
  },
  {
    id: 3,
    image: newsImage,
    date: "18-iyul, 2024",
    title: "O’zbekiston IT bozorida yangilik",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    tags: ["IT", "Shaharcha"],
  },
  {
    id: 4,
    image: newsImage,
    date: "18-iyul, 2024",
    title: "O’zbekiston IT bozorida yangilik",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    tags: ["IT", "Shaharcha"],
  },
  {
    id: 5,
    image: newsImage,
    date: "18-iyul, 2024",
    title: "O’zbekiston IT bozorida yangilik",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    tags: ["IT", "Shaharcha"],
  },
  {
    id: 6,
    image: newsImage,
    date: "18-iyul, 2024",
    title: "O’zbekiston IT bozorida yangilik",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    tags: ["IT", "Shaharcha"],
  },
  {
    id: 7,
    image: newsImage,
    date: "18-iyul, 2024",
    title: "O’zbekiston IT bozorida yangilik",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    tags: ["IT", "Shaharcha"],
  },
  {
    id: 8,
    image: newsImage,
    date: "18-iyul, 2024",
    title: "O’zbekiston IT bozorida yangilik",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    tags: ["IT", "Shaharcha"],
  },
];

export const newsBigCard = [
  {
    image: newsImage,
    title: "IT xizmatlarni online rasmiylashtirin",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    tags: ["IT", "Shaharcha"],
    date: "18-iyul, 2024",
  },
];

export const newsBigCardRight = [
  {
    id: 1,
    image: newsImage,
    date: "18-iyul, 2024",
    title: "O’zbekiston IT bozorida yangilik",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    tags: ["IT", "Shaharcha"],
  },
  {
    id: 2,
    image: newsImage,
    date: "18-iyul, 2024",
    title: "O’zbekiston IT bozorida yangilik",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
    tags: ["IT", "Shaharcha"],
  },
];

export const projectsOverview = [
  {
    id: 1,
    title: "Muhammad Al-Xorazmiy vorislari",
    image: AlKhorezmiyImage,
    link: "muhammad-al-xorazmiy-vorislari",
  },
  {
    id: 2,
    title: "Muhammad Al-Xorazmiy vorislari",
    image: ItTalentsProjectImage,
    link: "it-talents-dasturi",
  },
  {
    id: 3,
    title: "Muhammad Al-Xorazmiy vorislari",
    image: AlKhorezmiyImage,
    link: "muhammad-al-xorazmiy-vorislari",
  },
  {
    id: 4,
    title: "Muhammad Al-Xorazmiy vorislari",
    link: "it-talents-dasturi",
    image: ItTalentsProjectImage,
  },
  {
    id: 5,
    title: "Muhammad Al-Xorazmiy vorislari",
    image: AlKhorezmiyImage,
    link: "muhammad-al-xorazmiy-vorislari",
  },
  {
    id: 6,
    title: "Muhammad Al-Xorazmiy vorislari",
    link: "it-talents-dasturi",
    image: ItTalentsProjectImage,
  },
  {
    id: 7,
    title: "Muhammad Al-Xorazmiy vorislari",
    image: AlKhorezmiyImage,
    link: "muhammad-al-xorazmiy-vorislari",
  },
  {
    id: 8,
    link: "it-talents-dasturi",
    title: "Muhammad Al-Xorazmiy vorislari",
    image: ItTalentsProjectImage,
  },
  {
    id: 9,
    title: "Muhammad Al-Xorazmiy vorislari",
    image: AlKhorezmiyImage,
    link: "muhammad-al-xorazmiy-vorislari",
  },
];
