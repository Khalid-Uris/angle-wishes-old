import React, { useRef, useState } from "react";
import { Box, Stack, Typography, Divider, Avatar } from "@mui/material";
import UserLayout from "../../../layouts/main-layout/main_layout";
import CommonHeading from "../../../components/other-component/common-heading";
import {
  AuthInputs,
  CheckBoxInput,
} from "../../../components/other-component/input";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

import image from "./../../../assets/images/image.png";
import camera from "./../../../assets/images/camera.png";
import colors from "../../../assets/color/color";
import CommonButton from "../../../components/other-component/common-button";
import OR from "../../../components/other-component/OR";
import ToastNotification from "../../../components/other-component/toastify";
import { toast } from "react-toastify";
import { authServices } from "../../../services/auth";

import Region from "@mui/icons-material/SouthAmerica";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import Person from "@mui/icons-material/Person";
import Phone from "@mui/icons-material/Phone";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

import google from "./../../../assets/images/google.png";
import apple from "./../../../assets/images/apple.png";
import Loader from "../../../components/other-component/loader";

const initialValue = {
  full_name: "",
  user_name: "",
  contact_no: "",
  country: "",
  email: "",
  password: "",
  password_confirmation: "",
  accept: 1,
};

const validationSchema = yup.object({
  full_name: yup.string().required("Please enter name"),
  user_name: yup.string().required("Please enter user name"),
  contact_no: yup.string().required("Please enter contact number"),
  country: yup.string().required("Please enter Country/Region"),
  email: yup
    .string()
    .required("Please enter email")
    .email("Invalid email format"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter password"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm password"),
  accept: yup.bool().oneOf([true], "You must agree to the terms"),
});

