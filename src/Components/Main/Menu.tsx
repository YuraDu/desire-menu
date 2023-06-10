import React from "react";
import { Button } from "@mui/material";
import "./styles.css";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  const buttonStyles = { color: "white" };

  return (
    <div
      style={{
        fontFamily: "Lobster",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link to="/appetizers">
        <Button style={buttonStyles}>Аперитивы и Закуски</Button>
      </Link>
      <Link to="hotSnacks">
        <Button style={buttonStyles}>Горячие Закуски</Button>
      </Link>
      <Link to="/mainCourses">
        <Button style={buttonStyles}>Основывные Блюда</Button>
      </Link>
      <Link to="/salads">
        <Button style={buttonStyles}>Салаты</Button>
      </Link>
      <Link to="/">
        <Button style={buttonStyles}>Пицца</Button>
      </Link>
      <Link to="/">
        <Button style={buttonStyles}>Паста</Button>
      </Link>
      <Link to="/">
        <Button style={buttonStyles}>Напитки</Button>
      </Link>
    </div>
  );
};

export default Menu;
