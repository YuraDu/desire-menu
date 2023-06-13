import React from "react";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";

const linksContainer = { display: "flex", flexDirection: "column", gap: 4 };

const Menu: React.FC = () => {
  return (
    <Grid sx={linksContainer}>
      <Link to="/appetizers">
        <div className="buttonStyles menu-button">Аперитивы и Закуски</div>
      </Link>
      <Link to="/hotSnacks">
        <div className="buttonStyles menu-button">Горячие Закуски</div>
      </Link>
      <Link to="/mainCourses">
        <div className="buttonStyles menu-button">Основные Блюда</div>
      </Link>
      <Link to="/salads">
        <div className="buttonStyles menu-button">Салаты</div>
      </Link>
      <Link to="/pizza">
        <div className="buttonStyles menu-button">Пицца</div>
      </Link>
      <Link to="/pasta">
        <div className="buttonStyles menu-button">Паста</div>
      </Link>
      <Link to="/drinks">
        <div className="buttonStyles menu-button">Напитки</div>
      </Link>
    </Grid>
  );
};

export default Menu;
