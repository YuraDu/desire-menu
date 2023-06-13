import { MenuSectionLink } from "./interaces";

export const menuTitles: MenuSectionLink[] = [
  {
    path: "/appetizers",
    title: {
      ru: "Аперитивы и Закуски",
      en: "Appetizers and Snacks",
      he: "מנות פתיחה",
    },
  },
  {
    path: "/hotSnacks",
    title: { ru: "Горячие Закуски", en: "Fries", he: "מתוגנים" },
  },
  {
    path: "/mainCourses",
    title: { ru: "Основные Блюда", en: "Main Courses", he: "עיקריות" },
  },
  { path: "/salads", title: { ru: "Салаты", en: "Salads", he: "סלטים" } },
  { path: "/pizza", title: { ru: "Пицца", en: "Pizza", he: "פיצצה" } },
  { path: "/pasta", title: { ru: "Паста", en: "Pasta", he: "פסטה" } },
  { path: "/drinks", title: { ru: "Напитки", en: "Drinks", he: "משקאות" } },
];
