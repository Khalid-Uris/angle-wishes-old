import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { SearchBox } from "../../../components/other-component/input";
import colors from "../../../assets/color/color";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const DashboardHeader = ({ title, onClick, memories }) => {
  const navigation = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  return (
    <Box className="row align-items-center justify-space-between">
      <Box className="col-sm-6 col-md-4" sx={{ mb: { xs: 0 } }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, textAlign: { xs: "center", sm: "start" } }}
        >
          {title}
        </Typography>
      </Box>
      <Box className="col-sm-6 col-md-4" sx={{}}>
        <SearchBox />
      </Box>
      <Box
        className="col-sm-6 col-md-4"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onClick={memories}
        >
          <Box
            sx={{
              border: `2px solid ${colors.primary}`,
              borderRadius: 50,
              p: 0.3,
            }}
          >
            <Avatar
              src={user?.image}
              sx={{
                width: 46,
                height: 46,
                objectFit: "contain",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            />
          </Box>
          <Typography sx={{ color: colors.primary, mt: 0 }}>
            Memories
          </Typography>
        </Box>
        {location.pathname !== "/memories" ? (
          <Box sx={{ display: "flex", mb: 0, gap: 1, alignItems: "center" }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: colors.primary,
                color: colors.primary,
                gap: 2,
                fontWeight: 500,
              }}
              onClick={onClick}
            >
              {/* <CreateNewFolderIcon sx={{ color: colors.primary }} /> */}
              Create Folder
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: colors.primary,
                color: colors.primary,
                display: location.pathname !== `/dashboard` ? "flex" : "none",
              }}
            >
              Upload File
            </Button>
          </Box>
        ) : (
          <Button
            variant="outlined"
            sx={{
              borderColor: colors.primary,
              color: colors.primary,
              gap: 2,
              fontWeight: 500,
              width: "70%",
            }}
            onClick={() => navigation("/dashboard")}
          >
            Go Back
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default DashboardHeader;
