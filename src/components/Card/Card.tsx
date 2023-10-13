import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { CardProp } from "./CardProps";
import { Accordion, Alert, Avatar, Card } from "@mui/material";

const ldnCard = (props: CardProp) => {
  return <Card {...props}>{props.children}</Card>;
};

export default ldnCard;
