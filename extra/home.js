import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { Typography, Box } from "@mui/material";
import UserLayout from "../../layouts/main-layout/main_layout";
import Content from "../../components/content";
import colors from "../../assets/color/color";
import {
  AuthInputs,
  CheckBoxInput,
} from "../../components/other-component/input";
import CommonButton from "../../components/other-component/common-button";

import LockIcon from "@mui/icons-material/Lock";
import MailIcon from "@mui/icons-material/Mail";

import angel from "./../../assets/images/angel.png";
import memories from "./../../assets/images/memories.png";
import CommonHeading from "../../components/other-component/common-heading";
import Loader from "../../components/other-component/loader";

const initialValue = {
  email: "",
  password: "",
};
const validationSchema = yup.object({
  email: yup
    .string()
    .required("Please enter email")
    .email("Invalid email format"),
  password: yup.string().required("Please enter correct password"),
});

const Home = () => {
  return (
    <UserLayout>
      <Content bodyLeft={renderBody} src={angel} isAllow={true} imgHeight={""} />
      <div style={{ padding: 20 }}>
        <Content
          src={memories}
          imgWidth="100%"
          imgHeight="100%"
          style={{ marginTop: "5rem", backgroundColor: "#FBFBFB" }}
          rowReversed={true}
          lightHeading="Save your"
          boldHeading="Memories"
        />
      </div>
      <div style={{ padding: 20 }}>
        <Content
          src={memories}
          imgWidth="100%"
          imgHeight="100%"
          style={{ marginTop: "5rem" }}
          lightHeading="Secure your"
          boldHeading="Data"
        />
      </div>
      <div style={{ margintTop: 10 }}>
        <CommonHeading
          heading="Terms & Conditions"
          para="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum ."
          headStyle={{ color: colors.primary, pt: 2, pl: { xs: 1.5 } }}
          backgroundColor="#FBFBFB"
          paraStyle={{ py: 3, pl: { xs: 1.5 } }}
        />
      </div>
    </UserLayout>
  );
};

export default Home;

const renderBody = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (value) => {
    setIsLoading(true);
    try {
      console.log(value);
      await onSubmit({ email: "dummy@example.com", password: "password123" });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      formik.resetForm();
    }
  };
  
  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validationSchema,
    onSubmit: (value) => onSubmit(value),
  });
  
  const handleSignIn = () => {
    navigate("/dashboard");
  };

  const { handleChange, handleSubmit, errors, values } = formik;
  return (
    <div className="p-4">
      <div style={{}}>
        <div style={{ color: colors.text }}>
          <Typography sx={{ fontSize: { xs: 25 }, fontWeight: 600 }}>
            Welcome to
          </Typography>
          <Typography sx={{ fontSize: { xs: 35 }, fontWeight: 600 }}>
            Angel Wishes
          </Typography>
        </div>
        <div style={{}}>
          <form onSubmit={handleSubmit}>
          {/* <form> */}
            <AuthInputs
              label="Email:"
              value={values?.email}
              name="email"
              type="text"
              onChange={handleChange}
              error={errors?.email}
              placeholder="Enter your email"
              startIcon={true}
              icon={<MailIcon style={{ color: colors.grey }} />}
            />
            <AuthInputs
              label="Password:"
              placeholder="Enter your password"
              value={values?.password}
              name="password"
              onChange={handleChange}
              error={errors?.password}
              type="password"
              startIcon={true}
              lastIcon={true}
              icon={<LockIcon style={{ color: colors.grey }} />}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <CheckBoxInput label="Remember me" />
              </Box>
              <div
                style={{
                  color: colors.blue,
                  fontSize: "12px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
                onClick={() => navigate("/forget_password")}
              >
                <p>Forget Password</p>
              </div>
            </Box>
            <div>
              {isLoading ? (
                <Loader loading={isLoading} />
              ) : (
                <CommonButton
                  title="SignIn"
                  type="submit"
                  backgroundColor={colors.primary}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  styleBtn={{
                    fontWeight: 600,
                    color: colors.white,
                  }}
                  onClick={handleSignIn}
                />
              )}
            </div>
          </form>
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <p>
          By clicking Continue, you agree to LinkedIn’s{" "}
          <b style={{ cursor: "pointer" }}> User Agreement, Privacy Policy</b>,
          and <b style={{ cursor: "pointer" }}>Cookie Policy</b>.
        </p>

        <CommonButton
          title="Continue as Alex"
          title2="alex@gmail.com"
          userIcon={true}
          style={{ border: "1px solid #000" }}
        />
        <CommonButton
          title="New to Angel Wishes? join now"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #000",
            marginTop: 3,
          }}
          styleBtn={{
            fontWeight: 600,
          }}
          onClick={() => navigate("sign_up")}
        />
      </div>
    </div>
  );
};
