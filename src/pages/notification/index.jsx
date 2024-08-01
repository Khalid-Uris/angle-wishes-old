import React from "react";
import { Box, Typography } from "@mui/material";

import UserLayout from "../../layouts/main-layout/main_layout";
import Accordian from "../../components/other-component/accordian";

import back from "./../../assets/images/back.png";

const Notification = () => {
  const accordionItems = [
    {
      name: "Alex Coasta",
      content: "Content for Item 1",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      name: "Alex Coasta",
      content: "Content for Item 2",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      name: "Alex Coasta",
      content: "Content for Item 3",
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ];
  return (
    <UserLayout>
      <Box sx={{ mx: 8, mt: 2 }}>
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, display: "flex", gap: 2 }}
          >
            <Box
              sx={{
                width: "25px",
                height: "25px",
                mt: -0.2,
                cursor: "pointer",
              }}
              onClick={() => navigation("/dashboard")}
            >
              <img
                src={back}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>
            Files
          </Typography>
        </Box>
        <Accordian item={accordionItems} />
      </Box>
    </UserLayout>
  );
};

export default Notification;
