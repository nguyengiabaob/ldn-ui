import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { ToggleButtonProp } from "./ToggleButtonProps";
import { ToggleButton } from "@mui/material";

const ldnToggleButton = (props: ToggleButtonProp) => {
  return <ToggleButton {...props}>{props.children}</ToggleButton>;
};

export default ldnToggleButton;
