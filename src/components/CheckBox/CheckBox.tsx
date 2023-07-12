import React, { Children, ReactNode } from "react";
import { Checkbox } from "@mui/material";
import { CheckProps } from "./CheckBoxProps";
const CheckBox = (props: CheckProps) => {
  const {} = props;
  return <Checkbox {...props} />;
};

export default CheckBox;
