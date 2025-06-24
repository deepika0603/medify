import { Container, Typography, Grid, Button } from "@mui/material";
import Dentistry from "../../../assets/Drugstore.png";
import MRIresonance from "../../../assets/Heart Rate Monitor.png";
import HeartRate from "../../../assets/Heart Rate.png";
import Laboratory from "../../../assets/Drugstore.png";
import Piscologist from "../../../assets/Immune.png";
import PrimaryCare from "../../../assets/Stethoscope.png";
import XRay from "../../../assets/X-Ray.png";
import BloodTest from "../../../assets/Blood Sample.png";
import IconCard from "../../IconCard/IconCard";

export default function Specialization() {
  const specialisation = [
    { text: "Dentistry", icon: Dentistry, bgcolor: "white", boxshadow: true },
    { text: "Primary Care", icon: PrimaryCare, bgcolor: "white", boxshadow: true },
    { text: "Cardiology", icon: HeartRate, bgcolor: "white", boxshadow: true },
    { text: "MRI Resonance", icon: MRIresonance, bgcolor: "white", boxshadow: true },
    { text: "Blood Test", icon: BloodTest, bgcolor: "white", boxshadow: true },
    { text: "Piscologist", icon: Piscologist, bgcolor: "white", boxshadow: true },
    { text: "Laboratory", icon: Dentistry, bgcolor: "white", boxshadow: true },
    { text: "X-Ray", icon: XRay, bgcolor: "white", boxshadow: true },
  ];
  return (
    <Container
      sx={{
        background:
          "linear-gradient(to right, #E7F0FF 0%, #E8F1FF 47%, #E8F1FF 100%)",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 5, md: 15 },
        gap: "45px",
        py: "45px",
      }}
      disableGutters
      maxWidth={false}
    >
      <Typography
        color="#1B3C74"
        variant="h3"
        fontWeight="600"
        textAlign="center"
      >
        Find By Specialisation
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {specialisation.map((data) => {
          return (
            <Grid
              size={{ xs: 6, sm: 5, md: 4, lg: 3.2, xl: 2.5 }}
              key={data.text}
              height="auto"
            >
              <IconCard
                text={data.text}
                icon={data.icon}
                bgcolor={data.bgcolor}
                boxshadow={data.boxshadow}
              />
            </Grid>
          );
        })}
      </Grid>
      <Button
        variant="contained"
        sx={{
          borderRadius: "8px",
          boxShadow: "none",
          px: 5,
          py: 1,
          fontSize: "20px",
        }}
      >
        View All
      </Button>
    </Container>
  );
}