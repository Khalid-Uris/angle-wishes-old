import React from "react";
import "./styles.css";
import UserLayout from "../../layouts/main-layout/main_layout";
import { Box, Typography } from "@mui/material";
import { AuthInputs } from "../../components/other-component/input";
import Person from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import colors from "../../assets/color/color";
import Phone from "@mui/icons-material/Phone";
import CommonButton from "../../components/other-component/common-button";
import Images from "../../assets/images";

const ContactUs = () => {
  return (
    <UserLayout>
      <Box py={4} px={{ sm: 6, xs: 2 }}>
        <Box pt={4} sx={{ width: { md: "70%", xs: "100%" }, margin: "0 auto" }}>
          <Typography
            sx={{
              textAlign: { sm: "justify", xs: "start" },
              fontSize: 22,
              fontWeight: 600,
            }}
            mb={4}
          >
            Angel Wishes Memory Keeper - Contact Us
          </Typography>
          <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
            Get in Touch with Angel Wishes Memory Keeper
          </Typography>
          <Box>
            <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
              We're Here to Help
            </Typography>
            <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
              We at Angel Wishes Memory Keeper value your questions and
              concerns. Whether you need more information about our services,
              assistance with your account, or guidance through our platform,
              our dedicated team is ready to help. Reach out to us, and let's
              make your experience as fulfilling and comforting as possible.
            </Typography>
          </Box>
          <Box>
            <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
              Contact Information
            </Typography>
            <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
              Feel free to call us at (949) 771-6361. Our team is available 8am-
              4pm PST Monday -Friday to ensure you receive the help you need.{" "}
              <br /> <br />
              Send us an email at support@angel-wishes.com. We will respond to
              all inquiries within 24 hours.
              <br /> <br /> We welcome you to visit our office for a personal
              consultation. Please call ahead to schedule an appointment.
            </Typography>
          </Box>

          <Box>
            <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
              Send Us a Message
            </Typography>
            <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
              Please fill out the form below with your details and query. We
              ensure that every message is read and responded to promptly.
              Here’s how you can get your questions answered or provide us with
              feedback:
            </Typography>
            <form
              style={{
                border: "1px solid grey",
                padding: "5px",
                borderRadius: "10px",
              }}
            >
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
                  placeholder="User Name"
                  label="User Name:"
                  className="col-md-6 col-sm-12 col-xs-12"
                  inputWidth="100%"
                  icon={<Person style={{ color: colors.grey }} />}
                  startIcon={true}
                  type="text"
                  // name="user_name"
                  // onChange={handleChange}
                  // value={values?.user_name}
                  // error={errors?.user_name}
                />
                <AuthInputs
                  placeholder="Email"
                  label="Email Address:"
                  className="col-md-6 col-sm-12 col-xs-12"
                  inputWidth="100%"
                  icon={<MailIcon style={{ color: colors.grey }} />}
                  startIcon={true}
                  // type="text"
                  // name="full_name"
                  // onChange={handleChange}
                  // value={values?.full_name}
                  // error={errors?.full_name}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
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
                  style={{ mt: { md: -6, sm: 0, xs: 0 } }}
                  startIcon={true}
                  //   type="text"
                  //   name="contact_no"
                  //   onChange={handleChange}
                  //   value={values?.contact_no}
                  //   error={errors?.contact_no}
                />
                {/* <AuthInputs
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
                /> */}
                <Box sx={{ pt: 0 }}>
                  <label style={{ paddingBottom: "5px" }}>Message:</label>
                  <textarea
                    placeholder="Enter ypur message"
                    style={{
                      border: "1px solid #CECECE",
                      borderRadius: "10px",
                      paddingLeft: "10px",
                      paddingTop: "5px",
                    }}
                    rows={4}
                    cols={47}
                  />
                </Box>
              </Box>
              <Box
                mt={5}
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <CommonButton
                  title="Submit"
                  backgroundColor={colors?.primary}
                  type="submit"
                  mdWidth={"30%"}
                />
              </Box>
            </form>
          </Box>

          <Box>
            <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
              Connect with Us on Social Media
            </Typography>
            <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
              Stay updated with the latest news and updates from Angel Wishes
              Memory Keeper by following us on our social media platforms. Join
              our community for insights, stories, and more:
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                }}
              >
                <Box sx={{ width: 26, height: 26 }}>
                  <img
                    src={Images.fb}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <Typography
                  pt={0.8}
                  sx={{ fontSize: 18, fontWeight: 400, margin: 0 }}
                >
                  Facebook
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                }}
              >
                <Box sx={{ width: 26, height: 26 }}>
                  <img
                    src={Images.twitter}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <Typography
                  pt={0.8}
                  sx={{ fontSize: 18, fontWeight: 400, margin: 0 }}
                >
                  Twitter
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                }}
              >
                <Box sx={{ width: 26, height: 26 }}>
                  <img
                    src={Images.insta}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <Typography
                  pt={0.8}
                  sx={{ fontSize: 18, fontWeight: 400, margin: 0 }}
                >
                  Instagram
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                }}
              >
                <Box sx={{ width: 26, height: 26 }}>
                  <img
                    src={Images.linkedIn}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <Typography
                  pt={0.8}
                  sx={{ fontSize: 18, fontWeight: 400, margin: 0 }}
                >
                  LinkedIn
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography mt={4} py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
              We Look Forward to Hearing from You
            </Typography>
            <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
              Every message is an opportunity for us to serve you better.
              Contact us today, and let us help you preserve your memories and
              secure your legacy. Whether you’re planning for the future or need
              immediate assistance, Angel Wishes Memory Keeper is here for you
              every step of the way.
            </Typography>
          </Box>
        </Box>
      </Box>
    </UserLayout>
  );
};

export default ContactUs;
