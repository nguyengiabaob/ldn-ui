import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { SwtichProp } from "./SwitchProps";
import { Switch } from "@mui/material";

const ldnSwitch = (props: SwtichProp) => {
  return <Switch {...props} />;
};

export default ldnSwitch;
