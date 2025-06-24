import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Card1 from "../../../assets/card_1.png";
import Card2 from "../../../assets/card_2.png";
import styles from "./Offers.module.css";

export default function Offers() {
  return (
    <section>
      <Container
        disableGutters
        maxWidth={false}
        sx={{ px: { xs: 5, md: 15 }, pb: 6, pt: 0 }}
      >
        <Swiper
          className={styles.customSwiper}
          modules={[Pagination]}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            767: {
              slidesPerView: 3,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          style={{ width: "100%" }}
          pagination={{ clickable: true }}
        >
          {[Card1, Card2, Card1, Card2, Card1, Card2].map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`card${idx}`}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}