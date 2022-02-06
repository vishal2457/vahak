import React, { useState } from "react";
import { BidContext } from "../../../../contexts/BidInfo";
import { EditButton } from "./EditButton";
import "../step.scss";
import { OtpInput } from "../../../ui/OtpInput/OtpInput";
import { Button } from "../../../ui";

type stateKeyType = 0 | 1 | 2 | 3;

type otpType = {
  handleChange: (e: string, index: stateKeyType) => void;
  otpInputs: string[];
};

export const Otp = ({ handleChange, otpInputs }: otpType) => {
  const { state, functions } = React.useContext(BidContext);
  const [invalidOtp, setInvalidOtp] = useState(false);

  //input refs
  let ref1: any = React.useRef();
  let ref2: any = React.useRef();
  let ref3: any = React.useRef();
  let ref4: any = React.useRef();

  const verifyOtp = () => {
    if (otpInputs.join("") == "1234") {
      setInvalidOtp(false)
      functions?.changeStep(5);
      return
    }
    setInvalidOtp(true)
  };

  /**
   *
   * @param e synthetic event
   * @param index static index
   * @responsible to handle change locally and pass it to higher order
   */
  const handleChangeLocal = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: stateKeyType
  ) => {
    let val = e.target.value;
    if (val.length > 1) return;
    handleChange(e.target.value, index);
    setInvalidOtp(false)
    switch (index) {
      case 0:
        if (val) {
          ref2.current?.focus();
        }
        return;

      case 1:
        if (val) {
          ref3.current?.focus();
        } else {
          ref1.current?.focus();
        }
        return;
      case 2:
        if (val) {
          ref4.current?.focus();
        } else {
          ref2.current?.focus();
        }
        return;
      case 3:
        if (val) {
          verifyOtp();
        } else {
          ref3.current?.focus();
        }
        return;

      default:
        return;
    }
  };

  return (
    <div>
      <p className="m-t-4">We've sent an OTP to your mobile number, Please enter it</p>
      <div className="d-flex">
        <p className="m-r-2">
          below to submit your bid <b>{state?.userDetails?.number}</b>
        </p>
        <EditButton onClick={() => functions?.changeStep(3)} />
      </div>
      <div className="d-flex m-t-5 m-b-4">
        <OtpInput
          invalid={invalidOtp}
          ref={ref1}
          onChange={(e) => handleChangeLocal(e, 0)}
          value={otpInputs[0]}
        />
        <OtpInput
          invalid={invalidOtp}
          ref={ref2}
          onChange={(e) => handleChangeLocal(e, 1)}
          value={otpInputs[1]}
        />
        <OtpInput
          invalid={invalidOtp}
          ref={ref3}
          onChange={(e) => handleChangeLocal(e, 2)}
          value={otpInputs[2]}
        />
        <OtpInput
          invalid={invalidOtp}
          ref={ref4}
          onChange={(e) => handleChangeLocal(e, 3)}
          value={otpInputs[3]}
        />
      </div>
      <div className="text-center m-t-5 m-b-4">
        {invalidOtp ? <small style={{color: "red"}}>Invalid otp</small> : null }
        
        <p className="request-again">Request Otp again</p>
      </div>
      <Button type="submit" disabled>Verify via OTP</Button>
    </div>
  );
};
