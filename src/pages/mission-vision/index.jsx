import React from "react";
import UserLayout from "../../layouts/main-layout/main_layout";
import { Box, Typography } from "@mui/material";

const MissionVision = () => {
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
          Angel Wishes Memory Keeper -- Mission and Vision
        </Typography>
        <Typography
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Our Mission
        </Typography>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Empowering End-of-Life Dignity
          </Typography>
          <Typography py={1} sx={{ color: "#000", textAlign: "justify" }}>
            At Angel Wishes Memory Keeper, we aim to provide individuals and
            families with the tools and support needed to capture, celebrate,
            and preserve life's most precious moments. We strive to ease the
            challenges of final wishes planning by offering comprehensive,
            compassionate services, including memory keeping, estate planning,
            and access to vital legal and healthcare resources. We aim to ensure
            that every individual can leave a legacy of love and care that
            endures beyond their lifetime.
          </Typography>
        </Box>
        <Typography
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Our Vision
        </Typography>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Creating a Legacy of Moments
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            We envision a world where no one has to face the end of life alone
            or unprepared. Our vision is to be the leading platform for final
            wishes planning and legacy preservation, serving communities across
            North America. We aspire to foster a culture that values and honors
            life’s journey by enabling individuals to seamlessly create, store,
            and share their most treasured memories and essential documents. Our
            ultimate goal is to make saying goodbye a little easier, ensuring
            peace of mind for our clients and their loved ones.
          </Typography>
        </Box>
        <Typography
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Our Values
        </Typography>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Compassion, Integrity, and Innovation
          </Typography>
          <ul>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Compassion:</span>
                At the heart of all we do is a profound empathy for those we
                serve. We approach every interaction with care and
                understanding, acknowledging the sensitive nature of our work
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Integrity:</span>
                We commit to the highest standards of professionalism and
                ethical conduct. Trust is the foundation of our relationships
                with clients, partners, and each other.
              </Typography>
            </li>
            <li>
              <Typography>
                <span style={{ fontWeight: 600 }}>Innovation:</span>
                We continuously seek innovative ways to improve our services and
                clients' experiences. From secure digital storage solutions to
                user-friendly interfaces, we embrace technology to meet the
                needs of today’s families
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
          Our Commitment
        </Typography>

        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Ensuring Security and Confidentiality
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            We understand the importance of privacy and security for our
            clients. Angel Wishes Memory Keeper is committed to protecting the
            information you entrust to us. We employ state-of-the-art security
            measures and adhere to strict privacy policies to safeguard your
            personal and sensitive data, ensuring that your memories and
            documents are always secure and accessible.
          </Typography>
        </Box>

        <Typography
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          How We Make a Difference
        </Typography>

        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Supporting You Every Step of the Way
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            Angel Wishes Memory Keeper is more than just a service; it’s a
            partner in planning for life’s final chapters. We provide support
            not only for individuals planning for their own future but also for
            families and caregivers navigating the complexities of end-of-life
            care. Our comprehensive resources and dedicated team ensure that you
            have the support you need to make informed decisions and create a
            lasting legacy.
          </Typography>
        </Box>

        <Typography
          sx={{
            textAlign: { sm: "justify", xs: "start" },
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Join Us
        </Typography>
        <Box>
          <Typography py={2} sx={{ fontSize: 18, fontWeight: 600 }}>
            Build a Legacy with Angel Wishes Memory Keeper
          </Typography>
          <Typography pb={1} sx={{ color: "#000", textAlign: "justify" }}>
            Are you ready to take control of your end-of-life planning? Do you
            want to ensure your life’s stories and achievements are preserved
            for generations to come? Reach out to us at Angel Wishes Memory
            Keeper, and let us help you create a legacy filled with dignity and
            love.
          </Typography>
        </Box>
      </Box>
    </UserLayout>
  );
};

export default MissionVision;
