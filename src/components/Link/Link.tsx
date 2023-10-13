import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { LinkProp } from "./LinkProps";
import { Accordion, Alert, Avatar, Link } from "@mui/material";

const ldnLink = (props: LinkProp) => {
  return <Link {...props}>{props.children}</Link>;
};

export default ldnLink;
