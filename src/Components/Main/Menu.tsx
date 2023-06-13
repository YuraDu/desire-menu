import React from "react";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { menuTitles } from "./../../Consts/consts";

import "./styles.css";
import { MenuSectionLink } from "../../Consts/interaces";
import { useSelector } from "react-redux";
import { ReduxState } from "../../Store/store";

const linksContainer = { display: "flex", flexDirection: "column", gap: 4 };

const Menu: React.FC = () => {
  const currentLanguage = useSelector(
    (state: ReduxState) => state.homePage.currentLanguage
  );

  return (
    <Grid sx={linksContainer}>
      {menuTitles.map((title: MenuSectionLink) => (
        <Link to={title.path}>
          <div className="menu-button">
            <span>
              {title.title[currentLanguage as keyof typeof title.title]}
            </span>
            <div className="menu-button--filter"></div>
          </div>
        </Link>
      ))}
    </Grid>
  );
};

export default Menu;
