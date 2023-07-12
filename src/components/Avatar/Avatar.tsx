import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { AvatarProp } from "./AvatarProps";
import { Avatar } from "@mui/material";

const ldnAvatar = (props: AvatarProp) => {
  return <Avatar {...props}>{props.children}</Avatar>;
};

export default ldnAvatar;
