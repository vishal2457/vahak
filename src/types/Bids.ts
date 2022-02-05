export enum BidActionTypes {
    ADD_BID_DETAILS = "ADD_BID_DETAILS",
    ADD_RATE = "ADD_RATE",
    ADD_USER_DETAILS = "ADD_USER_DETAILS",
    VERIFY_OTP = "VERIFY_OTP",
    CHANGE_STEP = "CHANGE_STEP",  
  }
  
  export type BidAction = {
    payload: any
    type: BidActionTypes
  };
  
  type JourneyDetailType = {
      sourceLocation: string
      destination: string
      carType:"HatchBack"|"Sedan"|"SUV"
      noOfTravellers: number
  }
  
  type UserDetails = {
      number : number|null,
      name: string
      remarks?: string
      whatsappUpdates: boolean
  }
  
  
  export type steps = 1|2|3|4|5
  
  export type BidState = {
      journeyDetails?: JourneyDetailType
      rateDetails?: {
          rate: number
          negotiable: boolean
      }
      userDetails?: UserDetails
      otp?: 1234|number|null
      currentStep?: steps
  
  }
  

export type BidFunctions = {
    changeStep: (step: steps) => void;
}


//context type 
export type BidContextType = {state: BidState|null, functions: BidFunctions|null}
