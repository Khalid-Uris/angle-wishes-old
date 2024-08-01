import React from "react";
import { Modal, Box, Typography } from "@mui/material";

const CustomModal = ({ open, handleClose, body }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: { sm: "80%", xs: "100%", md: "50%" },
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          // bgcolor: "background.paper",
          boxShadow: 24,
          p: 1,
        }}
      >
        {body()}
      </Box>
    </Modal>
  );
};

export default CustomModal;
