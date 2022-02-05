import React from 'react';
import "./checkbox.scss";


interface CheckboxProps extends React.ComponentPropsWithoutRef<"input"> {
    label: string;
  }

export const Checkbox = (props: CheckboxProps) => {
    let {label, ...rest} = props;
  return  <div className="d-flex">
  <input
    type="checkbox"
    {...rest}
  />
  <label className="m-l-2 m-t-0 pointer" htmlFor={props.id}>
    {props.label}
  </label>
</div>;
};
