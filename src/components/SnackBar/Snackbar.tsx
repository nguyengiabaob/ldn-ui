import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { SnackbarProp } from "./SnackbarProps";
import { Snackbar } from "@mui/material";

const LdnSnackbar = (props: SnackbarProp) => {
  return <Snackbar {...props}>{props.children}</Snackbar>;
};

export default LdnSnackbar;
