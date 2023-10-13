import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { PaginationProp } from "./PaginationProps";
import { Pagination } from "@mui/material";

const ldnPagination = (props: PaginationProp) => {
  return <Pagination {...props}></Pagination>;
};

export default ldnPagination;
