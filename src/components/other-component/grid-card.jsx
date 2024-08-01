import React from "react";
import { Box, Avatar, Typography, Card, CardMedia } from "@mui/material";

import rectangle from "./../../assets/images/rectangle.png";
import colors from "../../assets/color/color";
import MDMenu from "./Menu";

import MoreVertIcon from "@mui/icons-material/MoreVert";

const GridCard = ({ menu, fileName, image, firstLetter }) => {
  return (
    <Card sx={{ backgroundColor: colors.greyLight, py: 3 }}>
      <CardMedia
        sx={{ my: 1, px: 2 }}
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 1,
          mt: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar sx={{ bgcolor: colors.primary, width: 30, height: 30 }}>
            {firstLetter}
          </Avatar>
          <Typography>{fileName}</Typography>
        </Box>
        <MDMenu icon={<MoreVertIcon />} isAllow={true} options={menu} />
      </Box>
    </Card>
  );
};

export default GridCard;
