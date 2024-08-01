import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";

import colors from "../../../assets/color/color";

import folder from "./../../../assets/images/folder.png";

const CommonButton = ({
  title,
  onClick,
  type,
  backgroundColor,
  hoverBackgroundColor,
  style,
  styleBtn,
  userIcon = false,
  title2,
  mdWidth,
  mx,
  anotherText,
  anotherTextStyle,
  className,
  isImgAllow = false,
  src,
  folderImg,
  isImage = false,
  icon,
  textColor,
  disabled,
}) => {
  return (
    <Box
      sx={{
        ...style,
        backgroundColor: backgroundColor,
        borderRadius: 2,
        minHeight: "6vh",
        color: colors.white,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: mdWidth,
        mx: mx,
        "&:hover": {
          backgroundColor: hoverBackgroundColor,
          transition: " 0.3s",
        },
      }}
      className={`${className}`}
    >
      {userIcon && <Avatar sx={{ bgcolor: "#319A00", ml: 2 }}>A</Avatar>}

      {isImgAllow && (
        <Box
          sx={{
            width: "20px",
            height: "20px",
            position: "absolute",
            left: 15,
            top: "40%",
            transform: "translateY(-50%)",
          }}
        >
          <img src={src} alt="" style={{ width: "100%", height: "100%" }} />
        </Box>
      )}

      {/* <Button */}
      <button
        style={{
          margin: 0,
          backgroundColor: "transparent",
          border: "none",
          ...styleBtn,
          display: "flex",
          flexDirection: isImage ? "row" : " column",
          flex: 1,
          alignItems: "center",
          justifyContent: userIcon ? "flex-start" : "center",
          gap: 10,
          cursor: "pointer",
          width: "100%",
        }}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {isImage && (
          <Box
            sx={{
              width: "20px",
              height: "30px",
              display: {
                xs: "none",
                sm: "flex",
                md: isImage ? "flex" : "none",
              },
              alignItems: "center",
            }}
          >
            {icon}
          </Box>
        )}
        <Typography
          sx={{
            margin: 0,
            fontWeight: 500,
            color: textColor ? textColor : "#000",
            letterSpacing: 1,
            "&:hover": {},
          }}
        >
          {title}
          <span style={anotherTextStyle} onClick={onClick}>
            {anotherText}
          </span>
        </Typography>

        {userIcon && (
          <Typography sx={{ margin: 0, color: colors.greyText, mt: -1 }}>
            {title2}
          </Typography>
        )}
        {/* </Button> */}
      </button>
    </Box>
  );
};

export default CommonButton;
