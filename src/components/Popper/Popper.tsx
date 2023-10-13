import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { PopoverProp } from "./PopperProps";
import { Popover } from "@mui/material";

const ldnDrawer = (props: PopoverProp) => {
  return <Popover {...props}>{props.children}</Popover>;
};

export default ldnDrawer;
