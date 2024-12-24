import { link } from "framer-motion/client";
import { CircleHelp } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { PanelTop } from "lucide-react";
import { brain, BuildingOffice, Graduation, send } from "./assets/icons/icon";

export const Menus = [
  {
    name: "Markaz haqida",
    subMenu: [
      {
        name: "Biz haqimizda",
        icon: CircleHelp,
        link: "/about",
      },
      {
        name: "Ochiq ma’lumotlar",
        icon: CircleHelp,
        link: "/about1",
      },
      {
        name: "Rahbariyat",
        icon: CircleHelp,
        link: "/about2",
      },
      {
        name: "Tuzilma",
        icon: CircleHelp,
        link: "/about3",
      },
      {
        name: "Bo’linmalar",
        icon: CircleHelp,
        link: "/about4",
      },
      {
        name: "Korrupsiyaga qarshi kurashish",
        icon: CircleHelp,
        link: "/about5",
      },
      {
        name: "Yuqori turuvchi tashkilot",
        icon: CircleHelp,
        link: "/about6",
      },
      {
        name: "Ochiq ma’lumotlar",
        icon: CircleHelp,
        link: "/about7",
      },
    ],
    gridCols: 1,
  },
  {
    name: "Loyihalar",
    subMenu: [
      {
        name: "Al Xorazmiy Vorislari",
        icon: PanelsTopLeft,
        link: "/projects/al-xorazmiy-vorislari",
      },
    ],
    gridCols: 1,
  },
  {
    name: "O'quv markazlar",
    link: "study-centers",
  },
  {
    name: "IT universitetlar",
    link: "/universities",
  },
  {
    name: "Yangiliklar",
    link: "/new",
  },
  {
    name: "IT-maslahatlar",
    link: "/tips",
  },

  {
    name: "Bog’lanish",
    link: "/contact",
  },
];

export const aboutFilters = [
  {
    title: "Biz haqimizda",
    link: "/about",
  },
  {
    title: "Ochiq ma’lumotlar",
    link: "/about1",
  },
  {
    title: "Rahbariyat",
    link: "/about2",
  },
  {
    title: "Tuzilma",
    link: "/about3",
  },
  {
    title: "Bo’linmalar",
    link: "/about4",
  },
  {
    title: "Korrupsiyaga qarshi kurashish",
    link: "/about5",
  },
  {
    title: "Yuqori turuvchi tashkilot",
    link: "/about6",
  },
  {
    title: "Ochiq ma’lumotlar",
    link: "/about7",
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
