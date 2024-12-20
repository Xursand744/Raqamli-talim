import { link } from "framer-motion/client";
import { CircleHelp } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { PanelTop } from "lucide-react";

export const Menus = [
  {
    name: "Markaz haqida",
    subMenu: [
      {
        name: "Al Xorazmiy",
        desc: "Haqida",
        icon: CircleHelp,
        link: "/about",
      },
      {
        name: "Community",
        desc: "Project help",
        icon: MessageCircle,
        link: "/about2",
      },
      {
        name: "Emergency",
        desc: "Urgent issues",
        icon: TriangleAlert,
      },
    ],
    gridCols: 1,
  },
  {
    name: "Loyhalar",
    subMenuHeading: ["Design", "Scale"],
    link: "/projects",
    subMenu: [
      {
        name: "Design",
        desc: "Mini loyhalar",
        icon: PanelsTopLeft,
      },

      {
        name: "Navigation",
        desc: "",
        icon: PanelTop,
      },
    ],
    gridCols: 2,
  },
  {
    name: "O'quv markazlar",
    link: "study-centers",
  },
  {
    name: "IT universitetlar",
    link: "universities",
  },
  {
    name: "Yangiliklar",
    link: "news",
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
