import clsx from "clsx";
import React from "react";
import "./input.scss";
interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string|null;
}

export const Input = (props: InputProps) => {
  let { className, label, required, invalid, errorMessage, ...rest } = props;

  return (
    <div className={className}>
      <label>{label}</label>
      <input
        className={clsx([
          "form-control m-t-1",
          {
            error: invalid,
          },
        ])}
        {...rest}
      />
      {invalid && errorMessage ? <p style={{color: 'red'}}>{errorMessage}</p> : null}
    </div>
  );
};
