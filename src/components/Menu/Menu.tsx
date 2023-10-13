import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { MenuProp } from "./MenuProps";
import { Menu, Switch } from "@mui/material";

const ldnMenu = (props: MenuProp) => {
  return <Menu {...props}>{props.children}</Menu>;
};

export default ldnMenu;
