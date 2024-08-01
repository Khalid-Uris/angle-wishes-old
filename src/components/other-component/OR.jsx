import React from "react";
import { Box, Stack, Typography, Divider } from "@mui/material";

const OR = () => {
  return (
    <Box mt={4} px={4} display="flex" alignItems="center" gap={1}>
      <Divider
        flexItem
        sx={{ height: 0.5, width: "45%", bgcolor: "#00000050" }}
      />

      <Typography variant="body2" sx={{ color: "#717171", mt:-1 }}>
        OR
      </Typography>

      <Divider
        flexItem
        sx={{ height: 0.5, width: "45%", bgcolor: "#00000050" }}
      />
    </Box>
  );
};

export default OR;
