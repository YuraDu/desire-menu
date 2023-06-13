import Container from "@mui/material/Container";
import "./App.css";

import Header from "./Components/Header/Header.tsx";
import Nav from "./Components/Navigation/Nav.tsx";

import Menu from "./Components/Main/Menu.tsx";
import Events from "./Components/Main/Events.tsx";
import { Route, Routes } from "react-router-dom";
import { menuRussian } from "./Consts/interaces.ts";
import MenuSection from "./Components/Menu/MenuSection.tsx";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("ru");

  const handleChangeLanguage = (language: string) => {
    setLanguage(language);
  };

  const containerStyles = {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    height: "100vh",
    gap: "10px",
  };

  return (
    <>
      <Container maxWidth="xs" sx={containerStyles}>
        <Header />
        <Nav />
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/" element={<Events />} />

          <Route
            path="/appetizers"
            element={
              <MenuSection
                sectionName="Аперитивы и Закуски"
                items={menuRussian.appetizersAndSnacks}
                setLanguage={handleChangeLanguage}
              />
            }
          />
          <Route
            path="/hotSnacks"
            element={
              <MenuSection
                sectionName="Горячие Закуски"
                items={menuRussian.hotSnacks}
                setLanguage={handleChangeLanguage}
              />
            }
          />
          <Route
            path="/mainCourses"
            element={
              <MenuSection
                sectionName="Основные Блюда"
                items={menuRussian.mainCourses}
                setLanguage={handleChangeLanguage}
              />
            }
          />
          <Route
            path="/salads"
            element={
              <MenuSection
                setLanguage={handleChangeLanguage}
                sectionName="Салаты"
                items={menuRussian.salads}
              />
            }
          />
          <Route
            path="/pasta"
            element={
              <MenuSection
                setLanguage={handleChangeLanguage}
                sectionName="Паста"
                items={menuRussian.pasta}
              />
            }
          />
          <Route
            path="/pizza"
            element={
              <MenuSection
                setLanguage={handleChangeLanguage}
                sectionName="Пицца"
                items={menuRussian.pizza}
              />
            }
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
