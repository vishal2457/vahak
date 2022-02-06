import React, { Suspense } from "react";
import {
  BidAction,
  BidActionTypes,
  BidState,
  steps,
  JourneyDetailType,
  RateType,
  UserDetails,
} from "../types/Bids";
import { Header, LogoHeader } from "../components/ui";
import { BidContext } from "../contexts/BidInfo";
import { StepOne } from "../components/Bids/steps/StepOne";
import { Loading } from "../components/ui/Loading/Loading";
const StepTwo = React.lazy(() => import("../components/Bids/steps/StepTwo")); // Lazy-loaded
const StepThree = React.lazy(
  () => import("../components/Bids/steps/StepThree")
);
const StepFour = React.lazy(() => import("../components/Bids/steps/StepFour"));
const StepFive = React.lazy(() => import("../components/Bids/steps/StepFive"));

//INITITAL STATE
let initialState: BidState = {
  journeyDetails: {
    sourceLocation: "",
    destination: "",
    carType: "HatchBack",
    noOfTravellers: 1,
  },
  rateDetails: {
    rate: 0,
    negotiable: false,
  },
  userDetails: {
    number: undefined,
    name: "",
    remarks: "",
    whatsappUpdates: true,
  },
  otp: null,
  currentStep: 1,
};

//State reducer to manipulate the original state
function reducer(state: BidState, action: BidAction) {
  let { type, payload } = action;
  switch (type) {
    case BidActionTypes.ADD_BID_DETAILS:
      return { ...state, ...payload };

    case BidActionTypes.CHANGE_STEP:
      return { ...state, currentStep: payload };

    case BidActionTypes.ADD_RATE:
      return { ...state, ...payload };

    case BidActionTypes.ADD_USER_DETAILS:
      return { ...state, ...payload };

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
      /**
       * @param step you want to change to
       */
      changeStep: (step: steps) => {
        dispatch({ type: BidActionTypes.CHANGE_STEP, payload: step });
      },
      addJourneyDetails: (data: JourneyDetailType) => {
        dispatch({
          type: BidActionTypes.ADD_BID_DETAILS,
          payload: { journeyDetails: data, currentStep: 2 },
        });
      },
      /**
       * @param rateData
       * handle rate change
       */
      addRateDetails: (rateData: RateType) => {
        dispatch({
          type: BidActionTypes.ADD_RATE,
          payload: { rateDetails: rateData, currentStep: 3 },
        });
      },

      addUserDetails: (userData: UserDetails) => {
        dispatch({
          type: BidActionTypes.ADD_USER_DETAILS,
          payload: { userDetails: userData, currentStep: 4 },
        });
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
  }, [state.currentStep]);

  return (
    <BidContext.Provider value={{ state, functions: bidFunctions }}>
      <LogoHeader />
      <Header />
      <Suspense fallback={<Loading />}>{stepRenderer}</Suspense>
    </BidContext.Provider>
  );
};
