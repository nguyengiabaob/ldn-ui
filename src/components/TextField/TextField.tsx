import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { TextFieldProp } from "./TextFieldProps";
import { ButtonGroup, TextField } from "@mui/material";

const ldnTextField = (props: TextFieldProp) => {
  return <TextField {...props}>{props.children}</TextField>;
};

export default ldnTextField;
