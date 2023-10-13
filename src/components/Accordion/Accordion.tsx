import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { AccordionProp } from "./AccordionProps";
import { Accordion, Alert, Avatar } from "@mui/material";

const ldnAlert = (props: AccordionProp) => {
  return <Accordion {...props}>{props.children}</Accordion>;
};

export default ldnAlert;
