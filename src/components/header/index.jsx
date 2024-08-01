import React, { useState } from "react";
import { Typography, Box, Avatar } from "@mui/material";

import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import colors from "../../assets/color/color";
import MDMenu from "../other-component/Menu";

import logo from "./../../assets/images/logo.png";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { authServices } from "../../services/auth";
import { userLogout } from "../../redux-store/features/auth";

const Header = ({ backgroundColor, color }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleLogout = async () => {
    try {
      const response = await dispatch(userLogout());
      // return response;
      navigate("/");
    } catch (error) {
      console.log("Logout Error ==>", error);
    }
  };

  const pages = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "About",
      onClick: () => navigate("/about-us"),
    },
    {
      id: 3,
      title: "Folders",
    },
    {
      id: 4,
      title: "Testimonials",
    },
    {
      id: 5,
      title: "Blogs",
    },
  ];
  const menu = [
    {
      id: 1,
      title: "Profile",
      onClick: () => handleProfile(),
    },
    {
      id: 2,
      title: "Logout",
      onClick: () => handleLogout(),
    },
    {
      id: 3,
      title: "Settings",
    },
  ];

  const isHome = location?.pathname === "/";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#98c1d9",
        px: { md: 5, sm: 2, xs: 1 },
      }}
    >
      <Box
        sx={{
          width: { xs: "8rem", sm: "12rem" },
          height: { xs: "3rem", sm: "4.5rem" },
          cursor: "pointer",
        }}
      >
        <img
          src={logo}
          alt="Angel Wishes"
          style={{ width: "100%", height: "100%" }}
          onClick={() => navigate("/")}
        />
      </Box>
      <Box>
        <Typography
          sx={{
            color: colors?.white,
            display: { xs: "none", md: "flex", textTransform: "capitalize" },
          }}
        >
          Learn about the most loved angel wishes memories
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box
          onClick={() => navigate("/notification")}
          sx={{ cursor: "pointer" }}
        >
          <NotificationsIcon sx={{ fontSize: { sm: 30 }, color: "#fff" }} />
        </Box>
        <Box>
          <SupportAgentIcon sx={{ fontSize: { sm: 30 }, color: "#fff" }} />
        </Box>
        <Box
          sx={{
            // width: { sm: "5rem", xs: "3.5rem" },
            // height: { sm: "2.5rem", xs: "2rem" },
            backgroundColor: "#FAF9F6",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "space-between", md: "space-evenly" },
            pl: { xs: 0.6 },
          }}
        >
          <MDMenu
            isAllow={true}
            icon={
              <MenuIcon
                sx={{
                  fontSize: { sm: 28, xs: 26 },
                  color: "#98c1d9",
                }}
              />
            }
            options={pages}
            sx={{ cursor: "pointer" }}
          />
          <Box
            sx={{
              backgroundColor: "#98c1d9",
              borderRadius: 50,
              // px: { sm: 0, xs: 0.4 },
              // pb: { sm: 0, xs: 0.3 },
              // m: 1,
              cursor: "pointer",
            }}
          >
            <MDMenu
              isAllow={true}
              icon={
                // <PersonIcon
                //   sx={{
                //     fontSize: { sm: 28, xs: 20 },
                //     color: { sm: "#FAF9F6", xs: colors.primary },
                //     // color: colors.primary,
                //   }}
                // />
                <Avatar src={user?.image} sx={{ objectFit: "contain" }} />
              }
              options={menu}
            />
          </Box>
          {/* <MDMenu options={menu} src={user} /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
