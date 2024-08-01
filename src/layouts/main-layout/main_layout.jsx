// UserLayout.js
import React from "react";
import { Box, Typography, Stack } from "@mui/material";

import Header from "../../components/header";
import Fotter from "../../components/fotter";

const UserLayout = ({ children }) => {
  return (
    <Stack sx={{ overflowX: "hidden", width: "100%" }}>
      <Box>
        <Header />
      </Box>
      <Stack flex={1} sx={{ display: "flex" }}>
        {children}
      </Stack>
      <Box>
        <Fotter />
      </Box>
    </Stack>
  );
};

export default UserLayout;
