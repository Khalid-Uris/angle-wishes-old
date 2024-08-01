import React from "react";
import "./styles.css";
import UserLayout from "../../layouts/main-layout/main_layout";
import { Box, Typography } from "@mui/material";

const CareersPage = () => {
  return (
    <UserLayout>
      <Box py={4} px={{ sm: 6, xs: 1 }}>
        <Typography
          sx={{
            textAlign: { sm: "center", xs: "start" },
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          Angel Wishes Memory Keeper - Career Page
        </Typography>
        <Box py={4} sx={{ width: { md: "60%", xs: "100%" }, margin: "0 auto" }}>
          <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
            Join Our Team at Angel Wishes Memory Keeper
          </Typography>
          <Typography py={1} sx={{ color: "#000" }}>
            At Angel Wishes Memory Keeper, we are more than just a company; we
            are a community united by a shared mission to make the most
            significant moments count. <br /> <br /> Our work is dedicated to
            providing comfort, support, and essential services to individuals
            and families during their most challenging times. If you are
            passionate about making a difference and helping others in
            meaningful ways, we invite you to explore a career with us.
          </Typography>
        </Box>
        <Box py={0} sx={{ width: { md: "70%", xs: "100%" }, margin: "0 auto" }}>
          <Typography ml={{ md: 2 }} pb={1} sx={{ fontWeight: 500 }}>
            Why work with us?
          </Typography>
          <ul>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Purpose-Driven Work:</span>
                Every role at Angel Wishes Memory Keeper contributes to a grand,
                compassionate mission of helping individuals and families
                prepare for and manage end-of-life situations with dignity and
                peace.
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Supportive Environment:</span>
                We believe in supporting our staff as much as we help our
                clients. Here, you’ll find a culture of care, respect, and
                mutual support that extends throughout our entire organization.
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Growth Opportunities:</span>
                As we expand our services and reach, the company has numerous
                opportunities for professional growth and development. We
                encourage continual learning and advancement for all team
                members.
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Competitive Benefits:</span>
                We offer a comprehensive benefits package that includes health,
                dental, and vision insurance, a 401(k) plan, generous PTO, and
                flexible working arrangements to support work-life balance.
              </Typography>
            </li>
          </ul>
        </Box>
        <Box
          pt={2}
          py={0}
          sx={{ width: { md: "70%", xs: "100%" }, margin: "0 auto" }}
        >
          <Typography ml={{ md: 2 }} pb={1} sx={{ fontWeight: 600 }}>
            Open Positions
          </Typography>
          <ul>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>
                  Client Support Specialist:
                </span>
                Provide direct assistance and support to our clients, helping
                them navigate our services and ensuring they receive the care
                and information they need.
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Legal Consultant:</span>
                Specialize in estate planning, wills, and trusts to provide
                expert advice and peace of mind to our clients and their
                families.
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>IT Security Analyst:</span>
                Help safeguard our data and ensure that our technological
                infrastructure remains secure and reliable, respecting the
                confidentiality of our client's sensitive information
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Content Creator: </span>
                Craft meaningful stories and informational content to
                communicate our mission and services to a broader audience.
              </Typography>
            </li>
          </ul>
        </Box>
        <Box py={0} sx={{ width: { md: "70%", xs: "100%" }, margin: "0 auto" }}>
          <Typography pt={2} pb={1} sx={{ fontWeight: 600 }}>
            How to Apply
          </Typography>
          <Typography>
            Interested in joining Angel Wishes Memory Keeper? Submit your
            application and resume through our online portal. We look forward to
            learning more about how you can contribute to our mission!
          </Typography>
        </Box>
      </Box>
    </UserLayout>
  );
};

export default CareersPage;
