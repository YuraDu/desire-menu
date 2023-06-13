import React, { useState, useRef, useEffect, RefObject } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import carapccio from "../../assets/images/appetizers/carpaccio.jpg";
import LanguageButton from "../../UI/LanguageButton";

import "./styles.css";

const useStyles = makeStyles({
  card: {
    marginBottom: 10,
  },
  cardMedia: {
    height: 140,
  },
  expandedDescription: {
    fontFamily: "Alumni",
    fontSize: 16,
  },
  itemName: {
    fontFamily: "Alumni",
    fontSize: 20,
  },
  description: {
    fontFamily: "Alumni",
    maxHeight: 40,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    fontSize: 16,
    // paddingBottom: "10px",
  },
  priceContainer: {
    fontFamily: "Alumni",
    display: "flex",
    justifyContent: "center",
    gap: 2,

    position: "relative",
  },
});

interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

interface MenuSectionProps {
  sectionName: string;
  items: MenuItem[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ sectionName, items }) => {
  const classes = useStyles();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleExpand = (itemName: string) => {
    setExpandedItem(prevExpandedItem =>
      prevExpandedItem === itemName ? null : itemName
    );
  };

  return (
    <div>
      <div className="section-title">{sectionName}</div>
      {items.map((item, index) => (
        <Card key={index} className={classes.card}>
          <CardMedia
            component="img"
            height="140"
            image={carapccio}
            alt={item.name}
            className={classes.cardMedia}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {item.name}
            </Typography>
            <div>
              <Typography
                sx={{ padding: "10px, 0" }}
                className={
                  expandedItem === item.name
                    ? classes.expandedDescription
                    : classes.description
                }
                variant="body2"
                color="text.secondary"
              >
                {item.description}
              </Typography>
            </div>
            {item.description && item.description.length > 75 ? (
              <>
                {expandedItem !== item.name ? (
                  <Button
                    onClick={() => handleExpand(item.name)}
                    variant="text"
                    size="small"
                  >
                    БОЛЬШЕ
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleExpand(item.name)}
                    variant="text"
                    size="small"
                  >
                    СВЕРНУТЬ
                  </Button>
                )}
              </>
            ) : (
              ""
            )}
            <div className={classes.priceContainer}>
              <span>цена:</span>
              <span>&#8362;</span>
              <span>{item.price}</span>
              <div className="languages">
                <LanguageButton language={"he"} />
                <LanguageButton language={"en"} />
                <LanguageButton language={"ru"} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MenuSection;
