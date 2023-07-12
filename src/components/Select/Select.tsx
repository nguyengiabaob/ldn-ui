import React, { ButtonHTMLAttributes } from "react";
import ".././../../styles/main.css";
import { SelectProp } from "./SelectProps";
import { Select } from "@mui/material";

const ldnSelect = (props: SelectProp) => {
  const getColor = (color: string) => {
    switch (color) {
      case "primary":
        return "ldn-btn-primary";
      case "secondary":
        return "ldn-btn-secondary";
      case "success":
        return "ldn-btn-success";
      case "error":
        return "ldn-btn-error";
      case "info":
        return "ldn-btn-info";
      case "warning":
        return "ldn-btn-warning";
      case "inherit":
        return `ldn-btn-default`;
      default:
        return `ldn-btn-default`;
    }
  };
  const getVariant = (label: string, disable: boolean) => {
    switch (label) {
      case "contained":
        if (disable === true) {
          return "ldn-btn-contained-disable";
        }
        return "ldn-btn-contained";
      case "outlined":
        if (disable === true) {
          return "ldn-btn-outlined-disable";
        }
        return "ldn-btn-outlined";

      case "text":
        if (disable === true) {
          return "ldn-btn-text-disable";
        }
        return "ldn-btn-text";
      default:
        return `ldn-btn-default`;
    }
  };
  const getSize = (label: string) => {
    switch (label) {
      case "small":
        return "btn-small";

      case "medium":
        return "btn-medium";

      case "large":
        return "btn-large";
      default:
        return ``;
    }
  };

  return <Select {...props}>{props.children}</Select>;
};

export default ldnSelect;
