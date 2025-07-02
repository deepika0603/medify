import {
    Container,
    Box,
    Typography,
    Stack,
    TextField,
    InputAdornment,
    Button,
  } from "@mui/material";
  import Mobile from "../../../assets/mobile.jpg";
  import { IoLogoGooglePlaystore } from "react-icons/io5";
  import { IoLogoApple } from "react-icons/io5";
  
  export default function DownloadApp() {
    return (
      <section>
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            background:
              "linear-gradient(to right, #E7F0FF 0%, #E8F1FF 47%, #E8F1FF 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: 5, md: 15 },
            gap: 12,
            pt: 8,
            flexDirection: { xs: "column", lg: "row" },
            pb: { xs: 5, lg: 0 },
          }}
        >
          <Box
            component="img"
            src={Mobile}
            alt="Mobile Image"
            width={{ xs: "100%", lg: "50%" }}
          />
          <Box width={{ xs: "100%", lg: "50%" }}>
            <Stack spacing={3}>
              <Box
                display="flex"
                flexDirection={{ xs: "row", lg: "column" }}
                justifyContent={{ xs: "center", lg: "flex-start" }}
              >
                <Typography
                  color="#1B3C74"
                  variant="h2"
                  fontWeight="600"
                  textAlign={{ xs: "center", lg: "start" }}
                >
                  Download the <span style={{ color: "#2AA7FF" }}>Medify</span>{" "}
                  App
                </Typography>
                {/* <Typography color="#1B3C74" variant="h2" fontWeight="600">
               
              </Typography> */}
              </Box>
  
              <Box
                display="flex"
                flexDirection="column"
                gap="15px"
                //   pt={2}
                justifyContent={{ xs: "center", lg: "flex-start" }}
                flexWrap="wrap"
              >
                <Typography
                  variant="h6"
                  textAlign={{ xs: "center", lg: "start" }}
                >
                  Get a link to download the app
                </Typography>
                <Stack
                  direction={{ xs: "column", lg: "row" }}
                  alignItems={{ xs: "center", lg: "center" }}
                  spacing={2}
                >
                  <TextField
                    type="number"
                    variant="outlined"
                    placeholder="Enter your number"
                    id="outlined-textfield-number"
                    sx={{
                      minWidth: "100px",
                      background: "white",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "none", // ✅ remove the border
                        },
                        "&:hover fieldset": {
                          border: "none",
                        },
                        "&.Mui-focused fieldset": {
                          border: "none",
                        },
                      },
                      "& input[type=number]::-webkit-inner-spin-button": {
                        WebkitAppearance: "none",
                        margin: 0,
                      },
                      borderRadius: 2,
                      p: 0,
                    }}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            sx={{
                              borderRight: "2px solid gray",
                              pr: 2.4,
                              pl: 1,
                              mr: 3,
                            }}
                          >
                            +91
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      fontSize: "17px",
                      width: "30%",
                      padding: 0,
                      borderRadius: 2,
                      height: "55px",
                      boxShadow: "none",
                    }}
                  >
                    Send SMS
                  </Button>
                </Stack>
              </Box>
              <Box
                display="flex"
                gap="20px"
                justifyContent={{ xs: "center", lg: "start" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#2d2d32",
                    px: 3,
                    py: 1.5,
                    fontSize: "20px",
                    borderRadius: 2,
                    boxShadow: "none",
                    width: "220px",
                  }}
                  startIcon={
                    <IoLogoGooglePlaystore style={{ fontSize: "40px" }} />
                  }
                >
                  Google Play
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#2d2d32",
                    px: 3,
                    py: 1.5,
                    fontSize: "20px",
                    borderRadius: 2,
                    boxShadow: "none",
                    width: "220px",
                  }}
                  startIcon={<IoLogoApple style={{ fontSize: "40px" }} />}
                >
                  App Store
                </Button>
              </Box>
            </Stack>
          </Box>
        </Container>
      </section>
    );
  }