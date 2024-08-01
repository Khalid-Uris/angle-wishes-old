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
import Loader from "../../components/other-component/loader";
import CommonHeading from "../../components/other-component/common-heading";

import LockIcon from "@mui/icons-material/Lock";
import MailIcon from "@mui/icons-material/Mail";

import family from "./../../assets/images/family.jpg";
import consult from "./../../assets/images/consult.jpg";
import memoryKeeper from "./../../assets/images/memoryKeeper.jpg";
import fimaly from "./../../assets/images/fimaly.mp4";
import bgImage from "./../../assets/images/bgImage.png";
import bgImageGolden from "./../../assets/images/bgImageGolden.png";

import { userLogin } from "../../redux-store/features/auth";
import { useDispatch } from "react-redux";

const initialValue = {
  email: "",
  password: "",
  remember_me: false,
};
const validationSchema = yup.object({
  email: yup
    .string()
    .required("Please enter email")
    .email("Invalid email format"),
  password: yup.string().required("Please enter correct password"),
  // remember_me: yup.bool().oneOf([true], "Select remember_me"),
});

const Home = () => {
  return (
    <UserLayout>
      <Box sx={{}}>
        {/* <Box sx={{ px: { md: 10, sm: 2, xs: 0 }, pt: { md: 5, sm: 3, xs: 0 } }}> */}
        <Content
          bodyLeft={RenderBody}
          // src={angel}
          src={bgImageGolden}
          isAllow={true}
          imgHeight={"100%"}
          imgWidth={"100%"}
          style={{ backgroundColor: "#d3ecf1", px: { sm: 4 }, pt: 2, pb: 4 }}
        />
        {/* <RenderBody /> */}
        <div style={{ padding: 20 }}>
          <Content
            src={family}
            imgWidth="100%"
            imgHeight="100%"
            style={{ marginTop: "5rem", backgroundColor: "#FBFBFB" }}
            rowReversed={true}
            lightHeading="Save Your Memories"
            spanText="We Allow Families to Cherish Every Moment"
            normalText="Every moment in life counts. At Angel Wishes Memory Keeper, we provide a secure and loving
            space where you and your loved ones can preserve these precious memories. Whether it's
            photos, videos, or written stories, our platform ensures that your life's highlights are safely
            stored and easily accessible. Start today and keep your cherished memories alive for
            generations to come. Experience the comfort of knowing that your most significant moments are
            preserved with care and respect."
          />
        </div>
        <div style={{ padding: 20 }}>
          <Content
            // src={memories}
            videoSrc={fimaly}
            isVideo={true}
            imgWidth="100%"
            imgHeight="100%"
            style={{ marginTop: "5rem" }}
            lightHeading="Secure your"
            spanText="We Provide a Safe and Secure Place for Your Most Important Documents"
            normalText="Your privacy and the security of your data are our top priorities. At Angel Wishes Memory
            Keeper, we protect your information with advanced encryption and robust security protocols.
            Our platform operates on a custom AWS secure configuration, providing 400 terabytes of
            dedicated, safe storage. With 99.98% uptime, you can trust that your sensitive documents, from
            wills to power of attorney forms, are protected around the clock. Secure your legacy with
            confidence, knowing your data is safe."
          />
        </div>
        <div style={{ padding: 20 }}>
          <Content
            src={consult}
            imgWidth="100%"
            imgHeight="100%"
            style={{ marginTop: "5rem", backgroundColor: "#FBFBFB" }}
            rowReversed={true}
            lightHeading="Get Consulting Assistance"
            spanText="Expert Guidance When You Need It Most"
            normalText="Navigating final wishes planning can be complex and emotional. That's why Angel Wishes
            Memory Keeper offers compassionate and professional final wishes consulting. Our experts are
            here to guide you through every step of the process, from estate planning to creating a living
            trust. We ensure you have all the resources and support needed to make informed decisions
            that honor your wishes and provide peace of mind for your family. Reach out today to learn how
            our consulting services can help simplify this critical journey"
          />
        </div>

        <Box sx={{ px: 4, py: 2 }}>
          <Typography
            sx={{
              color: colors.primary,
              fontWeight: 600,
              fontSize: 24,
            }}
          >
            Begin Your Journey with Angel Wishes Memory Keeper
          </Typography>

          <Box mt={1} sx={{ display: "flex", alignItems: "center" }}>
            <Typography textAlign="justify">
              Are you ready to secure your memories, safeguard your data, and
              prepare your final wishes with expert guidance? Click below to
              explore our services and discover how Angel Wishes Memory Keeper
              can support you and your family through every step of the journey.
              <Typography
                sx={{
                  fontWeight: 600,
                  cursor: "pointer",
                  color: colors.primary,
                  // border: `1px solid ${colors.primary}`,
                  display: "inline",
                  pl: 1,
                }}
              >
                Start Preserving Your Legacy
              </Typography>
            </Typography>
          </Box>
          <Box mt={2} textAlign="justify">
            <Typography>
              This home page content highlights Angel Wishes Memory Keeper's
              core services, inviting visitors to engage with the platform
              through a clear, concise, and reassuring tone. Each section is
              designed to address specific needs and reassure users of the
              services' secure, caring, and professional nature.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 4 }}>
          <CommonHeading
            heading="Terms And Conditions"
            para="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum ."
            headStyle={{ color: colors.primary, pt: 2, pl: { xs: 1.5 } }}
            backgroundColor="#FBFBFB"
            paraStyle={{ py: 3, pl: { xs: 1.5 } }}
          />
        </Box>
      </Box>
    </UserLayout>
  );
};

