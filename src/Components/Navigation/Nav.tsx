import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <Box
      sx={{
        height: 40,
      }}
    >
      <Link to={"/menu"}>
        <Button>Menu</Button>
      </Link>
      <Link to={"/events"}>
        <Button>Events</Button>
      </Link>
    </Box>
  );
};

export default Nav;
