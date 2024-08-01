import React from "react";
import UserLayout from "../../layouts/main-layout/main_layout";

import { Box, Typography } from "@mui/material";
import colors from "../../assets/color/color";

const Pricing = () => {
  return (
    <UserLayout>
      <Box className="row" sx={{ mx: 10, alignItems: "center" }}>
        <Box
          className="col-md-4"
          sx={{
            border: `1px solid ${colors.grey}`,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Box sx={{ mx: 10 }}>
            <Typography
              sx={{
                backgroundColor: colors.primary,
                textAlign: "center",
                borderRadius: 10,
                py: 1,
              }}
            >
              Basic Package
            </Typography>
          </Box>
          One
        </Box>
        <Box className="col-md-4">Two</Box>
        <Box className="col-md-4">THree</Box>
      </Box>
    </UserLayout>
  );
};

export default Pricing;
