import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { TypographyProp } from "./TypographyProps";
import { ToggleButton, Tooltip, Typography } from "@mui/material";

const ldnTypography = (props: TypographyProp) => {
  return <Typography {...props}>{props.children}</Typography>;
};

export default ldnTypography;
