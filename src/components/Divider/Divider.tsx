import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { DividerProp } from "./DividerProps";
import { Divider } from "@mui/material";

const ldnDivider = (props: DividerProp) => {
  return <Divider {...props}>{props.children}</Divider>;
};

export default ldnDivider;