export default Home;

export const RenderBody = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (value) => {
    setIsLoading(true);
    try {
      const response = await dispatch(
        userLogin({
          email: value?.email,
          password: value?.password,
          remember_me: value?.remember_me,
        })
      );
      navigate("/dashboard");
      return response;
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

  const { handleChange, handleSubmit, errors, values } = formik;
  return (
    <Box
      className="p-4"
      // sx={{
      //   backgroundImage: `url(${backgroundImage})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* <Box sx={{ width: { sm: "50%", xs: "100%" } }}> */}
      <Box>
        <div style={{}}>
          <Box sx={{ color: colors.text, mb: 1 }}>
            <Typography
              sx={{
                fontSize: { xs: 25 },
                fontWeight: 600,
                color: colors.primary,
              }}
            >
              Welcome to
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 35 },
                fontWeight: 600,
                color: colors.primary,
              }}
            >
              Angel Wishes
            </Typography>
          </Box>
          <div style={{}}>
            <form onSubmit={handleSubmit}>
              {/* <form> */}
              <AuthInputs
                label="Email:"
                value={values?.email}
                name="email"
                type="email"
                onChange={handleChange}
                error={errors?.email}
                placeholder="Enter your email"
                startIcon={true}
                icon={<MailIcon style={{ color: colors.primary }} />}
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
                icon={<LockIcon style={{ color: colors.primary }} />}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <CheckBoxInput
                    label="Remember me"
                    error={errors?.remember_me}
                    name="remember_me"
                    value={values?.remember_me}
                    onChange={handleChange}
                  />
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
                    title="Signin"
                    type="submit"
                    backgroundColor={colors.primary}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      letterSpacing: "5px",
                    }}
                    styleBtn={{
                      fontWeight: 600,
                      color: colors.white,
                    }}
                    // onClick={handleSignIn}
                    textColor="#fff"
                  />
                )}
              </div>
            </form>
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <p>
            By clicking Continue, you agree to LinkedIn’s{" "}
            <b style={{ cursor: "pointer" }}> User Agreement, Privacy Policy</b>
            , and <b style={{ cursor: "pointer" }}>Cookie Policy</b>.
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
      </Box>
    </Box>
  );
};
