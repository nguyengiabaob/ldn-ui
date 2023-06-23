import React, { ButtonHTMLAttributes } from "react";
import { ButtonProps } from "./ButtonProps";
import "./Button.scss";
import ".././../../styles/main.css";
const Button = (props: ButtonProps) => {
  const {
    style,
    className,
    onClick,
    children,
    color = "primary",
    disabled = false,
    size = "medium",
    variant = "contained",
    href,
  } = props;
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

  return (
    <>
      {href ? (
        <a
          style={style}
          className={[
            `ldn-btn ${getColor(color) ?? ""}`,
            `${className ?? ""}`,
            `${getVariant(variant, disabled) ?? ""}`,
            `${getSize(size)}`,
          ]
            .filter((x) => x !== "")
            .join(" ")}
          href={href}
        >
          {children}
        </a>
      ) : (
        <button
          style={style}
          className={[
            `ldn-btn ${getColor(color) ?? ""}`,
            `${className ?? ""}`,
            `${getVariant(variant, disabled) ?? ""}`,
            `${getSize(size)}`,
          ]
            .filter((x) => x !== "")
            .join(" ")}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
