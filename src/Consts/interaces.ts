import * as russianMenuData from "../assets/data/russian.json";

interface Menu {
  language: string;
  appetizersAndSnacks: MenuItem[];
  mainCourses: MenuItem[];
  hotSnacks: MenuItem[];
  pizza: MenuItem[];
  pasta: MenuItem[];
  salads: MenuItem[];
}

export interface MenuSectionLink {
  path: string;
  title: {
    ru: string;
    en: string;
    he: string;
  };
}

export interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

const menuRussian: Menu = {
  language: "ru",
  appetizersAndSnacks: russianMenuData.appetizersAndSnacks,
  mainCourses: russianMenuData.mainCourses,
  hotSnacks: russianMenuData.hotSnacks,
  pizza: russianMenuData.pizza,
  pasta: russianMenuData.pasta,
  salads: russianMenuData.salads,
};

export { menuRussian };
