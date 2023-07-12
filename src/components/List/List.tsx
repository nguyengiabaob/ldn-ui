import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { ListProp } from "./ListProps";
import { List } from "@mui/material";

const ldnList = (props: ListProp) => {
  return <List {...props}>{props.children}</List>;
};

export default ldnList;
