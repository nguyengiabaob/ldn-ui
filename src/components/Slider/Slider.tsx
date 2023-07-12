import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { SliderProp } from "./SliderProps";
import { Slider } from "@mui/material";

const ldnSlider = (props: SliderProp) => {
  return <Slider {...props}>{props.children}</Slider>;
};

export default ldnSlider;
