import { CircleHelp } from "lucide-react";
import { brain, BuildingOffice, Graduation, send } from "./assets/icons/icon";
import {
  LeadershipBanner,
  newsImage,
  ProjectImage as AlKhorezmiyImage,
  ItTalentsProjectImage,
  VacancyImage,
} from "./assets";
import {
  DeparmentImage10,
  DeparmentImage11,
  DeparmentImage12,
  DeparmentImage13,
  DeparmentImage14,
  DeparmentImage16,
  DeparmentImage7,
  DeparmentImage8,
} from "./assets/deparment";
import First from "./assets/1.jpg";
import Second from "./assets/2.jpg";
import Third from "./assets/3.jpg";
import Fourth from "./assets/4.jpg";
import Fifth from "./assets/5.jpg";
import Sixth from "./assets/6.jpg";
import Seventh from "./assets/7.jpg";

export const Menus = [
  {
    name: "menu.center",
    subMenu: [
      {
        name: "menu.aboutUs",
        // icon: CircleHelp,
        link: "/about",
      },
      {
        name: "menu.openData",
        // icon: CircleHelp,
        link: "/open-informations",
      },
      {
        name: "menu.leadership",
        // icon: CircleHelp,
        link: "/leadership",
      },
      {
        name: "menu.structure",
        // icon: CircleHelp,
        link: "/structure",
      },
      {
        name: "menu.departments",
        // icon: CircleHelp,
        link: "/departments",
      },
      {
        name: "menu.antiCorruption",
        // icon: CircleHelp,
        link: "/anti-corruption",
      },
      {
        name: "menu.higherOrganization",
        // icon: CircleHelp,
        link: "/higher-standing-organization",
      },
    ],
    gridCols: 1,
  },
  {
    name: "menu.projects",
    link: "/projects",
    gridCols: 1,
  },
  { name: "menu.studyCenters", link: "study-centers" },
  { name: "menu.itUniversities", link: "/universities" },
  { name: "menu.news", link: "/news" },
  { name: "menu.courses", link: "/courses" },
  // { name: "menu.itTips", link: "/tips" },
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
    image: DeparmentImage11,
    fullname: "Saidmurod Abdujabborov",
    position:
      '"Muhammad al-Xorazmiy vorislari" tizimini joriy etishni muvofiqlashtirish bo‘limi boshlig‘i',
    email: "s.abdujabborov@digital.uz",
    number: "+998 71 203 03 43 (109)",
  },
  {
    image: DeparmentImage12,
    fullname: "Alisher Rapiyev",
    email: "a.rapiyev@digital.uz",
    number: "+998 71 203 03 43 (104) ",
    position: "Ta'lim tashkilotlari bilan ishlash bo‘limi boshlig‘i",
  },
  {
    position: "Raqamli texnologiyalar bo‘limi boshlig‘i",
    image: DeparmentImage7,
    fullname: "Farrux Boltayev",
    email: "f.boltayev@digital.uz",
    number: "+998 71 203 03 43 (888)",
  },
  {
    image: DeparmentImage14,
    fullname: "Muhlisa Xudayberganova",
    email: "m.xudayberganova@digital.uz",
    number: "+998 71 203 03 43 (111)",
    position: "Iqtidorli yoshlarni IT sohasiga jalb qilish bo‘limi boshlig‘i",
  },
  {
    image: DeparmentImage10,
    fullname: "Mirabbos Anvarov",
    email: "m.anvarov@digital.uz",
    number: "+998 71 203 03 43 (112) ",
    position:
      "Xalqaro sertifikatlar va masofaviy ta'limni rivojlantirish bo‘limi boshlig‘i",
  },
  {
    image: DeparmentImage16,
    fullname: "Farrux Abduvohidov",
    position: "Investitsiya loyiha ofisi boshlig‘i",
    email: "invest@digital.uz",
    number: "+998 71 203 03 43 (117) ",
  },
  {
    image: DeparmentImage13,
    fullname: "Moxira Nurullayeva",
    position: "Marketing va PR bo‘limi boshlig‘i",
    email: "m.nurullayeva@digital.uz",
    number: "+998 71 203 03 43 (107)",
  },
  {
    image: VacancyImage,
    fullname: "Vakant",
    position: "Ma’lumot kutilmoqda..., card tashlab ketilsin",
    email: "",
    number: "",
  },
  {
    position: '"IT shaharcha"lar faoliyatini tashkil etish boshqarma boshlig‘i',
    image: DeparmentImage8,
    fullname: "Akbarxo‘ja Anvarxonov",
    email: "a.anvarxonov@digital.uz",
    number: "+998 71 203 03 43 (117) ",
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
    title: "It Talents dasturi",
    image: ItTalentsProjectImage,
    link: "it-talents-dasturi",
  },
  {
    id: 3,
    title: "Bir million dasturchi loyihasi (Coursera)",
    image: AlKhorezmiyImage,
    link: "bir-million-dasturchi-loyihasi",
  },
  {
    id: 4,
    title: "O'quv markazlar",
    link: "study-centers",
    image: ItTalentsProjectImage,
  },
  {
    id: 5,
    title: "Universitetlar",
    image: AlKhorezmiyImage,
    link: "universities",
  },
  // {
  //   id: 6,
  //   title: "Muhammad Al-Xorazmiy vorislari",
  //   link: "it-talents-dasturi",
  //   image: ItTalentsProjectImage,
  // },
  // {
  //   id: 7,
  //   title: "Muhammad Al-Xorazmiy vorislari",
  //   image: AlKhorezmiyImage,
  //   link: "muhammad-al-xorazmiy-vorislari",
  // },
  // {
  //   id: 8,
  //   link: "it-talents-dasturi",
  //   title: "Muhammad Al-Xorazmiy vorislari",
  //   image: ItTalentsProjectImage,
  // },
  // {
  //   id: 9,
  //   title: "Muhammad Al-Xorazmiy vorislari",
  //   image: AlKhorezmiyImage,
  //   link: "muhammad-al-xorazmiy-vorislari",
  // },
];

