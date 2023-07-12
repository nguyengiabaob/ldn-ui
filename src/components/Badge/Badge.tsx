import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { BadgeProp } from "./BadgeProps";
import { Avatar, Badge } from "@mui/material";

const ldnBadge = (props: BadgeProp) => {
  return <Badge {...props}>{props.children}</Badge>;
};

export default ldnBadge;
