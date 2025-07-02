import { Typography, Box, Container, Stack, Button } from "@mui/material";
import { Link } from "react-router";
import DoctorHero from "../../assets/doctor_hero.png";

export default function Hero() {
  return (
    <section>
      <Container
        sx={{
          background:
            "linear-gradient(to right, #E7F0FF 0%, #E8F1FF 47%, #E8F1FF 100%)",
          px: { xs: 5, md: 15 },
          py: 5,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: 5, lg: 0 },
          pb: "4",
        }}
        disableGutters
        maxWidth={false}
      >
        <Stack sx={{ width: { xs: "100%", lg: "50%" } }}>
          <Box>
            <Typography variant="h4" color="#102851" fontWeight={600}>
              Skip the travel! Find Online
            </Typography>
            <Typography
              variant="h2"
              fontWeight={700}
              letterSpacing={2}
              lineHeight={1.2}
              fontStyle="bold"
            >
              Medical <span style={{ color: "#2AA7FF" }}>Centers</span>
            </Typography>
          </Box>

          <Typography variant="h6" color="#5C6169" fontWeight={400} mt={3}>
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </Typography>

          <Link to="/search" style={{ marginTop: "35px" }}>
            <Button
              variant="contained"
              size="large"
              sx={{ boxShadow: "none", borderRadius: "8px", px: 5, py: 1.5 }}
            >
              Find Centers
            </Button>
          </Link>
        </Stack>
        <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
          <img
            src={DoctorHero}
            alt="Doctor Hero Image"
            style={{ filter: "drop-shadow(-5px 20px 10px rgba(0, 0, 0, 0.3))" }}
            width="100%"
          />
        </Box>
      </Container>
    </section>
  );
}