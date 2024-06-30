import Aeler from "../../assets/projects/aeler.png";
import Alufire from "../../assets/projects/alufire.png";
import Lemonade from "../../assets/projects/lemonade.png";
import Muraflex from "../../assets/projects/muraflex.png";
import Oomnitza from "../../assets/projects/oomnitza.png";
import Propertysimple from "../../assets/projects/propertysimple.png";
import Thinknum from "../../assets/projects/thinknum.png";
import Recess from "../../assets/projects/recess.png";
import Unore from "../../assets/projects/unore.png";
import Zilculator from "../../assets/projects/zilculator.png";

export const Menu = [
  {
    id: 1,
    image: Aeler,
    title: "AELER",
    category: ["Frontend"],
    url: "https://www.aeler.com",
  },
  {
    id: 2,
    image: Alufire,
    title: "ALUFIRE",
    category: ["Frontend", "Backend"],
    url: "https://www.alufire.com",
  },
  {
    id: 3,
    image: Lemonade,
    title: "Lemonade",
    category: ["Frontend", "Backend", "Mobile"],
    url: "https://www.lemonade.com",
  },
  {
    id: 4,
    image: Muraflex,
    title: "Muraflex",
    category: ["Frontend"],
    url: "https://muraflex.com/en",
  },
  {
    id: 5,
    image: Oomnitza,
    title: "Oomnitza",
    category: ["Frontend"],
    url: "https://www.oomnitza.com/",
  },
  {
    id: 6,
    image: Propertysimple,
    title: "PROPERTYSIMPLE",
    category: ["Backend", "Mobile"],
    url: "https://www.propertysimple.com",
  },
  {
    id: 7,
    image: Thinknum,
    title: "Thinknum",
    category: ["Frontend", "Backend"],
    url: "https://www.thinknum.com",
  },
  {
    id: 8,
    image: Recess,
    title: "Recess",
    category: ["Backend", "Mobile"],
    url: "https://takearecess.co",
  },
  {
    id: 9,
    image: Unore,
    title: "Muraflex",
    category: ["Frontend", "Mobile"],
    url: "https://unore.io",
  },
  {
    id: 10,
    image: Zilculator,
    title: "Muraflex",
    category: ["Frontend", "Backend", "Mobile"],
    url: "https://www.zilculator.com",
  },
];

export const Category = [
  "All",
  ...new Set(Menu.flatMap((item) => item.category)),
];
