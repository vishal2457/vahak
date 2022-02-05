import clsx from "clsx";
import React from "react";
import "./button.scss";
interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    disabled?: boolean;
    variant?: "primary" | "danger" | "secondary" | "success" | "info" | "warning";
  }

export const Button = (props: ButtonProps) => {
  let { className, variant, disabled, children, ...rest } = props;
  return (
    <button
      disabled={disabled||false}
      className={clsx(["btn", props.className], {
        [`btn-${variant}`]: variant,
        ["btn-primary"]: !variant,
      })}
      {...rest}
    >
      {children}
    </button>
  );
};