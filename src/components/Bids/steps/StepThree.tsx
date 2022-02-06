import React, { useEffect, useState } from "react";
import { BidContext } from "../../../contexts/BidInfo";
import { Button, Checkbox, Input } from "../../ui";
import { StepLayout } from "./StepLayout";
import { JourneyDetails } from "./Subs/JourneyDetails";
import { RateInput } from "./Subs/RateInput";
import "./step.scss";
import { UserDetails } from "../../../types/Bids";
import { Formik } from "formik";
import * as Yup from "yup";
import wpLogo from "./whatsapp.png"

const userDetailSchema = Yup.object().shape({
  whatsappUpdates: Yup.boolean().required("Required"),
  name: Yup.string().required("Required"),
  number: Yup.number().required("Required"),
});

const StepThree = () => {
  const { state, functions } = React.useContext(BidContext);

  const [initValues, setInitValues] = useState<UserDetails>({
    number: undefined,
    name: "",
    remarks: "",
    whatsappUpdates: true,
  });

  useEffect(() => {
    if (state?.userDetails) {
      setInitValues({ ...state?.userDetails });
    }

    return () => {};
  }, [state?.journeyDetails]);


  const WhatsAppUpdatesComp = () => {
    return <p>Get updates on <img src={wpLogo} className="wp-img" /> <span style={{color: "#40c351"}}>WhatsApp</span> </p>
  }

  return (
    <StepLayout>
      <JourneyDetails />
      <RateInput rateState={{
        rate: state?.rateDetails?.rate,
        negotiable: state?.rateDetails?.negotiable
      }} hideInput handleChange={() => {}} />
      <hr className="hr" />

      <Formik
        initialValues={initValues}
        validationSchema={userDetailSchema}
        enableReinitialize
        onSubmit={(values) => {
          functions?.addUserDetails(values);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <Input
              label="Enter your 10 digits mobile number"
              type="number"
              name="number"
              onChange={handleChange}
              className="m-t-3"
              value={values.number}
              invalid={!!errors.number && touched.number}
              errorMessage={errors.number}
            />
            <div className="wp-container">
            <Checkbox
              id="wpupdates"
              checked={values.whatsappUpdates}
              name="whatsappUpdates"
              onChange={handleChange}
              label={<WhatsAppUpdatesComp />}
              // className="m-b-4"
            />
            </div>
           

            <Input
              label="Enter Your name *"
              name="name"
              onChange={handleChange}
              className="m-t-3"
              value={values.name}
              invalid={!!errors.name && touched.name}
              errorMessage={errors.name}
            />

            <Input
              type="text"
              label="Enter Remarks (optional)"
              name="remarks"
              onChange={handleChange}
              className="m-t-3 m-b-4"
              value={values.remarks}
            />
            <Button type="submit" disabled={isSubmitting}>
              Verify via OTP
            </Button>
          </form>
        )}
      </Formik>
    </StepLayout>
  );
};

export default StepThree;
