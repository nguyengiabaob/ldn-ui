import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { BreadcrumbsProp } from "./BreadcrumbsProps";
import { Accordion, Alert, Avatar, Breadcrumbs } from "@mui/material";

const ldnBreadcrumbs = (props: BreadcrumbsProp) => {
  return <Breadcrumbs {...props}>{props.children}</Breadcrumbs>;
};

export default ldnBreadcrumbs;
