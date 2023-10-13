import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { TabsProp } from "./Tabs.props";
import { Tabs } from "@mui/material";

const ldnTabs = (props: TabsProp) => {
  return <Tabs {...props}>{props.children}</Tabs>;
};

export default ldnTabs;
