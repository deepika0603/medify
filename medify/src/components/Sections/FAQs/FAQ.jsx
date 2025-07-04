import { Typography, Box, Container, Stack } from "@mui/material";
import DoctorPatient from "../../../assets/doctor_patient_talk.jpg";
import MyAccordion from "../../Accordion/Accordion";

export default function FAQs() {
  const FAQ = [
    {
      question: "Why choose our medical for your family?",
      answer:
        "We provide trusted, compassionate care with expert doctors and advanced facilities—all under one roof.",
    },
    {
      question: "Why we are different from others?",
      answer:
        "Our patient-first approach, personalized treatment plans, and round-the-clock support set us apart.",
    },
    {
      question: "Trusted & Experienced Senior Care with Compassion and Love",
      answer: `“Caring for You and Your Family, Always.”`,
    },
    {
      question: "How to get an appointment for emergency cases?",
      answer:
        "For emergency cases, call our 24/7 helpline or visit the nearest branch directly—no prior appointment needed.",
    },
  ];
  return (
    <section>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          px: { xs: 5, md: 15 },
          py: 8,
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="50px"
        >
          <Box textAlign="center">
            <Typography
              sx={{ color: "primary.main", mb: 1 }}
              variant="h6"
              fontWeight="600"
            >
              Get Your Answer
            </Typography>
            <Typography color="#1B3C74" variant="h3" fontWeight="600">
              Frequently Asked Questions
            </Typography>
          </Box>
          <Box
            display="flex"
            gap="60px"
            flexDirection={{ xs: "column", lg: "row" }}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="img"
              src={DoctorPatient}
              alt="doctor patient image"
              width={{ xs: "100%", lg: "50%" }}
            />
            <Stack
              width="100%"
              direction="column"
              sx={{ justifyContent: "space-between" }}
              spacing={4}
            >
              {FAQ.map((question, index) => (
                <MyAccordion questionData={question} index={index} key={index} />
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </section>
  );
}