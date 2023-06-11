import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import carapccio from "../../assets/images/appetizers/carpaccio.jpg";

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
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleExpand = (itemName: string) => {
    setExpandedItem(itemName === expandedItem ? null : itemName);
  };

  return (
    <div>
      <Typography variant="h5" sx={{ fontFamily: "Lobster", marginBottom: 4 }}>
        {sectionName}
      </Typography>
      {items.map((item, index) => (
        <Card key={index} sx={{ marginBottom: "10px" }}>
          <CardMedia
            component="img"
            height="140"
            image={carapccio}
            alt={item.name}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {item.name}
            </Typography>
            <hr />
            <Typography
              sx={{
                maxHeight: expandedItem === item.name ? "none" : 40,
                overflow: "hidden",
              }}
              variant="body2"
              color="text.secondary"
            >
              {item.description}
            </Typography>
            {expandedItem !== item.name && (
              <Button
                onClick={() => handleExpand(item.name)}
                variant="text"
                size="small"
              >
                БОЛЬШЕ
              </Button>
            )}
            {expandedItem === item.name && (
              <Button
                onClick={() => handleExpand(item.name)}
                variant="text"
                size="small"
              >
                СВЕРНУТЬ
              </Button>
            )}
            <hr />
            <Typography
              sx={{ display: "flex", justifyContent: "center", gap: "2px" }}
              variant="body2"
              color="text.secondary"
            >
              <span>цена:</span>
              <span>&#8362;</span>
              <span>{item.price}</span>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MenuSection;
