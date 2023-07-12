import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { MenuItem, MenuItemProps } from "@mui/material";

const ldnMenuItem = (props: MenuItemProps) => {
  return <MenuItem {...props}>{props.children}</MenuItem>;
};

export default ldnMenuItem;
