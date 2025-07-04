import { Box, Typography, Button, Stack, Grid } from "@mui/material";
import HospitalLogo from "../../assets/hospital_logo.png";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import Calender from "../Calender/Calender";
import { useState } from "react";

export default function Card({ type, hospital }) {
    const [open, setOpen] = useState(false);


    return (
        <Box>
          <Grid container spacing={0} width="100%" alignItems="center">
            <Grid size={{ xs: 12, lg: 3 }}>
              <Box component="img" src={HospitalLogo} />
            </Grid>
            <Grid size={{ xs: 12, lg: 9 }}>
              <CardDetails
                open={open}
                setOpen={setOpen}
                type={type}
                hospital={hospital}
              />
            </Grid>
          </Grid>
          <Box pt={3} display={open ? "block" : "none"}>
            <Calender name={hospital["Provider ID"]} />
          </Box>
        </Box>
      );
    }
    
    const CardDetails = ({ open, setOpen, type, hospital }) => {
      const openCalender = () => {
        setOpen(!open);
      };
    
      return (
        <Grid container direction="column">
          <Grid size={12}>
            <Stack>
              <Box
                display="flex"
                alignItems="center"
                gap={0}
                flexWrap="wrap"
                mb={1}
              >
                <Typography
                  color="#14BEF0"
                  variant="h3"
                  fontWeight={600}
                  fontSize="24px"
                  mr={2}
                  mb={1}
                >
                  {hospital["Hospital Name"]}
                </Typography>
                <Box display={type === "Booking Card" ? "block" : "none"}>
                  <Button variant="outlined" sx={{ marginRight: "15px" }}>
                    <Typography
                      variant="p"
                      fontSize="16px"
                      color="#2AA7FF"
                      fontWeight={400}
                      width="62px"
                    >
                      11:30 PM
                    </Typography>
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ marginRight: "15px", borderColor: "#00A500" }}
                  >
                    <Typography
                      variant="p"
                      fontSize="16px"
                      color="#007100"
                      fontWeight={400}
                      width="100px"
                      fontWeight={500}
                    >
                      20 April 2025
                    </Typography>
                  </Button>
                </Box>
              </Box>
    
              <Stack>
                <Typography variant="p" fontWeight={600}>
                  {hospital["City"]}, {hospital["State"]}
                </Typography>
                <Typography variant="p" color="#414146" mb={1}>
                  {hospital["Address"]}
                </Typography>
              </Stack>
              <Typography
                variant="p"
                color="#414146"
                pb={2}
                sx={{ borderBottom: "0.5px dashed gray" }}
                width="fit-content"
              >
                <span
                  style={{
                    color: "#02A401",
                    fontWeight: "700",
                    marginRight: "8px",
                  }}
                >
                  FREE
                </span>
                <span
                  style={{ textDecoration: "line-through", marginRight: "8px" }}
                >
                  ₹500
                </span>
                Consultation fee at clinic
              </Typography>
            </Stack>
          </Grid>
          <Grid size={12}>
            <Box
              display="flex"
              alignItems={{ xs: "flex-start", sm: "center" }}
              flexDirection={{ xs: "column", sm: "row" }}
              justifyContent={{ xs: "flex-start", sm: "space-between" }}
              pt={2.5}
            >
              <Box
                bgcolor="#02A401"
                width={50}
                color="white"
                borderRadius={2}
                p={0.3}
                height="fit-content"
              >
                <Typography
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <ThumbUpAltIcon sx={{ mr: 0.5 }} />{" "}
                  <span style={{ paddingTop: "3px" }}>5</span>
                </Typography>
              </Box>
              <Stack
                spacing={1}
                alignItems="center"
                width="45%"
                alignSelf="flex-end"
                minWidth="229.555px"
              >
                <Typography
                  color="#01A400"
                  variant="p"
                  sx={{ display: type === "Hospital Card" ? "block" : "none" }}
                >
                  Available Today
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    boxShadow: "none",
                    px: 2,
                    py: 1,
                    fontSize: "18px",
                    // width: "229.555px"
                    display: type === "Hospital Card" ? "block" : "none",
                  }}
                  onClick={openCalender}
                >
                  Book FREE Center Visit
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      );
};