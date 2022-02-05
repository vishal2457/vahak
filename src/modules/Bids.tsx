import React from "react";
import { BidAction, BidActionTypes, BidState, steps } from "../types/Bids";
import { Header, LogoHeader } from "../components/ui";
import { BidContext } from "../contexts/BidInfo";
import {
  StepOne,
  StepThree,
  StepTwo,
  StepFour,
  StepFive,
} from "../components/Bids/steps";


//INITITAL STATE
let initialState: BidState = {
  journeyDetails: {
    sourceLocation: "Mumbai",
    destination: "Chennai",
    carType: "HatchBack",
    noOfTravellers: 1,
  },
  rateDetails: {
    rate: 0,
    negotiable: false,
  },
  userDetails: {
    number: 12312313123,
    name: "asdasdasd",
    remarks: "asdasdasdasdasd",
    whatsappUpdates: true
  },
  otp: null,
  currentStep: 1,
  
};

//State reducer to manipulate the original state
function reducer(state: BidState, action: BidAction) {
  let { type, payload } = action;
  switch (type) {
    case BidActionTypes.ADD_BID_DETAILS:
      return { ...state };

    case BidActionTypes.CHANGE_STEP:
      return { ...state, currentStep: payload };

    default:
      throw new Error();
  }
}

export const Bids = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);


  /**
   * All functions to perform actions in the module
   * passed in the context to avoid prop drilling
   */
  const bidFunctions = React.useMemo(() => {
    return {
      changeStep: (step: steps) => {
        dispatch({ type: BidActionTypes.CHANGE_STEP, payload: step });
      },
    };
  }, []);


  /**
   * renders active step
   */
  const stepRenderer = React.useMemo(() => {
    let { currentStep } = state;
     let steps = [
      <StepOne />,
      <StepTwo />,
      <StepThree />,
      <StepFour />,
      <StepFive />,
    ];
    return steps[currentStep - 1];
  }, [state.currentStep]) ;

  return (
    <BidContext.Provider value={{ state, functions: bidFunctions }}>
      <LogoHeader />
      <Header />
      {stepRenderer}
    </BidContext.Provider>
  );
};
