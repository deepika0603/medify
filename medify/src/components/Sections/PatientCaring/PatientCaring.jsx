import { Container, Box, Stack, Typography } from "@mui/material";
import Caring from "../../../assets/patient_caring.png";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function PatientCaring() {
  return (
    <section>
      <Container
      disableGutters
      maxWidth={false}
        sx={{
          px: { xs: 5, md: 15 },
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          py: 8,
          gap: "60px",
          background:
            "linear-gradient(to right, #E7F0FF 0%, #E8F1FF 47%, #E8F1FF 100%)",
        }}
      >
        <Box
          component="img"
          src={Caring}
          alt="patient_caring image"
          width={{ xs: "100%", lg: "50%" }}
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap="30px"
          width={{ xs: "100%", lg: "50%" }}
          alignItems={{ xs: "center", lg: "flex-start" }}
        >
          <Box>
            <Typography
              color="#2AA7FF"
              fontWeight={600}
              textAlign={{ xs: "center", md: "start" }}
            >
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </Typography>
            <Typography
              variant="h3"
              fontWeight={600}
              textAlign={{ xs: "center", lg: "start" }}
            >
              Patient <span style={{ color: "#2AA7FF" }}>Caring</span>
            </Typography>
          </Box>
          <Typography
            color="gray"
            variant="p"
            textAlign={{ xs: "center", lg: "start" }}
          >
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </Typography>
          <Box display="flex" gap="10px" alignItems="center">
            <VerifiedIcon sx={{ color: "#2AA7FF" }} />
            <Typography variant="p" fontWeight={500} color="#1B3C74">
              Stay Updated About Your Health
            </Typography>
          </Box>
          <Box display="flex" gap="10px" alignItems="center">
            <VerifiedIcon sx={{ color: "#2AA7FF" }} />
            <Typography variant="p" fontWeight={500} color="#1B3C74">
              Check Your Results Online
            </Typography>
          </Box>
          <Box display="flex" gap="10px" alignItems="center">
            <VerifiedIcon sx={{ color: "#2AA7FF" }} />
            <Typography variant="p" fontWeight={500} color="#1B3C74">
              Manage Your Appointments
            </Typography>
          </Box>
        </Box>
      </Container>
    </section>
  );
}