import React from "react";
import colors from "../../assets/color/color";
import { Typography, Box } from "@mui/material";
import CommonButton from "../other-component/common-button";

const Content = ({
  bodyLeft,
  rowReversed = false,
  src,
  isAllow = false,
  imgWidth,
  imgHeight,
  style,
  lightHeading,
  boldHeading,
  isVideo = false,
  videoSrc,
  spanText,
  normalText,
}) => {
  const rowClass = rowReversed ? "flex-row-reverse" : "";
  return (
    <Box className={`row justify-content-center ${rowClass}`} sx={style}>
      <div className="col-md-6 col-sm-12">
        {isAllow ? (
          bodyLeft()
        ) : (
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "100%" }}
          >
            <div style={{}}>
              <Typography
                sx={{
                  fontSize: { xs: 25 },
                  fontWeight: 600,
                  color: colors.text,
                }}
              >
                {lightHeading}
              </Typography>
              <Typography sx={{ fontWeight: 600, py: 1 }}>
                {spanText}
              </Typography>
              <Typography sx={{ textAlign: "justify" }}>
                {normalText}
              </Typography>

              {/* <p
                style={{
                  fontWeight: 700,
                  cursor: "pointer",
                  color: colors.primary,
                }}
              >
                Learn more
              </p> */}
            </div>
          </div>
        )}
      </div>
      <Box
        className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center"
        sx={{ display: { xs: "none" } }}
      >
        <Box
          className="row"
          sx={{
            width: imgWidth ? imgWidth : "100%",
            height: imgHeight ? imgHeight : "100vh",
            objectFit: "contain",
          }}
        >
          {isVideo ? (
            <video
              controls // Add controls for the video player
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            >
              <source src={videoSrc} type="video/mp4" />
              {/* Provide the source of your video */}
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={src}
              alt=""
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Content;
