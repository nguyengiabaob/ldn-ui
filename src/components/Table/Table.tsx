import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { TableProp } from "./TableProps";
import { Table, ToggleButtonGroup } from "@mui/material";

const ldnTable = (props: TableProp) => {
  return <Table {...props}>{props.children}</Table>;
};

export default ldnTable;
