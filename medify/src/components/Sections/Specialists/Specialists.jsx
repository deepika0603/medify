import { Container, Typography, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import styles from "./Specialists.module.css";
import AhmadKhan from "../../../assets/ahmad.png";
import HeenaSachdeva from "../../../assets/heena.png";
import AnkurSharma from "../../../assets/ankur.png";

export default function Specialists() {
  const doctors = [
    { name: "Dr. Ahmad Khan", profession: "Neurologist", picture: AhmadKhan },
    {
      name: "Dr. Heena Sachdeva",
      profession: "Orthopadics",
      picture: HeenaSachdeva,
    },
    { name: "Dr. Ankur Sharma", profession: "Medicine", picture: AnkurSharma },
    { name: "Dr. Ahmad Khan", profession: "Neurologist", picture: AhmadKhan },
    {
      name: "Dr. Heena Sachdeva",
      profession: "Orthopadics",
      picture: HeenaSachdeva,
    },
    { name: "Dr. Ankur Sharma", profession: "Medicine", picture: AnkurSharma },
    { name: "Dr. Ahmad Khan", profession: "Neurologist", picture: AhmadKhan },
    {
      name: "Dr. Heena Sachdeva",
      profession: "Orthopadics",
      picture: HeenaSachdeva,
    },
    { name: "Dr. Ankur Sharma", profession: "Medicine", picture: AnkurSharma },
  ];

  return (
    <section>
      <Container disableGutters maxWidth={false}>
        <Typography
          textAlign="center"
          color="#1B3C74"
          variant="h3"
          fontWeight="600"
          py={6}
        >
          Our Medical Specialists
        </Typography>
        <Box>
          <Swiper
            className={styles.customSwiper}
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              767: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            style={{ width: "100%" }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
          >
            {doctors.map((doctor, ind) => {
              return (
                <SwiperSlide key={doctor.name + ind}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    height="100%"
                  >
                    <Box
                      component="img"
                      src={doctor.picture}
                      alt={doctor.name}
                      width="100%"
                      sx={{
                        filter:
                          "drop-shadow(0px 15px 55px -10px rgba(0, 0, 0, 0.09))",
                        objectFit: "contain",
                      }}
                      mb={-3}
                    />
                    <Typography
                      textAlign="center"
                      color="#1B3C74"
                      variant="h5"
                      pb={1}
                    >
                      {doctor.name}
                    </Typography>
                    <Typography
                      textAlign="center"
                      color={"primary"}
                      variant="h6"
                    >
                      {doctor.profession}
                    </Typography>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Container>
    </section>
  );
}