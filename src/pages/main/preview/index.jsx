import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";

import Header from "../../../components/header";

import back from "./../../../assets/images/back.png";
import Images from "../../../assets/images";
import colors from "../../../assets/color/color";

const DocPreview = () => {
  const location = useLocation();
  const navigation = useNavigate();

  const { state } = location;

  return (
    <Box>
      <Header />
      <Box p={2} sx={{ backgroundColor: "rgba(95, 95, 95, .7)" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          mb={2}
          px={4}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, display: "flex", gap: 1 }}
            >
              <Box
                sx={{
                  width: "25px",
                  height: "25px",
                  mt: -0.2,
                  cursor: "pointer",
                }}
                onClick={() => navigation(-1)}
              >
                <img
                  src={back}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
              Files
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Box sx={{ width: 19, height: 19 }}>
              <img
                src={Images.download}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  color: "red",
                  margin: 0,
                }}
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                borderColor: colors.primary,
                color: "#fff",
                backgroundColor: colors.primary,
                "&:hover": {
                  backgroundColor: "transparent",
                  borderColor: colors.primary,
                  color: colors.primary,
                  borderWidth: 2,
                },
              }}
            >
              Share File
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: "70%",
            margin: "0 auto",
            backgroundColor: "#fff",
            border: "1.5px solid #3078B6",
            borderRadius: 1,
          }}
        >
          <Box sx={{ width: "100%", height: "100%" }}>
            <img
              src={state?.image}
              style={{ width: "100%", height: "100%", objectFit: "fill" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DocPreview;