const SignUp = () => {
  const [isLoading, setIsloading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validationSchema,
    onSubmit: (value) => onSubmit(value),
  });

  const { handleChange, handleSubmit, values, errors } = formik;

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
        formik.setFieldValue("image", file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const onSubmit = async (values) => {
    setIsloading(true);
    try {
      const formData = new FormData();
      formData.append("full_name", values?.full_name);
      formData.append("user_name", values?.user_name);
      formData.append("image", values?.image);
      formData.append("contact_no", values?.contact_no);
      formData.append("country", values?.country);
      formData.append("email", values?.email);
      formData.append("password", values?.password);
      formData.append("password_confirmation", values?.password_confirmation);
      formData.append("accept", values?.accept);

      const response = await authServices.registration(formData);
      toast.success(response?.message);
      setOpen(true);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsloading(false);
      formik.resetForm();
    }
  };

  return (
    <UserLayout>
      <ToastNotification />
      <Stack
        className="col-md-8 col-sm-10 col-xs-12"
        sx={{
          borderRadius: { md: 3, sm: 0 },
          boxShadow: { sm: "0px 4px 10px rgba(0, 0, 0, 0.4)" },
          margin: "0 auto",
          my: { sm: "2rem" },
          //   px: { md: 2, xs: 2 },
          py: 2,
        }}
      >
        <Box
          className="row align-items-center justify-content-center text-align-center"
          sx={{ px: { md: 4, sm: 2, xs: 1 }, gap: { xs: 2, sm: 0 } }}
        >
          <Box className="col-sm-6 col-xs-12" sx={{}}>
            <CommonHeading
              heading="Sign Up"
              textAlign="start"
              para="Welcome Angel wishes!"
              isWidth={true}
              width="100%"
              paraStyle={{ mt: { xs: 2, sm: 1 } }}
            />
          </Box>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
            className="col-sm-4  col-xs-12 d-flex align-items-center justify-content-center"
          >
            <Avatar
              src={selectedImage || image}
              sx={{
                width: 100,
                height: 100,
                objectFit: "contain",
                border: `3px solid ${colors.primary}`,
              }}
            />
            <input
              type="file"
              ref={inputRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
              accept="image/*"
            />
            <Box
              sx={{
                // backgroundColor: "#F0EEEE",
                backgroundColor: { xs: colors.greyLight },
                position: "absolute",
                bottom: { sm: 6, xs: -0 },
                // right: { sm: 0 },
                // left: 0,
                borderRadius: 2,
                p: 0.3,
              }}
              onClick={handleClick}
            >
              <CameraAltOutlinedIcon
                sx={{
                  color: colors.primary,
                  fontSize: { sm: 24, xs: 20 },
                }}
              />
            </Box>
          </Box>
        </Box>
        <Stack>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                mt: 4,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                px: { md: 4, sm: 2, xs: 1 },
                "@media (min-width: 768px)": {
                  flexDirection: "row",
                },
              }}
            >
              <AuthInputs
                placeholder="Full Name"
                label="Full Name:"
                className="col-md-6 col-sm-12 col-xs-12"
                inputWidth="100%"
                icon={<Person style={{ color: colors.grey }} />}
                startIcon={true}
                type="text"
                name="full_name"
                onChange={handleChange}
                value={values?.full_name}
                error={errors?.full_name}
              />
              <AuthInputs
                placeholder="User Name"
                label="User Name:"
                className="col-md-6 col-sm-12 col-xs-12"
                inputWidth="100%"
                icon={<Person style={{ color: colors.grey }} />}
                startIcon={true}
                type="text"
                name="user_name"
                onChange={handleChange}
                value={values?.user_name}
                error={errors?.user_name}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                px: { md: 4, sm: 2, xs: 1 },
                "@media (min-width: 768px)": {
                  flexDirection: "row",
                },
              }}
            >
              <AuthInputs
                placeholder="Contact number"
                label="Contact no.:"
                className="col-md-6 col-sm-12 col-xs-12"
                inputWidth="100%"
                icon={<Phone style={{ color: colors.grey }} />}
                startIcon={true}
                type="text"
                name="contact_no"
                onChange={handleChange}
                value={values?.contact_no}
                error={errors?.contact_no}
              />
              <AuthInputs
                placeholder="Country/Region"
                label="Country/Region:"
                className="col-md-6 col-sm-12 col-xs-12"
                inputWidth="100%"
                icon={<Region style={{ color: colors.grey }} />}
                startIcon={true}
                type="text"
                name="country"
                onChange={handleChange}
                value={values?.country}
                error={errors?.country}
              />
            </Box>
            <Box sx={{ px: { md: 4, sm: 2, xs: 1 } }}>
              <AuthInputs
                placeholder="Email"
                label="Email:"
                startIcon={true}
                icon={<MailIcon style={{ color: colors.grey }} />}
                type="email"
                name="email"
                onChange={handleChange}
                value={values?.email}
                error={errors?.email}
              />
              <AuthInputs
                placeholder="Password"
                label="Password:"
                startIcon={true}
                lastIcon={true}
                icon={<LockIcon style={{ color: colors.grey }} />}
                type="password"
                name="password"
                onChange={handleChange}
                value={values?.password}
                error={errors?.password}
              />
              <AuthInputs
                placeholder="Confirm Password"
                label="Confirm Password:"
                startIcon={true}
                lastIcon={true}
                icon={<LockIcon style={{ color: colors.grey }} />}
                type="password"
                name="password_confirmation"
                onChange={handleChange}
                value={values?.password_confirmation}
                error={errors?.password_confirmation}
              />
              <CheckBoxInput
                style={{ mt: 1 }}
                label="I agree to all"
                title="Terms & Conditions"
                error={errors?.accept}
                value={values?.accept}
                name="accept"
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ px: { md: 4, sm: 2, xs: 1 } }}>
              {isLoading ? (
                <Loader loading={isLoading} />
              ) : (
                <CommonButton
                  title="Sign Up"
                  backgroundColor={colors?.primary}
                  type="submit"
                />
              )}
            </Box>
          </form>
        </Stack>
        <OR />
        <Box
          sx={{
            mt: 3,
            px: { md: 4, sm: 2, xs: 1 },
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            px: { md: 4, sm: 2, xs: 1 },
            "@media (min-width: 768px)": {
              flexDirection: "row",
            },
          }}
        >
          <CommonButton
            title="Sign in with Google"
            className="col-md-6 col-sm-12 col-sx-12"
            styleBtn={{ border: "1px solid #000", height: "2.5rem" }}
            isImgAllow={true}
            src={google}
            left={15}
          />
          <CommonButton
            title="Sign in with Apple"
            className="col-md-6 col-sm-12 col-sx-12"
            styleBtn={{ border: "1px solid #000", height: "2.5rem" }}
            isImgAllow={true}
            src={apple}
            left={15}
          />
        </Box>
        <Box sx={{ textAlign: "center", my: 2, mt: 4 }}>
          <Typography sx={{ color: colors?.grey }}>
            Already have an account?
            <span
              style={{ color: colors.blue, fontWeight: 500, cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              Sign In
            </span>
          </Typography>
        </Box>
      </Stack>
    </UserLayout>
  );
};

export default SignUp;
