import React from "react";
import "./input.scss";
interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  required?: boolean;
}

export const Input = (props: InputProps) => {
  let { className, label, required, ...rest } = props;

  return (

    <div className="input-group">
    <label >{label}</label>
    <input type="text" {...rest}/>
  </div>
  );
};
