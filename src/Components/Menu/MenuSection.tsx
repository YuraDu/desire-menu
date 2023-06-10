import React from "react";

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
  return (
    <div>
      <h2>{sectionName}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>{item.description}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuSection;
