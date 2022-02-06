import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { BidContext } from "../../../contexts/BidInfo";
import { Button, Input } from "../../ui";
import { StepLayout } from "./StepLayout";
import * as Yup from "yup";
import { JourneyDetailType } from "../../../types/Bids";

const SignupSchema = Yup.object().shape({
  sourceLocation: Yup.string().required("Required"),
  destination: Yup.string().required("Required"),
  carType: Yup.string().required("Required"),
  noOfTravellers: Yup.number().required("Required"),
});

export const StepOne = () => {
  const { state, functions } = React.useContext(BidContext);
  const [initValues, setInitValues] = useState<JourneyDetailType>({
    sourceLocation: "",
    destination: "",
    carType: "HatchBack",
    noOfTravellers: 1,
  });

  useEffect(() => {
    if (state?.journeyDetails) {
      setInitValues({ ...state?.journeyDetails });
    }

    return () => {};
  }, [state?.journeyDetails]);

  const invalidTravller = (
    carType: "HatchBack" | "Sedan" | "SUV",
    value: number
  ) => {    
    if (carType == "SUV" && value > 6) {
      return "Travellers cannot be more then 6";
    } else if ( carType != "SUV" && value > 4) {
      return "Travellers cannot be more then 4";
    }
    return null;
  };

  return (
    <StepLayout>
      <Formik
        initialValues={initValues}
        validationSchema={SignupSchema}
        enableReinitialize
        onSubmit={(values) => {                    
          if(invalidTravller(values.carType, values.noOfTravellers)){
            return
          }
          functions?.addJourneyDetails(values);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="row m-b-3">
              <Input
                label="Source Location *"
                type="text"
                name="sourceLocation"
                onChange={handleChange}
                className="col-50"
                value={values.sourceLocation}
                invalid={!!errors.sourceLocation && touched.sourceLocation}
                errorMessage={errors.sourceLocation}
              />
              <Input
                label="Destination *"
                name="destination"
                onChange={handleChange}
                className="col-50-right"
                value={values.destination}
                invalid={!!errors.destination && touched.destination}
                errorMessage={errors.destination}
              />
            </div>
            <div className="m-t-4 m-b-4">
              <label>Enter Car Type *</label>
              <select
                className="form-control m-t-1"
                value={values.carType}
                name="carType"
                onChange={handleChange}
              >
                {["HatchBack", "Sedan", "SUV"].map((item, index) => {
                  return (
                    <option defaultValue={item} key={index}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>

            <Input
              type="number"
              label="Number of Travellers"
              name="noOfTravellers"
              onChange={handleChange}
              className="m-t-4 m-b-3"
              invalid={
                !!errors.noOfTravellers ||
                !!invalidTravller(values.carType, values.noOfTravellers)
              }
              errorMessage={
                errors.noOfTravellers ||
                invalidTravller(values.carType, values.noOfTravellers)
              }
              value={values.noOfTravellers}
            />
            <Button type="submit" className="m-t-4">
              Enter Bid Details
            </Button>
          </form>
        )}
      </Formik>
    </StepLayout>
  );
};
