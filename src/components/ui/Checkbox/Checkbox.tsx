import clsx from 'clsx';
import React from 'react';
import "./checkbox.scss";


interface CheckboxProps extends React.ComponentPropsWithoutRef<"input"> {
    label: string|React.ReactNode;
  }

export const Checkbox = (props: CheckboxProps) => {
    let {label, ...rest} = props;
  return  <div className={clsx(['d-flex', props.className])}>
  <input
    type="checkbox"
    {...rest}
  />
  <label className="m-l-1 m-t-0 pointer" htmlFor={props.id}>
    {props.label}
  </label>
</div>;
};
