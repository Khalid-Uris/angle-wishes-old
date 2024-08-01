import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

import UserLayout from "../../../layouts/main-layout/main_layout";
import { AuthInputs } from "../../../components/other-component/input";
import CommonHeading from "../../../components/other-component/common-heading";

import colors from "../../../assets/color/color";
import MailIcon from "@mui/icons-material/Mail";
import CommonButton from "../../../components/other-component/common-button";
import Loader from "../../../components/other-component/loader";
import { authServices } from "../../../services/auth";

const initialValue = {
  email: "",
};

const validationSchema = yup.object({
  email: yup
    .string()
    .required("Please enter email")
    .email("Invalid email format"),
});

const CenteredBox = () => {
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(false);

  const onSubmit = async (values) => {
    setIsloading(true);
    try {
      const response = await authServices.forgetPassword({
        email: values?.email,
      });
      navigate("/reset-password");
      return response;
    } catch (error) {
      console.log(error);
    } finally {
      formik.resetForm();
      setIsloading(false);
    }
  };

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validationSchema,
    onSubmit: (value) => onSubmit(value),
  });

  const { handleChange, handleSubmit, errors, values } = formik;

  return (
    <UserLayout>
      <Box
        className="col-md-6 col-xs-12"
        sx={{
          borderRadius: { md: 3, sm: 0 },
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
          margin: "0 auto",
          my: { sm: "3rem" },
          px: { md: 0, xs: 2 },
          py: 4,
        }}
      >
        <CommonHeading
          heading="Forgot Password"
          para="Enter your email address & we’ll send you a link to reset your password"
          paraStyle={{ color: colors.grey }}
        />
        <form onSubmit={handleSubmit}>
          <AuthInputs
            placeholder="Enter email"
            onChange={handleChange}
            value={values?.email}
            error={errors?.email}
            name="email"
            type="email"
            startIcon={true}
            icon={<MailIcon style={{ color: colors.grey }} />}
            label="Email:"
            // inputWidth="50%"
            style={{ my: { xs: 3 }, mx: { md: 8 } }}
          />
          {isLoading ? (
            <Loader loading={isLoading} />
          ) : (
            <CommonButton
              title="Reset Password"
              style={{ my: 3, margin: "0 auto" }}
              backgroundColor={colors.primary}
              mx={{ md: 8, xs: 0 }}
              type="submit"
            />
          )}
          <CommonButton
            title="Back to"
            anotherText="Login"
            anotherTextStyle={{
              color: colors?.blue,
              cursor: "pointer",
              margin: "8px",
            }}
            style={{ my: 2 }}
            mx={{ md: 8, xs: 0 }}
            onClick={() => navigate("/")}
          />
        </form>
      </Box>
    </UserLayout>
  );
};

export default CenteredBox;
