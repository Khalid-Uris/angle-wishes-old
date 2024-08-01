import React from "react";
import "./styles.css";
import UserLayout from "../../layouts/main-layout/main_layout";
import { Box, Typography } from "@mui/material";

const AccessibilityReport = () => {
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
          Angel Wishes Memory Keeper - Accessibility Report
        </Typography>
        <Typography
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Commitment to Accessibility
        </Typography>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Inclusivity at Angel Wishes Memory Keeper
          </Typography>
          <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
            At Angel Wishes Memory Keeper, we are dedicated to building a
            service everyone can use, including people with disabilities. Our
            commitment to accessibility reflects our core values of compassion
            and inclusion. We continuously strive to improve our website and
            services to ensure they are accessible to all users, regardless of
            technology or ability.
          </Typography>
        </Box>
        <Typography
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Accessibility Features
        </Typography>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Enhanced User Experience
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            Our website incorporates a variety of accessibility features
            designed to enhance the user experience for everyone:
          </Typography>
          <ul>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Text-to-Speech:</span>
                This feature allows users to listen to the content, making it
                easier for those with difficulty reading screens.
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>High Contrast Mode:</span>
                Users can switch to a high contrast mode that enhances text
                visibility and clarity for those with vision impairments.
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Alt Text for Images:</span>
                All images on our site are accompanied by alternative text
                descriptions, making information conveyed by images accessible
                to individuals using screen readers.
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Scalable Text:</span>: Users
                can adjust the text size through their browser settings to make
                it easier to read.
              </Typography>
            </li>
          </ul>
        </Box>

        <Typography
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Ongoing Efforts
        </Typography>

        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Continuous Improvement
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            We recognize that technology and needs evolve, and so does our
            approach to accessibility. We are committed to ongoing development
            and regular accessibility audits to identify and address potential
            accessibility issues. Our goal is to comply with WCAG 2.1 AA
            standards, ensuring that our services are accessible to the widest
            possible audience.
          </Typography>
        </Box>

        <Typography
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Feedback and Contact Information
        </Typography>

        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Your Voice Matters
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            Your feedback is crucial in helping us improve our accessibility
            standards. If you encounter any accessibility barriers or have
            suggestions on how we can make our services more accessible, please
            do not hesitate to contact us:
          </Typography>
          <ul>
            <li>
              <Typography>
                <span style={{ fontWeight: 600, paddingRight: "5px" }}>
                  Email:
                </span>
                accessibility@angelwishesmemorykeeper.com
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600, paddingRight: "5px" }}>
                  Phone:
                </span>
                (555) 123-4568
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600, paddingRight: "5px" }}>
                  Contact Form:
                </span>
                Contact Us
              </Typography>
            </li>
          </ul>
          <Typography sx={{ color: "#000", textAlign: "justify" }}>
            Please provide as much detail as possible in your feedback,
            including the nature of the accessibility issue and any suggestions
            for improvement
          </Typography>
        </Box>

        <Typography
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Accessibility Resources
        </Typography>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Learn More About Our Efforts
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            For more information on our accessibility policies and resources, or
            to view our annual accessibility reports, please visit the links
            below:
          </Typography>
          <ul>
            <li>
              <Typography>[Link to Detailed Accessibility Policy]</Typography>
            </li>
            <li>
              <Typography>[Link to Annual Accessibility Reports]</Typography>
            </li>
          </ul>
        </Box>

        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Let's Make a Difference Together
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            At Angel Wishes Memory Keeper, we believe in creating an environment
            that supports and values all users. We are continually working to
            enhance the accessibility of our website and services to ensure that
            everyone has equal access to the resources and support they need.
            Join us in our mission to make end-of-life planning inclusive and
            accessible to all.
            <br />
            <br />
            At Angel Wishes Memory Keeper, we believe in creating an environment
            that supports and values all users. We are continually working to
            enhance the accessibility of our website and services to ensure that
            everyone has equal access to the resources and support they need.
            Join us in our mission to make end-of-life planning inclusive and
            accessible to all.
          </Typography>
        </Box>
      </Box>
    </UserLayout>
  );
};

export default AccessibilityReport;
