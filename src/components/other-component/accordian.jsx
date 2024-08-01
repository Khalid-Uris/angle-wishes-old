import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Box, Avatar } from "@mui/material";

import image from "./../../assets/images/image.png";

export default function AccordionComponent({ item }) {
  return (
    <div>
      {item?.map((data, index) => (
        <Accordion key={index} sx={{ mb: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Box>
              <Avatar src={image} />
            </Box>
            <Box sx={{ ml: 4, fontWeight: 600 }}>
              {data?.name}
              <Box sx={{ fontWeight: 400 }}>{data?.title}</Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ ml: 9, border: "1px solid #000", mb: 2 }}>
            {data?.content}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
