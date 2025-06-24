import { Container, Box, IconButton, Stack, Grid } from "@mui/material";
import MedifyLogo from "../../assets/medify_logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Footer() {
  let aboutUs1 = [
    "About Us",
    "Our Pricing",
    "Our Gallery",
    "Appointment",
    "Privacy Policy",
  ];

  let aboutUs2 = [
    "Orthology",
    "Neurology",
    "Dental Care",
    "Opthalmology",
    "Cardiology",
  ];

  return (
    <footer>
      <Container
        disableGutters
        sx={{
          bgcolor: "#1B3C74",
          minHeight: "424px",
          display: "flex",
          pt: { xs: 4, md: 5, lg: 10, xl: 12 },
          pr: { xs: 4, md: 4, lg: 10, xl: 12 },
          pl: { xs: 4, md: 4, lg: 10, xl: 12 },
          flexDirection: "column",
        }}
        maxWidth={false}
      >
        <Grid
          container
          spacing={{ xs: 5, md: 20, lg: 40, xl: 60 }}
          sx={{
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "center",
            alignItems: "flex-start",
            borderBottom: "0.5px solid gray",
            paddingBottom: "60px",
          }}
        >
          <Grid>
            <Stack spacing={{ xs: 3, md: 20 }}>
              <img src={MedifyLogo} alt="Medify Logo" width="126.77px" />
              <Box display="flex" gap="20px">
                <IconButton
                  sx={{
                    backgroundColor: "white",
                    color: "primary.light",
                    "&:hover": { backgroundColor: "white" },
                  }}
                >
                  <FaFacebookF />
                </IconButton>
                <IconButton
                  sx={{
                    backgroundColor: "white",
                    color: "primary.light",
                    "&:hover": { backgroundColor: "white" },
                  }}
                >
                  <FaTwitter />
                </IconButton>
                <IconButton
                  sx={{
                    backgroundColor: "white",
                    color: "primary.light",
                    "&:hover": { backgroundColor: "white" },
                  }}
                >
                  <FaYoutube />
                </IconButton>
                <IconButton
                  sx={{
                    backgroundColor: "white",
                    color: "primary.light",
                    "&:hover": { backgroundColor: "white" },
                  }}
                >
                  <FaPinterest />
                </IconButton>
              </Box>
            </Stack>
          </Grid>
          <Grid>
            <Grid
              container
              sx={{ flexWrap: "wrap" }}
              spacing={{ xs: 3,sm: 15, md: 1, lg: 4, xl: 15 }}
            >
              <Grid>
                {aboutUs1.map((about) => {
                  return (
                    <Stack key={about}>
                      <Box display="flex" alignItems="center">
                        <IconButton sx={{ color: "white" }}>
                          <IoIosArrowForward />
                        </IconButton>
                        <p style={{ color: "white" }}>{about}</p>
                      </Box>
                    </Stack>
                  );
                })}
              </Grid>
              <Grid>
                {aboutUs2.map((about) => {
                  return (
                    <Stack key={about}>
                      <Box display="flex" alignItems="center">
                        <IconButton sx={{ color: "white" }}>
                          <IoIosArrowForward />
                        </IconButton>
                        <p style={{ color: "white" }}>{about}</p>
                      </Box>
                    </Stack>
                  );
                })}
              </Grid>
              <Grid>
                {aboutUs1.map((about) => {
                  return (
                    <Stack key={about}>
                      <Box display="flex" alignItems="center">
                        <IconButton sx={{ color: "white" }}>
                          <IoIosArrowForward />
                        </IconButton>
                        <p style={{ color: "white" }}>{about}</p>
                      </Box>
                    </Stack>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <p style={{ color: "white", marginTop: "30px", marginBottom: "30px" }}>
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </p>
      </Container>
    </footer>
  );
}