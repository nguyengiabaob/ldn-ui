import React from "react";
import ".././../../styles/main.css";
import { CircularProgress } from "@mui/material";
import { CircularProgressProps } from "./ProgressProps";

const ldnCircularProgress = (props: CircularProgressProps) => {
  return <CircularProgress {...props} />;
};

export default ldnCircularProgress;
