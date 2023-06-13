import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import carapccio from "../../assets/images/appetizers/carpaccio.jpg";

const useStyles = makeStyles({
  sectionTitle: {
    fontFamily: "Lobster",
    marginBottom: 10,
  },
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
  setLanguage: (selectedLanguage: string) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({
  sectionName,
  items,
  setLanguage,
}) => {
  const classes = useStyles();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  console.log(
    "🚀 ~ file: MenuSection.tsx:71 ~ descriptionRef:",
    descriptionRef
  );
  const [descriptionHeight, setDescriptionHeight] = useState<number | null>(
    null
  );
  console.log(
    "🚀 ~ file: MenuSection.tsx:74 ~ descriptionHeight:",
    descriptionHeight
  );

  useEffect(() => {
    if (descriptionRef.current) {
      setDescriptionHeight(descriptionRef.current.clientHeight);
    }
  }, [items]);

  const handleExpand = (itemName: string) => {
    setExpandedItem(prevExpandedItem =>
      prevExpandedItem === itemName ? null : itemName
    );
  };

  return (
    <div>
      <Typography variant="h5" className={classes.sectionTitle}>
        {sectionName}
      </Typography>
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
            <hr />
            <div ref={descriptionRef}>
              <Typography
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
            {descriptionHeight && descriptionHeight > 30 ? (
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
                <hr />
              </>
            ) : (
              ""
            )}
            <div className={classes.priceContainer}>
              <span>цена:</span>
              <span>&#8362;</span>
              <span>{item.price}</span>
              <div className="languages">
                <div onClick={() => setLanguage("he")}>HE</div>
                <div onClick={() => setLanguage("en")}>EN</div>
                <div onClick={() => setLanguage("ru")}>RU</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MenuSection;
