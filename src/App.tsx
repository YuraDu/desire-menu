import Container from "@mui/material/Container";
import "./App.css";

import Header from "./Components/Header/Header.tsx";
import Nav from "./Components/Navigation/Nav.tsx";

import Menu from "./Components/Main/Menu.tsx";
import Events from "./Components/Main/Events.tsx";
import { Route, Routes } from "react-router-dom";
import { menuRussian } from "./Consts/interaces.ts";
import MenuSection from "./Components/Menu/MenuSection.tsx";
import LanguageButton from "./UI/LanguageButton.tsx";

function App() {
  const containerStyles = {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    height: "100vh",
    gap: "10px",
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          gap: "4px",
        }}
      >
        <LanguageButton language={"he"} />
        <LanguageButton language={"en"} />
        <LanguageButton language={"ru"} />
      </div>
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
                items={menuRussian.mainCourses}
              />
            }
          />
          <Route
            path="/salads"
            element={
              <MenuSection sectionName="Салаты" items={menuRussian.salads} />
            }
          />
          <Route
            path="/pasta"
            element={
              <MenuSection sectionName="Паста" items={menuRussian.pasta} />
            }
          />
          <Route
            path="/pizza"
            element={
              <MenuSection sectionName="Пицца" items={menuRussian.pizza} />
            }
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
