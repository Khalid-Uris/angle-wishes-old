import React from "react";
import { Row, Col } from "reactstrap";
import { Box, Typography } from "@mui/material";
import colors from "../../assets/color/color";
import footerLogo from "./../../assets/images/fotter_logo.png";
import { footerValues } from "../../constants/fotter";

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigation = useNavigate();

  return (
    <Box
      style={{ backgroundColor: colors.secondary }}
      sx={{
        px: { md: "1rem", xs: "1rem" },
      }}
    >
      <Row>
        <Col
          xs={12}
          md={4}
          sm={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { sm: "17.1rem", xs: "100%" },
              height: { sm: "17.1rem", xs: "15rem" },
              // ml:{xs:-10}
            }}
          >
            <img
              src={footerLogo}
              alt="logo"
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Col>
        <Col xs={12} md={3} sm={6}>
          <Box
            sx={{
              borderRight: { md: "1px solid #A7A7A7" },
              ml: { xs: 2, md: 0, sm: 10 },
              mt: { xs: 3, md: 0, sm: 5 },
            }}
          >
            <Typography sx={{ fontWeight: 700, my: { md: 4, xs: 2 } }}>
              Angel Wishes
            </Typography>
            {footerValues[0]?.angel_wishes.map((wish) => (
              <Typography
                key={wish.id}
                sx={{ my: 1, cursor: "pointer" }}
                onClick={() => navigation(wish?.route)}
              >
                {wish.title}
              </Typography>
            ))}
          </Box>
        </Col>
        <Col xs={12} md={3} sm={6}>
          <Box
            sx={{
              borderRight: { md: "1px solid #A7A7A7" },
              mt: { sm: 8, md: 0 },
              ml: { sm: 11, md: 0, xs: 2 },
            }}
          >
            <Typography sx={{ fontWeight: 700, my: { md: 4, xs: 2 } }}>
              Usefull Links
            </Typography>
            {footerValues[0]?.usefull_links?.map((usefull) => (
              <Typography key={usefull.id} sx={{ my: 1, cursor: "pointer" }}>
                {usefull?.title}
              </Typography>
            ))}
          </Box>
        </Col>
        <Col xs={12} md={2} sm={6}>
          <Box sx={{ mt: { sm: 8, md: 0 }, ml: { sm: 10, md: 0, xs: 2 } }}>
            <Typography sx={{ fontWeight: 700, my: { md: 4, xs: 2 } }}>
              Contact us
            </Typography>
            {footerValues[0]?.contacts.map((contacts) => (
              <Box
                key={contacts?.id}
                sx={{
                  display: "flex",
                  // alignItems: "center",
                  gap: 1.5,
                  my: 1,
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "1.1rem",
                    height: "1.1rem",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={contacts?.image}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <Typography sx={{}}>{contacts?.title}</Typography>
              </Box>
            ))}
          </Box>
        </Col>
      </Row>
    </Box>
  );
};

export default Footer;
