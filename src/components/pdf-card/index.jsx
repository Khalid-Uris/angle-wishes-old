import * as React from "react";
import {
  Card,
  Box,
  Typography,
  CardHeader,
  CardMedia,
  IconButton,
} from "@mui/material";
import MDMenu from "../other-component/Menu";
import { useNavigate } from "react-router-dom";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import colors from "../../assets/color/color";

// import image from "./../../assets/images/image.png";
import Union from "./../../assets/images/Union.png";
import union_2 from "./../../assets/images/union_2.png";
import share from "./../../assets/images/share.png";
import { useDispatch } from "react-redux";
import { folder } from "../../services/folder";
import { useEffect } from "react";
import { removeCategory } from "../../redux-store/features/dashboard";

export default function FolderCard({
  item,
  title,
  time,
  isSelected,
  onClick,
  isAllow = false,
  image,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOption = (event) => {
    event.stopPropagation();
  };
  const handleShare = (event) => {
    event.stopPropagation();
  };

  const handleView = (item) => {
    navigate(`/user_details/${item.id}`, { state: item });
  };

  const handleDelete = async (item) => {
    const response = await folder.deleteDashboardFolder(item.id);

    dispatch(removeCategory(item.id));

    console.log("Dashboard item delete response==>", response);
  };

  const menuOptions = [
    {
      id: 1,
      title: "View",
      onClick: () => handleView(item),
    },
    {
      id: 2,
      title: "Delete ",
      onClick: () => handleDelete(item),
    },
    {
      id: 3,
      title: "Settings",
    },
  ];

  return (
    <Card
      sx={{
        backgroundImage: isSelected ? `url(${union_2})` : `url(${Union})`,
        backgroundSize: "cover",
        border: "none",
        boxShadow: "none",
        transition: "0.5s",
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            pl: { xs: 2 },
            pt: 4,
            // color: isSelected ? colors?.white : "#000",
          }}
        >
          <Typography
            sx={{ fontWeight: 600, color: isSelected ? colors?.white : "#000" }}
          >
            {title}
          </Typography>
          <Typography sx={{ color: isSelected ? colors?.white : "#8D8D8D" }}>
            {time}
          </Typography>
        </Box>
        {isSelected ? (
          <CardHeader
            action={
              <Box
                sx={{
                  borderRadius: 50,
                  p: 1.3,
                  backgroundColor: "#fff",
                  cursor: "pointer",
                }}
                onClick={handleShare}
              >
                <Box
                  aria-label="settings"
                  sx={{
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={share}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Box>
            }
          />
        ) : (
          <CardHeader
            action={
              <Box
                aria-label="settings"
                sx={{
                  backgroundColor: "#111111",
                  borderRadius: 50,
                  p: 1,
                }}
                onClick={handleOption}
              >
                {/* <MoreHorizIcon sx={{ color: colors.white }} /> */}
                <MDMenu
                  isAllow={isAllow}
                  icon={
                    <MoreHorizIcon
                      sx={{ color: colors.white, cursor: "pointer" }}
                    />
                  }
                  options={menuOptions}
                />
              </Box>
            }
          />
        )}
      </Box>
      <CardMedia
        sx={{ my: 1, cursor: "pointer", objectFit: "contain", p: 1 }}
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
    </Card>
  );
}
