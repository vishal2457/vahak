import clsx from "clsx";
import React from "react";
import "./otpinput.scss";
interface OtpProps extends React.ComponentPropsWithoutRef<"input"> {
  invalid: boolean;
}

export const OtpInput = React.forwardRef((props: OtpProps, ref: any) => {
  let { type, invalid, ...rest } = props;
  return <input className={clsx('otp', {error: invalid})} type="number" {...rest} ref={ref} />;
});
