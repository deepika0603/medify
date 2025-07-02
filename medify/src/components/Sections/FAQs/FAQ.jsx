import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    Container,
    Stack,
  } from "@mui/material";
  import DoctorPatient from "../../../assets/doctor_patient_talk.jpg";
  import { IoMdAdd, IoMdClose } from "react-icons/io";
  import { useState } from "react";
  
  export default function FAQs() {
    const [expandedIndex, setExpandedIndex] = useState(null);
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
            py: 10,
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
                {FAQ.map((question, index) => {
                  const isOpen = expandedIndex === index;
                  return (
                    <Accordion
                      key={index}
                      expanded={isOpen}
                      onChange={() => setExpandedIndex(isOpen ? false : index)}
                      sx={{
                        boxShadow: "none",
                        "&::before": {
                          display: "none",
                        },
                      }}
                      disableGutters
                    >
                      <AccordionSummary
                        expandIcon={
                          isOpen ? (
                            <IoMdClose
                              fontSize="23px"
                              strokeWidth={25}
                              color="#2AA7FF"
                            />
                          ) : (
                            <IoMdAdd
                              fontSize="23px"
                              strokeWidth={25}
                              color="#2AA7FF"
                            />
                          )
                        }
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{
                          my: 0, // default margin
                          "&.Mui-expanded": {
                            minHeight: "48px", // default collapsed height
                            my: 0, // remove margin on expand
                          },
                          "& .MuiAccordionSummary-content.Mui-expanded": {
                            margin: 0, // remove spacing around content
                          },
                        }}
                      >
                        <Typography
                          component="span"
                          color="#1B3C74"
                          fontWeight={600}
                        >
                          {question.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ fontSize: "14px" }}>
                        {question.answer}
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </Stack>
            </Box>
          </Box>
        </Container>
      </section>
    );
  }