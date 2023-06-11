import React from "react";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  const buttonStyles = { color: "white", fontFamily: "Lobster" };

  return (
    <Grid
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
      <Link to="/pizza">
        <Button style={buttonStyles}>Пицца</Button>
      </Link>
      <Link to="/pasta">
        <Button style={buttonStyles}>Паста</Button>
      </Link>
      <Link to="/drinks">
        <Button style={buttonStyles}>Напитки</Button>
      </Link>
    </Grid>
  );
};

export default Menu;
