import React, { Ref } from "react";
import "./otpinput.scss";
interface OtpProps extends React.ComponentPropsWithoutRef<"input"> {
  ref: any;
}

export const OtpInput = React.forwardRef((props: OtpProps, ref: any) => {
  let { type, ...rest } = props;
  return <input className="otp" type="number" {...rest} ref={ref} />;
});
