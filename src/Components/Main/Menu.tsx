import React from "react";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";

const linksContainer = { display: "flex", flexDirection: "column", gap: 4 };

const Menu: React.FC = () => {
  return (
    <Grid sx={linksContainer}>
      <Link to="/appetizers">
        <div className="buttonStyles menu-button">
          <span>Аперитивы и Закуски</span>
          <div className="menu-button--filter"></div>
        </div>
      </Link>
      <Link to="/hotSnacks">
        <div className="buttonStyles menu-button">
          <span>Горячие Закуски</span>
          <div className="menu-button--filter"></div>
        </div>
      </Link>
      <Link to="/mainCourses">
        <div className="buttonStyles menu-button">
          <span>Основные Блюда</span>
          <div className="menu-button--filter"></div>
        </div>
      </Link>
      <Link to="/salads">
        <div className="buttonStyles menu-button">
          <span>Салаты</span>
          <div className="menu-button--filter"></div>
        </div>
      </Link>
      <Link to="/pizza">
        <div className="buttonStyles menu-button">
          <span>Пицца</span>
          <div className="menu-button--filter"></div>
        </div>
      </Link>
      <Link to="/pasta">
        <div className="buttonStyles menu-button">
          <span>Паста</span>
          <div className="menu-button--filter"></div>
        </div>
      </Link>
      <Link to="/drinks">
        <div className="buttonStyles menu-button">
          <span>Напитки</span>
          <div className="menu-button--filter"></div>
        </div>
      </Link>
    </Grid>
  );
};

export default Menu;
