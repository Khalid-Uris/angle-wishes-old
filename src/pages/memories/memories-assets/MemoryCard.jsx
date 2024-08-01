import React, { useEffect } from "react";
import "./styles.css";
import { Avatar, Box, Typography } from "@mui/material";
import colors from "../../../assets/color/color";
import { useDispatch, useSelector } from "react-redux";
import { getUserMemories } from "../../../redux-store/features/dashboard";

const MemoryCard = ({ memory }) => {
  // const { type, media, name, logo } = memory;
  const { file_type, file, file_name } = memory;

  const { user } = useSelector((state) => state.auth);
  // console.log(user.image);

  return (
    <Box sx={{ width: "570px" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          sx={{
            border: `1.5px solid ${colors.primary}`,
            borderRadius: 50,
            padding: 0.3,
          }}
        >
          <Box sx={{ width: 60, height: 60 }}>
            <img
              src={user.image}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: 50,
              }}
              alt={`${name}'s image`}
            />
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: 22,
              fontWeight: 600,
              color: "#000",
            }}
          >
            {file_name}
          </Typography>
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 400,
              color: "#838383",
              mt: -0.9,
            }}
          >
            Director
          </Typography>
        </Box>
      </Box>
      <Box sx={{ pl: 2, my: 2, width: "80%" }}>
        <Typography
          sx={{
            color: "#000",
            fontSize: 18,
            lineHeight: 1.3,
            textAlign: "justify",
          }}
        >
          Learn about the most loved angel wishes memories Learn about the most.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {file_type === "png" ? (
          <img
            src={file}
            style={{ width: "100%", height: "100%", objectFit: "fill" }}
            alt={`${file_name}'s memory`}
          />
        ) : file_type === "mp4" ? (
          <video controls style={{ maxWidth: "100%", maxHeight: "100%" }}>
            <source src={file} type="video/mp4" />
          </video>
        ) : null}
      </Box>
    </Box>
  );
};

export default MemoryCard;
