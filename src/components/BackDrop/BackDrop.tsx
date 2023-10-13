import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { BackdropProp } from "./BackDropProps";
import { Backdrop } from "@mui/material";

const ldnBackDrop = (props: BackdropProp) => {
  return <Backdrop {...props}>{props.children}</Backdrop>;
};

export default ldnBackDrop;
