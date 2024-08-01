import React, { useEffect } from "react";
import UserLayout from "../../layouts/main-layout/main_layout";
import DashboardHeader from "../main/dashboard/header";
import { Box, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import MemoryCard from "./memories-assets/MemoryCard";
import memoriesData from "../../constants/randomData";
import { getUserMemories } from "../../redux-store/features/dashboard";

const Memories = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { userMemories } = useSelector((state) => state?.dashboard);

  useEffect(() => {
    dispatch(getUserMemories());
  }, []);

  return (
    <UserLayout>
      <Stack sx={{ mx: { md: 6, sm: 3, xs: 1 } }}>
        <Box sx={{ my: 4 }}>
          <DashboardHeader
            title={`Welcom Back, ${user?.full_name}`}
            memories={() => navigation("/memories")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: 5,
          }}
          py={5}
        >
          {userMemories.map((memory, index) => {
            return <MemoryCard memory={memory} key={index} />;
          })}
        </Box>
      </Stack>
    </UserLayout>
  );
};

export default Memories;
