import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";

import { MenuItem, MenuList, MenuListProps } from "@mui/material";

const ldnMenuList = (props: MenuListProps) => {
  return <MenuList {...props}>{props.children}</MenuList>;
};

export default ldnMenuItem;
