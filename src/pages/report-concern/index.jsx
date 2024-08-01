import React, { useRef } from "react";
import UserLayout from "../../layouts/main-layout/main_layout";
import { Avatar, Box, Typography } from "@mui/material";
import CommonButton from "../../components/other-component/common-button";
import { AuthInputs } from "../../components/other-component/input";
import Images from "../../assets/images";

import Person from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import colors from "../../assets/color/color";
import Phone from "@mui/icons-material/Phone";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";

const ConcernReport = () => {
  const inputRef = useRef(null);
  return (
    <UserLayout>
      <Box pt={4} sx={{ width: { md: "70%", xs: "100%" }, margin: "0 auto" }}>
        <Typography
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            fontSize: 22,
            fontWeight: 600,
          }}
          mb={4}
        >
          Angel Wishes Memory Keeper -Report a Concern Page
        </Typography>
        <Typography
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          We're Listening
        </Typography>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Your Feedback is Vital
          </Typography>
          <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
            At Angel Wishes Memory Keeper, we are committed to maintaining the
            highest standards of service and integrity. Your feedback is
            essential to us, as it helps us identify issues and improve our
            offerings. If you have any concerns or issues related to our
            services, website, or any interactions with our staff, we encourage
            you to report them. We take every report seriously and are dedicated
            to resolving issues promptly and effectively
          </Typography>
        </Box>
        <Typography
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          How to Report a Concern
        </Typography>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Step-by-Step Guidance
          </Typography>
          <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
            To ensure that your concern is addressed efficiently, please follow
            these steps:
          </Typography>
          <ol>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Identify the Issue:</span>
                Clearly describe the concern you have encountered. Whether it
                relates to our services, staff conduct, or our online platform,
                providing specific details will help us understand and address
                the issue more effectively
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Gather Information: </span>
                Gather any relevant information or documents supporting your
                report. This could include screenshots, correspondence, or other
                pertinent details.
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Submit Your Report:</span>
                Use the form below to submit your concern. Please fill in all
                required fields to help us process your report quickly.
              </Typography>
            </li>
          </ol>
        </Box>

        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Report Form
          </Typography>
          <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
            Please complete the form below to submit your concern. All
            information provided will be handled confidentially.
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
              />
              <AuthInputs
                placeholder="Email"
                label="Email Address:"
                className="col-md-6 col-sm-12 col-xs-12"
                inputWidth="100%"
                icon={<MailIcon style={{ color: colors.grey }} />}
                startIcon={true}
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
                startIcon={true}
              />
              {/* <Box sx={{ display: "flex", flex: 1, width: "100%" }}> */}
              <AuthInputs
                placeholder="Supporting Documents"
                label="Supporting Documents:"
                className="col-md-6 col-sm-12 col-xs-12"
                inputWidth="100%"
                icon={<DocumentScannerIcon style={{ color: colors.grey }} />}
                startIcon={true}
                // disabled={false}
                // type="file"
              />
              <input
                type="file"
                ref={inputRef}
                style={{ display: "none" }}
                accept="image/*"
              />
              {/* </Box> */}
            </Box>
            <Box
              sx={{
                mt: 1,
                display: "flex",
                flexDirection: "column",
                gap: 1,
                px: { md: 4, sm: 2, xs: 1 },
                // "@media (min-width: 768px)": {
                //   flexDirection: "row",
                // },
              }}
            >
              <Box>
                <label style={{}}>Message:</label>
              </Box>
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

        <Typography
          mt={4}
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          What Happens Next?
        </Typography>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Our Process
          </Typography>
          <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
            Once you submit your concern, here's what you can expect:
          </Typography>
          <ul>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Acknowledgment:</span> We will
                acknowledge receipt of your report within 24 hours.
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Investigation: </span>We will
                thoroughly investigate your concern, involving relevant
                departments and ensuring a fair process.
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Resolution:</span>
                We aim to resolve concerns swiftly. We will communicate with you
                throughout the process and notify you once a resolution has been
                reached.
              </Typography>
            </li>
          </ul>
        </Box>

        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Contact Us Directly
          </Typography>
          <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
            If you prefer to speak with someone directly or if your concern is
            urgent, please do not hesitate to contact us at:
          </Typography>
          <ul>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Phone:</span> (555) 123-4567
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Email: </span>:
                concerns@angelwishesmemorykeeper.com
              </Typography>
            </li>
          </ul>
        </Box>

        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Commitment to Transparency and Integrity
          </Typography>
          <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
            At Angel Wishes Memory Keeper, we are dedicated to transparency and
            integrity in all our operations. We appreciate your help maintaining
            the quality and safety of our services and your taking the time to
            report your concerns <br /> <br /> This Report a Concern page is
            designed to facilitate an easy and efficient way for users to
            communicate issues, reinforcing Angel Wishes Memory Keeper's
            commitment to transparency, integrity, and responsive customer
            service. Clear instructions and direct communication options ensure
            that users feel supported and valued throughout the process.
          </Typography>
        </Box>
      </Box>
    </UserLayout>
  );
};

export default ConcernReport;
