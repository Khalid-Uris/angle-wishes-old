import React from "react";

import { Typography, Box } from "@mui/material";
import colors from "../../../assets/color/color";

const CommonHeading = ({
  heading,
  para,
  headStyle,
  paraStyle,
  backgroundColor,
  textAlign,
  isWidth = false,
  width
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: backgroundColor ? backgroundColor : colors.white,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width:isWidth ? width :{ md: "70%" },
          textAlign: textAlign ? { sm: textAlign, xs:"center" } : { md: "center" },
          // py: { md: 10, xs: 5 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 25 },
            fontWeight: 600,
            ...headStyle,
          }}
        >
          {heading}
        </Typography>
        <Typography sx={paraStyle}>{para}</Typography>
      </Box>
    </Box>
  );
};

export default CommonHeading;
