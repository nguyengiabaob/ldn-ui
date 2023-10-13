import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { SkeletonProp } from "./SkeletonProps";
import { Skeleton } from "@mui/material";

const ldnSkeleton = (props: SkeletonProp) => {
  return <Skeleton {...props}>{props.children}</Skeleton>;
};

export default ldnSkeleton;
