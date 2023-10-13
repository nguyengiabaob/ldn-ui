import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { PaperProp } from "./PaperProps";
import { Paper } from "@mui/material";

const ldnPaper = (props: PaperProp) => {
  return <Paper {...props}>{props.children}</Paper>;
};

export default ldnPaper;
