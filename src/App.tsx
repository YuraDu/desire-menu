import Container from "@mui/material/Container";
import "./App.css";

import Header from "./Components/Header/Header.tsx";
import Nav from "./Components/Navigation/Nav.tsx";

import Menu from "./Components/Main/Menu.tsx";
import Events from "./Components/Main/Events.tsx";
import { Route, Routes } from "react-router-dom";
import { MenuItem, menuRussian } from "./Consts/interaces.ts";
import MenuSection from "./Components/Menu/MenuSection.tsx";
console.log("🚀 ~ file: App.tsx:11 ~ menuRussian:", menuRussian);

function App() {
  const containerStyles = {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    height: "100vh",
  };

  return (
    <>
      <Container maxWidth="xs" sx={containerStyles}>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          <Route
            path="/appetizers"
            element={
              <MenuSection
                sectionName="Аперитивы и Закуски"
                items={menuRussian.appetizersAndSnacks}
              />
            }
          />
          <Route
            path="/hotSnacks"
            element={
              <MenuSection
                sectionName="Горячие Закуски"
                items={menuRussian.hotSnacks}
              />
            }
          />
          <Route
            path="/mainCourses"
            element={
              <MenuSection
                sectionName="Основные Блюда"
                items={menuRussian.hotSnacks}
              />
            }
          />
          <Route
            path="/mainCourses"
            element={
              <MenuSection
                sectionName="Основные Блюда"
                items={menuRussian.hotSnacks}
              />
            }
          />
          <Route
            path="/salads"
            element={
              <MenuSection sectionName="Салаты" items={menuRussian.salads} />
            }
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
