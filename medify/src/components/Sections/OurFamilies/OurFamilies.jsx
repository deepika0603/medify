import { Container, Box, Typography } from "@mui/material";
import Cards from "../../../assets/cards.png";

export default function OurFamilies() {
  return (
    <section>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          background:
            "linear-gradient(to right, #E7F0FF 0%, #E8F1FF 47%, #E8F1FF 100%)",
          px: { xs: 5, md: 15 },
          py: { xs: 8, lg: 3 },
          alignItems: "center",
          justifyContent: "center",
          gap: "80px",
        }}
      >
        <Box
          width={{ xs: "100%", lg: "35%" }}
          display="flex"
          flexDirection="column"
          gap="40px"
        >
          <Box>
            <Typography
              color="#2AA7FF"
              fontWeight={600}
              textAlign={{ xs: "center", lg: "start" }}
            >
              CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
            </Typography>
            <Typography
              color="#1B3C74"
              fontWeight={600}
              variant="h3"
              textAlign={{ xs: "center", lg: "start" }}
            >
              Our Families
            </Typography>
          </Box>
          <Typography
            color="#77829D"
            variant="p"
            textAlign={{ xs: "center", lg: "start" }}
            lineHeight={2.5}
          >
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </Typography>
        </Box>
        <Box
          component="img"
          src={Cards}
          alt="Mobile_image"
          width={{ xs: "100%", lg: "40%" }}
        />
      </Container>
    </section>
  );
}