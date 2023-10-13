import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { RadioGroupProp } from "./RadioProps";
import { RadioGroup } from "@mui/material";

const ldnRadioGroup = (props: RadioGroupProp) => {
  return <RadioGroup {...props}>{props.children}</RadioGroup>;
};

export default ldnRadioGroup;
