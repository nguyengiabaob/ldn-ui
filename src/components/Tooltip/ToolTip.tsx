import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { TooltipProp } from "./ToolTipProps";
import { ToggleButton, Tooltip } from "@mui/material";

const ldnTooltip = (props: TooltipProp) => {
  return <Tooltip {...props}>{props.children}</Tooltip>;
};

export default ldnTooltip;
