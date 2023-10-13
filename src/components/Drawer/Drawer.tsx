import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { DrawerProp } from "./DrawerProps";
import { Drawer } from "@mui/material";

const ldnDrawer = (props: DrawerProp) => {
  return <Drawer {...props}>{props.children}</Drawer>;
};

export default ldnDrawer;
