import React from "react";
import UserLayout from "../../layouts/main-layout/main_layout";
import { Container } from "reactstrap";
import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const AboutUs = () => {
  return (
    <UserLayout>
      <Container maxWidth="sm">
        <Typography variant="h5" gutterBottom mt={5}>
          Our Brand Story{" "}
          <Box component={"span"} sx={{ display: "inline" }}>
            (with image or video)
          </Box>
        </Typography>
        <Typography variant="body1" gutterBottom mt={3}>
          Angel Wishes Memory Keeper was started when our founder, Melanie, was
          at home sick and meditated about her soul’s purpose. It came to her in
          two recurring dreams: to build a place to keep important documents and
          life’s treasures and stories. An online legacy keeper to hold life’s
          best moments for all. It was at that moment she realized how difficult
          it was to find a single place, person, or service that provided
          everything required for those entering end-of-life and their loved
          ones. She had to go to multiple locations to address these needs, from
          a family photo download service to a memory maker and video service to
          an end-of-life consultancy. And that’s when it hit her: there was
          nowhere to go to save and share memories and videos; nowhere to find
          out how to write a will; nowhere to get power of attorney. At least,
          not all in one place.
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          mt={3}
          sx={{ fontStyle: "italic" }}
        >
          “At that moment, I understood that creating a portal for caregivers,
          families, and friends was up to me. Friends lost family members
          overnight without any will or trust paperwork. I saw someone denied
          information about her mother’s medical condition because they did not
          have the proper paperwork once her mom had been transferred to another
          hospice. That’s why our goal is to help people come together around
          their loved ones, support them, and care for them the way they deserve
          at the end of their lives.” - Melanie M., Founder, Angel Wishes Memory
          Keeper
        </Typography>
        <Typography variant="body1" gutterBottom mt={3}>
          We are a caring team that makes life’s most important moments count
          through pictures, videos, stories, and comprehensive end-of-life
          services. We want to give people with terminal illnesses a place to
          create and store memories, be at peace, and pull together their
          greatest memories. Finally, we help integrate life’s best moments
          along with estate plans, power of attorney, and financial and health
          considerations for those entering end-of-life. Angel Wishes Memory
          Keeper aims to help families gather all their wishes and estate
          planning into an actionable plan.
        </Typography>
        <Typography variant="h5" gutterBottom mt={3}>
          Who We Serve (with image or video)
        </Typography>
        <Typography variant="body1" gutterBottom mt={3}>
          Angel Wishes Memory Keeper was created to serve a variety of people.
          Whether you are an individual entering end-of-life, a family member of
          an individual entering end-of-life, a caregiver, or otherwise, our
          services are for you. Whether you are in New York, California, or
          anywhere in between, if you have a loved one nearing end-of-life and
          do not know where to turn, turn to Angel Wishes Memory Keeper.
        </Typography>
        <Typography variant="body1" gutterBottom mt={3}>
          Our dedicated staff is available 24/7 to ensure you have access to
          photos, videos, memories, and any other information you may need as
          you plan for your loved one’s end-of-life needs. As members of the
          community just like yourself, we understand what it is like to lose a
          loved one, and we want to make the process of managing that loss as
          compassionate and understanding as possible.
        </Typography>
        <Typography variant="h5" gutterBottom mt={3}>
          Who We Work With (with image or video)
        </Typography>
        <Typography variant="body1" gutterBottom mt={3}>
          Angel Wishes Memory Keeper has partnerships with vendors across the
          country. We do the hard work of vetting professionals in our space so
          that you don’t have to. Whether you need:
        </Typography>
        <Typography variant="body1" gutterBottom mt={3}>
          <List sx={{ listStyleType: "disc", pl: 5 }} disablePadding>
            <ListItem sx={{ display: "list-item" }}>Power of Attorney</ListItem>
            <ListItem sx={{ display: "list-item" }}>A Will</ListItem>
            <ListItem sx={{ display: "list-item" }}>A Living Trust</ListItem>
            <ListItem sx={{ display: "list-item" }}>
              End-of-Life Services
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              End-of-Life Consulting
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Family Photo Storage
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Family Video Storage
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              Image and Video Storage
            </ListItem>
          </List>
        </Typography>
        <Typography variant="body1" gutterBottom mt={3}>
          Angel Wishes Memory Keeper has partnered with individuals and
          organizations across North America to ensure that someone is there to
          help you no matter where you are. Our vast directory of medical
          professionals, lawyers, accountants, and caregivers spans from coast
          to coast.
        </Typography>
        <Typography variant="h5" gutterBottom mt={3}>
          How We Do It (with image or video)
        </Typography>
        <Typography variant="body1" gutterBottom mt={3}>
          Angel Wishes Memory Keeper is built on a custom AWS secure
          configuration with 400 terabytes of dedicated storage (that’s a lot!).
          No matter what, your precious memories are safe in our Angel’s hands.
          When you need to access a sensitive document, you can rest assured
          you’ll gain quick access to it with 99.98% uptime.
        </Typography>
        <Typography variant="body1" gutterBottom mt={3}>
          Angel Wishes Memory Keeper ensures full confidentiality with a robust
          network security infrastructure, a comprehensive privacy policy, and
          full HIPAA compliance. We know how important these documents are to
          you, and we do not take this responsibility lightly.
        </Typography>
        <Typography variant="h5" gutterBottom mt={3}>
          What’s Next? (with image or video)
        </Typography>
        <Typography variant="body1" gutterBottom mt={3}>
          Are you an individual, family member, or caregiver looking for
          resources to help you manage someone’s end-of-life needs? If so,
          that’s why we exist. Simply use the button below to reach out to us,
          fill out the form, and we will get back to you within 24 hours. Learn
          more about what makes Angel Wishes Memory Keeper so valuable to
          families and their loved ones across America.
        </Typography>
        <Typography mt={8}></Typography>
      </Container>
    </UserLayout>
  );
};

export default AboutUs;
