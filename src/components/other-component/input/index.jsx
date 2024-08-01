import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SearchIcon from "@mui/icons-material/Search";

import colors from "../../../assets/color/color";

const AuthInputs = ({
  placeholder,
  name,
  value,
  onChange,
  lastIcon = false,
  startIcon = false,
  type,
  label,
  style,
  error,
  icon,
  inputWidth,
  className,
  disabled,
  inputColor,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <Box sx={style} className={`${className}`}>
      <p>{label}</p>
      <div
        className="flex flex-1"
        style={{
          width: inputWidth ? inputWidth : "100%",
          marginTop: "-8px",
          position: "relative",
          border: "1px solid #CECECE",
          borderRadius: 10,
          // backgroundColor:"blue"
        }}
      >
        {startIcon && (
          <div
            style={{
              position: "absolute",
              left: 5,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            {icon}
          </div>
        )}
        <input
          className="flex-1"
          placeholder={placeholder}
          name={name}
          // type={type === "password" && !showPassword ? "password" : "text"}
          type={inputType}
          value={value}
          onChange={onChange}
          disabled={disabled}
          style={{
            border: "none",
            width: "100%",
            height: "8vh",
            paddingLeft: 35,
            outline: "none",
            backgroundColor: disabled ? colors?.greyLight : "transparent",
            color: disabled ? colors?.grey : inputColor ? inputColor : "#000",
          }}
        />
        {lastIcon && type === "password" && (
          <div
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <VisibilityOffIcon sx={{ fontSize: 20, color: colors.primary }} />
            ) : (
              <VisibilityIcon sx={{ fontSize: 20, color: colors.primary }} />
            )}
          </div>
        )}
      </div>
      <p className="text-danger">{error}</p>
    </Box>
  );
};

const CheckBoxInput = ({
  value,
  name,
  onChange,
  label,
  error,
  style,
  isTextAllow = false,
  title,
}) => {
  return (
    <Box className="w-full" sx={style}>
      <div
        className="flex items-center"
        style={{ display: "flex", alignItems: "center" }}
      >
        <input
          type="checkbox"
          value={value}
          name={name}
          onChange={onChange}
          style={{ cursor: "pointer" }}
        />
        <Box>
          <Typography sx={{ ml: 1, fontSize: "12px" }}>
            {label}
            <span
              style={{
                color: colors?.blue,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {title}
            </span>
          </Typography>
        </Box>
      </div>
      <p className="text-danger">{error}</p>
    </Box>
  );
};

const SearchBox = () => {
  return (
    <Box
      className="d-flex flex-1"
      sx={{
        border: `1px solid ${colors.grey}`,
        position: "relative",
        height: "7vh",
      }}
    >
      <input
        type="search"
        placeholder="Search your files"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          outline: "none",
          paddingLeft: 10,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
      >
        <SearchIcon sx={{ color: colors.grey }} />
      </div>
    </Box>
  );
};

export { AuthInputs, CheckBoxInput, SearchBox };
