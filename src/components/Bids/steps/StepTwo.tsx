import React, { useEffect, useState } from "react";
import { BidContext } from "../../../contexts/BidInfo";
import { RateType } from "../../../types/Bids";
import { Button } from "../../ui";
import { StepLayout } from "./StepLayout";
import { JourneyDetails } from "./Subs/JourneyDetails";
import { RateInput } from "./Subs/RateInput";

 const StepTwo = () => {
  const {state, functions} = React.useContext(BidContext);
  const [rateState, setRateState] = useState<RateType>({
    rate: 0,
    negotiable: false
  });


  useEffect(() => {
    
    if(state?.rateDetails){
      console.log(state.rateDetails);
      
      setRateState({...state.rateDetails})
    }
    return () => {
      
    };
  }, [state?.rateDetails]);


  const handleChange = (name:string, value: string|boolean) => {
    setRateState({...rateState, [name]: value})
  }
  
  const onSubmit = () => {
    if(!rateState.rate) {
      return
    }
    functions?.addRateDetails(rateState)
  }

  return (
    <StepLayout>
      <JourneyDetails />
      <RateInput rateState={rateState} handleChange={handleChange} />
    <Button onClick={onSubmit} disabled={!rateState?.rate} >Next</Button>
    </StepLayout>
  );
};


export default StepTwo