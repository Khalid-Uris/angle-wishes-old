import React, { useState } from "react";
import { Box } from "@mui/material";

import UserLayout from "../../../../layouts/main-layout/main_layout";
import CommonHeading from "../../../../components/other-component/common-heading";
import { AuthInputs } from "../../../../components/other-component/input";
import Loader from "../../../../components/other-component/loader";
import CommonButton from "../../../../components/other-component/common-button";

import * as yup from "yup";
import { useFormik } from "formik";

import LockIcon from "@mui/icons-material/Lock";
import TokenIcon from "@mui/icons-material/Token";
import colors from "../../../../assets/color/color";
import { authServices } from "../../../../services/auth";
import { useNavigate } from "react-router-dom";

const initialValue = {
  token: "",
  password: "",
  password_confirmation: "",
};

const validationSchema = yup.object({
  token: yup.string().required("Please enter token"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter password"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm password"),
});

const ResetPassword = () => {
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    setIsloading(true);
    try {
      const response = await authServices.resetPassword({
        token: values?.token,
        password: values?.password,
        password_confirmation: values?.password_confirmation,
      });
      navigate("/");
      return response;
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validationSchema,
    onSubmit: (value) => onSubmit(value),
  });

  const { handleChange, handleSubmit, values, errors } = formik;

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
          heading="Reset Password"
          para="Please check your email and enter a token you recieved"
          paraStyle={{ color: colors.grey }}
        />
        <form onSubmit={handleSubmit}>
          <AuthInputs
            placeholder="Enter token"
            onChange={handleChange}
            value={values?.token}
            error={errors?.token}
            name="token"
            type="number"
            startIcon={true}
            icon={<TokenIcon style={{ color: colors.grey }} />}
            label="Token:"
            // inputWidth="50%"
            style={{ my: { xs: 3 }, mx: { md: 8 } }}
          />
          <AuthInputs
            placeholder="Enter New Passwrod"
            onChange={handleChange}
            value={values?.password}
            error={errors?.password}
            name="password"
            type="password"
            lastIcon={true}
            startIcon={true}
            icon={<LockIcon style={{ color: colors.grey }} />}
            label="New Password:"
            // inputWidth="50%"
            style={{ my: { xs: 3 }, mx: { md: 8 } }}
          />
          <AuthInputs
            placeholder="Confirm Password"
            onChange={handleChange}
            value={values?.password_confirmation}
            error={errors?.password_confirmation}
            name="password_confirmation"
            type="password"
            lastIcon={true}
            startIcon={true}
            icon={<LockIcon style={{ color: colors.grey }} />}
            label="Confirm Password:"
            // inputWidth="50%"
            style={{ my: { xs: 3 }, mx: { md: 8 } }}
          />
          {isLoading ? (
            <Loader loading={isLoading} />
          ) : (
            <CommonButton
              title="Reset Password"
              style={{ my: 3, margin: "0 auto", backgroundColor: "red" }}
              backgroundColor={colors?.primary}
              mx={{ md: 8, xs: 0 }}
              type="submit"
            />
          )}
        </form>
      </Box>
    </UserLayout>
  );
};

export default ResetPassword;
