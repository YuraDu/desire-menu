import React, { useState } from "react";
import Container from "@mui/material/Container";
import "./App.css";

import Header from "./Components/Header/Header.tsx";
import Nav from "./Components/Navigation/Nav.tsx";

import Menu from "./Components/Main/Menu.tsx";
import Events from "./Components/Main/Events.tsx";
import { Route, Routes } from "react-router-dom";
import { menuRussian } from "./Consts/interaces.ts";
import MenuSection from "./Components/Menu/MenuSection.tsx";

function App() {
  const [language, setLanguage] = useState("ru");
  console.log("🚀 ~ file: App.tsx:16 ~ App ~ language:", language);

  const containerStyles = {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    height: "100vh",
    gap: "10px",
    position: "relative",
  };

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    // Perform any other necessary logic related to language change
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
                setLanguage={handleLanguageChange}
              />
            }
          />
          {/* Rest of the routes */}
        </Routes>
      </Container>
    </>
  );
}

export default App;
