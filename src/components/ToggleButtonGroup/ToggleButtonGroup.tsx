import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { ToggleButtonGroupProp } from "./ToggleButtonGroupProps";
import { ToggleButtonGroup } from "@mui/material";

const ldnToggleButton = (props: ToggleButtonGroupProp) => {
  return <ToggleButtonGroup {...props}>{props.children}</ToggleButtonGroup>;
};

export default ldnToggleButton;
