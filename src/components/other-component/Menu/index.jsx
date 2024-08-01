import React, { useState } from "react";
import { Menu, MenuItem, Box } from "@mui/material";

const MDMenu = ({
  options,
  src,
  isAllow = false,
  icon,
  imgWidth,
  imgHeight,
  sx,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {isAllow ? (
        <Box onClick={handleClick} sx={sx}>
          {icon}
        </Box>
      ) : (
        <div
          style={{
            width: imgWidth ? imgWidth : "1.5rem",
            height: imgHeight ? imgHeight : "1.5rem",
            cursor: "pointer",
          }}
        >
          <img
            src={src}
            alt="hamburger"
            style={{ width: "100%", height: "100%" }}
            onClick={handleClick}
          />
        </div>
      )}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {options?.map((data, index) => {
          return (
            <MenuItem
              key={index}
              sx={{
                width: {
                  md: "12rem",
                  xs: "10rem",
                  backgroundColor: { xs: "red" },
                },
              }}
              onClick={() => {
                data.onClick();
                handleClose();
              }}
            >
              {data.title}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default MDMenu;
