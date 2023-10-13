import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { AlertProp } from "./AlertProps";
import { Alert, Avatar } from "@mui/material";

const ldnAlert = (props: AlertProp) => {
  return <Alert {...props}>{props.children}</Alert>;
};

export default ldnAlert;
