import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { DialogProp } from "./DialogProps";
import { Dialog } from "@mui/material";

const ldnDialog = (props: DialogProp) => {
  return <Dialog {...props}>{props.children}</Dialog>;
};

export default ldnDialog;
