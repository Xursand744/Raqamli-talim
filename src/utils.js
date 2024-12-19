import { Bolt } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { Users } from "lucide-react";
import { Lock } from "lucide-react";
import { Dessert } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Images } from "lucide-react";
import { Figma } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { PanelTop } from "lucide-react";

export const Menus = [
  {
    name: "Loyhalar",
    subMenuHeading: ["Design", "Scale"],
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
  },
  {
    name: "IT universitetlar",
  },
  {
    name: "Yangiliklar",
  },
  {
    name: "IT-maslahatlar",
  },

  {
    name: "Markaz haqida",
    subMenu: [
      {
        name: "Help",
        desc: "Center",
        icon: CircleHelp,
      },
      {
        name: "Community",
        desc: "Project help",
        icon: MessageCircle,
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
    name: "Bog’lanish",
  },

];
