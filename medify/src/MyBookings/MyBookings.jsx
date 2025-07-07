import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/SearchBar/SearchBar";
import { Box, Stack, Grid, Container } from "@mui/material";
import DownloadApp from "../components/Sections/DownloadApp/DownloadApp";
import Footer from "../components/Footer/Footer";
import { useState, useEffect, useCallback } from "react";
import Banner from "../assets/appointment_banner.png";
import HospitalCard from "../components/HospitalCard/HospitalCard";

export default function MyBookings() {
    // return (
    //     <div>
    //         <NavBar background="white" />
    //     </div>
    // )
    let totalBookings = JSON.parse(localStorage.getItem("bookings")) || [];
  const [bookings, setBookings] = useState([]);

  const filterBookings = useCallback((inputText, totalBookings) => {
    const filteredList = totalBookings.filter((booking) =>
      booking["Hospital Name"].includes(inputText.toUpperCase())
    );
    // console.log(filteredList);
    setBookings(filteredList);
  }, []);

  useEffect(() => {
    setBookings(totalBookings);
  }, []);

  return (
    <div>
      <NavBar background="white" />
      <Box
        sx={{
          background: "#f3f6fa",
        }}
      >
        <Box
          width="100%"
          height={{ xs: "200px", sm: "175px", lg: "100px" }}
          sx={{
            background: "linear-gradient(to right, #2AA7FF, #0C8CE5)",
            display: "flex",
            justifyContent: "center",
            px: { xs: 5, md: 15 },
            mb: 13,
          }}
          position="relative"
          borderRadius="0px 0px 16px 16px"
        >
          <Grid
            container
            spacing={1}
            width="100%"
            sx={{ px: { xs: 5, md: 15 } }}
            position="absolute"
            top={45}
            justifyContent="space-between"
            alignItems={{ xs: "center", lg: "flex-start" }}
          >
            <Grid size={{ xs: 12, lg: 3 }}>
              <h1
                style={{
                  color: "white",
                  margin: 0,
                  width: "100%",
                  textAlign: "center",
                }}
              >
                My Bookings
              </h1>
            </Grid>
            <Grid size={{ xs: 12, lg: 8 }}>
              <Box
                backgroundColor="white"
                p={3}
                borderRadius={4}
                boxShadow="linear-gradiant(6 6 35 0 #1028511C)"
              >
                <SearchBar
                  bookings={bookings}
                  filterBookings={filterBookings}
                  totalBookings={totalBookings}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Container
          disableGutters
          maxWidth={false}
          sx={{ px: { xs: 5, md: 15 } }}
        >
          <Box
            width="100%"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 5,
              flexWrap: "wrap",
              justifyContent: { md: "center" },
              mb: 4,
            }}
          >
            <Stack width={{ sm: "100%", md: "100%", xl: "66%" }} spacing={3}>
              {bookings.map((booking, ind) => (
                <HospitalCard
                  type="Booking Card"
                  hospital={booking}
                  key={booking["Provider ID"] + ind}
                />
              ))}
            </Stack>
            <Box width={{ sm: "100%", xl: "30%" }} mb={4}>
              <Box component="img" src={Banner} alt="Banner" width="100%" />
            </Box>
          </Box>
        </Container>
        <DownloadApp />
        <Footer />
      </Box>
    </div>
  );
}