export const oneMillionUzbekCodersCards = [
  {
    img: First,
    text: "Bir milliondan oshiq yoshlar bepul oʻqitiladi",
    description:
      "Loyiha doirasida 5 ta bepul kursda yoshlarga bepul ta’lim olish imkoni yaratiladi. ",
  },
  {
    img: Second,
    text: "Yoshlar xalqaro it sertifikatlariga oʻqitiladi",
    description: ` “Bir Million o‘zbek dasturchilari” loyihasi doirasida yangi Imkoniyatlar! Raqamli Texnologiyalar Vazirligi tomonidan "Bir million o‘zbek dasturchilari" loyihasi doirasida 30 ming nafardan ziyod yoshlarni professional IT sertifikatlarga ega qilish tashabbusi boshlanganini e’lon qilamiz!
Nega bu imkoniyatdan foydalanish kerak? Bepul IT ta’lim: Coursera va boshqa xalqaro ta’lim platformalarida yo’lga qo’yilgan, shu bilan birgalikda it-istedod.uz platformasida nom va yo’nalishlari qayd etilgan zamonaviy IT yo‘nalishlarida ta’lim olish imkoniyati. Xalqaro darajadagi sertifikatlar: Dunyoda tan olingan sertifikatlar sizning malakangizni tasdiqlaydi va global IT bozorida ishga joylashishingizni osonlashtiradi. Keng imkoniyatlar: Ushbu loyiha nafaqat texnik ko‘nikmalaringizni, balki muloqot, loyihalarni boshqarish va kreativ fikrlash qobiliyatingizni ham rivojlantiradi.
Nimalarni o‘rganasiz? Dasturlash tillari (Python, Java, C++) Ma’lumotlar tahlili va sun’iy intellekt Veb va mobil ilovalar ishlab chiqish Kiberxavfsizlik va axborot texnologiyalari Loyihalarni boshqarish va IT startaplar yaratish va boshqalar. Batafsil ro’yxat: it-istedod.uz platformasida Kimlar ishtirok etishi mumkin? O’zbekiston Respublikasining 16-30 yosh oralig’ida bo’lgan va IT sohasi bo‘yicha ta’lim olishni xohlovchi barcha fuqarolar.
Qanday qatnashish mumkin? Ro‘yxatdan o‘ting: it-istedod.uz platformasidan o’zingiz mos kurs yo’nalishini tanlang va xalqaro onlayn platformalarda bu yo’nalishda sertifikatni qo’lga kiriting. Olgan sertifikat uchun xarajatlaringizni qoplash uchun ariza yuboring.
Kelajak imkoniyatlari IT sohasidagi yuqori daromadli ish joylariga ega bo‘lish. O‘z startapingizni yaratish yoki xalqaro kompaniyalarda faoliyat yuritish. Raqamli iqtisodiyotda yetakchi mutaxassis sifatida o‘z o‘rningizni topish.
Zamonaviy texnologiyalar olamini zabt eting! Bugundan boshlang! `,
  },
  {
    img: Third,
    text: "100 nafar oʻqituvchilarga 10 mln soʻmdan pul mukofotlari",
    description:
      "Loyiha doirasida 5 ta bepul kursda yoshlarga bepul ta’lim olish imkoni yaratiladi.",
  },
  {
    img: Fourth,
    text: "Eng yaxshi 10 nafar o‘qituvchiga chet-elga sayohat",
    description: ` O‘qituvchilarga xorijiy sayohat yo‘llanmasiga imkoniyati! Hurmatli umumiy o‘rta ta’lim maktablari o‘qituvchilari! Raqamli texnologiyalar vazirligi "Bir million o‘zbek dasturchilari" loyihasi doirasida Coursera platformasida yuqori natijalar ko‘rsatgan 10 nafar o‘qituvchini rag‘batlantirish maqsadida xorijga sayohat yo‘llanmasi taqdim etilishini e’lon qiladi.
Kimlar qatnashishi mumkin? O‘zbekistonning umumiy o‘rta ta’lim maktablarida faoliyat yurituvchi o‘qituvchilar. Coursera platformasida IT va boshqa zamonaviy yo‘nalishlarda muvaffaqiyatli o‘quv kurslarini tamomlagan o‘qituvchilar.
Mukofot olish shartlari: Coursera platformasida o‘qing: IT, dasturlash yoki boshqa zamonaviy yo‘nalishlardagi kurslarni tanlab o‘qing. Kurslarni muvaffaqiyatli yakunlang: Kurs davomida bilimlaringizni namoyish etib, sertifikatga ega bo‘ling. Faol bo‘ling: Ta’lim olish jarayonida muntazam qatnashish va yuqori natijalar ko‘rsatish muhim. Natijalarni taqdim eting: Sertifikat va natijalaringizni loyiha platformasiga topshiring. *qo’shimcha mezonlar alohida e’lon qilinadi.
Nega ishtirok etishingiz kerak? Xorijga sayohat: G‘oliblar zamonaviy texnologiya va ta’lim sohasidagi ilg‘or tajribalarni o‘rganish uchun xorijga sayohat qilish imkoniyatiga ega bo‘ladi. Professional rivojlanish: Coursera kurslari orqali yangi bilimlar va ko‘nikmalarga ega bo‘lasiz. Maktabingizning nufuzi: Sizning yutuqlaringiz o‘qituvchilar jamoasiga ilhom beradi va ta’lim sifatini oshirishga yordam beradi.
Qanday ishtirok etish mumkin? Ro‘yxatdan o‘ting: "Bir million o‘zbek dasturchilari" loyihasi doirasida ro‘yxatdan o‘ting. Coursera platformasiga kirib o‘qing: IT, texnologiya va boshqa fanlar bo‘yicha kurslarni tanlab o‘qing. Sertifikat oling: Kurslarni muvaffaqiyatli yakunlab, sertifikatlarga ega bo‘ling. Natijalaringizni topshiring: Sertifikatlaringizni va o‘qish davomida erishilgan yutuqlaringizni taqdim eting.
Muhim ma’lumotlar: G‘oliblar soni: 10 nafar eng faol va muvaffaqiyatli o‘qituvchi. Mukofot: Xorijga sayohat yo‘llanmasi. Muddat: Kurslarni belgilangan vaqt ichida yakunlash lozim.
Ta’lim olish va xorijiy tajribaga ega bo‘lish uchun ushbu noyob imkoniyatdan foydalaning! `,
  },
  {
    img: Fifth,
    text: "14 ta hududda eng yuqori natija ko'rsatgan o'quvchilarga noutbuk va qimmatbaho sovg'alar",
    description: `"Bir million o‘zbek dasturchilari" loyihasida qatnashib, sovg‘alarni qo‘lga kiriting! Hurmatli yoshlar va IT sohasiga qiziquvchilar! Raqamli texnologiyalar vazirligi tomonidan "Bir million o‘zbek dasturchilari" loyihasi doirasida yoshlarni IT yo‘nalishida qo‘llab-quvvatlash va rag‘batlantirish maqsadida, Coursera platformasida muvaffaqiyatli natijalar ko‘rsatgan o‘quvchilar uchun qimmatbaho sovg‘alar va noutbuklar ajratilishi e’lon qilindi.
Kimlar qatnashishi mumkin? "Bir million o‘zbek dasturchilari" loyihasida ro‘yxatdan o‘tgan; Coursera platformasi orqali IT va shaxsiy rivojlanish yo‘nalishidagi kurslarni muvaffaqiyatli yakunlagan; Platformada yuqori natija ko’rsatgan va sertifikatga ega bo‘lgan yurtimizdagi umumta’lim maktablarining barcha o’quvchilari.
Sovg‘alar va rag‘batlantirish imkoniyatlari: Noutbuklar: IT va shaxsiy rivojlanish yo’lida bilim olishni davom ettirishingiz uchun rag’bat. Qimmatbaho sovg‘alar: O‘quv faoliyatingizni qo‘llab-quvvatlovchi zamonaviy gadjetlar. Sertifikatlar va imkoniyatlar: Eng yaxshi natija ko‘rsatganlar maxsus mukofotlar bilan taqdirlanadi.
Qanday ishtirok etish mumkin? Ro‘yxatdan o‘ting: "Bir million o‘zbek dasturchilari" loyihasida ro‘yxatdan o‘tishingiz kerak. Coursera platformasida o‘qing: IT, dasturlash, data science yoki boshqa zamonaviy IT yo‘nalishlarini, shuningdek o’zingizni qiziqtirgan shaxsiy rivojlanish kurslarida o‘rganing. Kurslarni yakunlang: Kursni muvaffaqiyatli tamomlab, sertifikatga ega bo‘ling. Natijalarni taqdim eting: Olingan sertifikat va muvaffaqiyatlaringizni loyiha doirasida taqdim eting. Bu bo’yicha batafsil ma’lumotlar taqdim etiladi.
Nima uchun bu loyihada qatnashish kerak? Mutaxassislikka tayyorgarlik: Zamonaviy kasblarni o‘rganish imkoniyati sizni istiqbolda o’z yo’nalishingizda yetakchi mutaxassisga aylantiradi. Rag‘bat: Sovg‘alar va qo‘shimcha imkoniyatlar orqali o‘zingizga yanada motivatsiya va ilhom bering. Yorqin kelajak: O‘rganilgan bilimlar global va mahalliy IT bozorida va boshqa sohalarda ishlash uchun eshiklarni ochadi.
Muhim sanalar: Kurslarni tamomlash uchun oxirgi muddat: 2025-yilning avgust oyi Natijalarni topshirish: 2025-yilning sentyabr oyi
Siz ham imkoniyatdan foydalaning! O‘qing, rivojlaning va mukofotga ega bo‘ling!
Qo‘shimcha ma’lumot uchun: Telegram tarmog’ida bizni kuzatib boring 👉 https://t.me/digitaledu_uz `,
  },
  {
    img: Sixth,
    text: "Eng yaxshi 3 oliy ta’lim muassasalariga pul mukofotlari beriladi",
    description: `Universitetingizning g‘alabasiga hissa qo‘shing va yutuqlaringizni namoyish eting! Hurmatli talaba va professor-o‘qituvchilar! Raqamli texnologiyalar vazirligi tomonidan "Bir million o‘zbek dasturchilari" loyihasi doirasida O‘zbekistonning talabalari uchun katta imkoniyat e’lon qilindi. Coursera platformasida talabalari eng yaxshi natijalarni ko‘rsatgan 3 ta universitet qimmatbaho pul mukofotlari bilan taqdirlanadi!
Mukofot miqdorlari: 1-o‘rin: 100 million so‘m 2-o‘rin: 50 million so‘m 3-o‘rin: 25 million so‘m Universitetlarning umumiy natijalari talabalarning Coursera platformasidagi faoliyatiga asoslanadi, shu jumladan: Kurslarni muvaffaqiyatli tamomlash. Sertifikat olish natijalari. O‘qish jarayonida ko‘rsatilgan faollik va davomiylik. *qo’shimcha mezonlar alohida e’lon qilinadi.
Talabalarga yo‘riqnoma: Qanday qilib universitetingizni g’oliblar safiga olib chiqishingiz mumkin? Ro‘yxatdan o‘ting: "Bir million o‘zbek dasturchilari" loyihasida ro‘yxatdan o‘ting. Coursera platformasida o‘qing: IT va shaxsiy rivojlanish yo‘nalishida taklif etilgan kurslarni tanlang. Kurslarni o‘z vaqtida va muvaffaqiyatli yakunlang. Faol bo‘ling: Har kuni platformadan foydalaning. Kurslar davomida faol qatnashish va topshiriqlarni o‘z vaqtida bajarish universitetingiz reytingini oshiradi. Sertifikatga ega bo‘ling: Sertifikatlar nafaqat sizning shaxsiy muvaffaqiyatingiz, balki universitetingizga ham katta hissa qo‘shadi.
Nega bu muhim? Universitet yutug‘i: Universitetingizning IT-ta’lim va boshqa zamonaviy bilimlarni berish bo’yicha muvaffaqiyatlari e’tirof etiladi. Shaxsiy rivojlanish: Coursera platformasidagi kurslar sizning kasbiy ko‘nikmalaringizni oshirish va kelajakdagi IT bozorida muvaffaqiyatli bo‘lishingizga yordam beradi. Milliy rivojlanishga hissa: Sizning natijalaringiz O‘zbekistonning raqamli salohiyatini oshiradi.
Qanday foyda ko‘rasiz? Siz egallagan bilimlar sizni IT sohasida yetakchi mutaxassisga aylantiradi. Universitetingizning sovrindor bo‘lishiga hissa qo‘shganingiz uchun nufuz va faxr hissi sizga bir umrlik ilhom va motivatsiya beradi.
Muddatni o‘tkazib yubormang! Tengdoshlaringizni o‘qishga jalb eting va universitetingizni mukofot egasi qiling!
👉 https://t.me/digitaledu_uz `,
  },
  {
    img: Seventh,
    text: "Eng faol maktablarga Prezident sovg‘asi",
    description:
      "“Bir million o‘zbek dasturchilari” loyihasi doirasida eng faol maktablkarga Prezident sovg‘asi sifatida elektromobil taqdim etiladi O‘zbekiston Respublikasi Prezidenti tomonidan tashabbus qilingan “Bir million o‘zbek dasturchilari” loyihasi mamlakatimizda IT-ta’limni rivojlantirish, yoshlar orasida raqamli texnologiyalarni ommalashtirish va mustaqil o‘qishni rag‘batlantirishga qaratilgan muhim dastur hisoblanadi. Ushbu loyiha doirasida yangi rag‘batlantiruvchi tashabbus e’lon qilindi. Eng faol maktablarga Prezident sovg‘asi Loyiha doirasida Coursera onlayn platformasida o’quvchilari faol ta'lim olib, eng yuqori natijalarni qo‘lga kiritgan 2 ta umumiy o‘rta ta’lim maktabiga Prezident sovg‘asi sifatida elektromobillar topshirilishi e’lon qilindi. Ushbu mukofot, avvalo, mustaqil ta’limning ahamiyatini yuksaltirish va yoshlarni global raqamli ta’lim platformalaridan foydalanishga ilhomlantirishga qaratilgan. Ta'limda innovatsiyalarni rag‘batlantirish Ushbu tashabbus IT-ta’lim tizimini rivojlantirishda va mamlakatimiz yoshlarining innovatsion yondashuvlarni egallashida muhim qadam bo‘lib xizmat qiladi. Shuningdek, bosh mukofot bilan birga, o’qituvchilar va o’quvchilar uchun yana ko’plab qo’shimcha sovrin va mukofotlar joriy qilingan. Ushbu tashabbus o‘zbek yoshlari orasida mustaqil ta’lim olishning yangi davrini boshlab beradi va mamlakatimizni global raqamli maydonda yanada yuqori pog‘onaga ko‘tarishga xizmat qiladi.",
  },
];
