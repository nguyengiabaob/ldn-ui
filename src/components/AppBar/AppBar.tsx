import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { AppBarProp } from "./AppBarProps";
import { AppBar } from "@mui/material";

const ldnAppBar = (props: AppBarProp) => {
  return <AppBar {...props}>{props.children}</AppBar>;
};

export default ldnAppBar;
