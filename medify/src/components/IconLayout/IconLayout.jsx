import { Typography, Box, Stack, Grid } from "@mui/material";
import Doctor from "../../assets/Doctor.png";
import Labs from "../../assets/Drugstore.png";
import Hospital from "../../assets/Hospital.png";
import Medicine from "../../assets/Capsule.png";
import Ambulance from "../../assets/Ambulance.png";
import IconCard from "../IconCard/IconCard";

export default function IconLayout() {
  const cardData = [
    {
      text: "Doctor",
      icon: Doctor,
      bgcolor: "#FAFBFE",
      selected: false,
      boxshadow: false,
    },
    {
      text: "Labs",
      icon: Labs,
      bgcolor: "#FAFBFE",
      selected: false,
      boxshadow: false,
    },
    {
      text: "Hospitals",
      icon: Hospital,
      bgcolor: "#FAFBFE",
      selected: true,
      boxshadow: false,
    },
    {
      text: "Medical Store",
      icon: Medicine,
      bgcolor: "#FAFBFE",
      selected: false,
      boxshadow: false,
    },
    {
      text: "Ambulance",
      icon: Ambulance,
      bgcolor: "#FAFBFE",
      selected: false,
      boxshadow: false,
    },
  ];

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="40px"
    >
      <Typography variant="h5" color="#102851" fontWeight="500">
        You may be looking for
      </Typography>
      <Grid
        container
        width="100%"
        spacing={{ xs: 0.5, sm: 2, md: 3 }}
        sx={{ flexWrap: "wrap" }}
        justifyContent="center"
      >
        {cardData.map((card) => (
          <Grid size={{ xs: 6, sm: 5, md: 4, lg: 3, xl: 2.2 }} key={card.text}>
            <IconCard
              icon={card.icon}
              text={card.text}
              bgcolor={card.bgcolor}
              selected={card.selected}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}