import getSevenDays from "../../getSevenDays";
import moment from "moment";
import { useEffect, useState, useRef, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Typography, Stack } from "@mui/material";
import { PrevButton, NextButton } from "./SwiperButtons";
import Timings from "./Timings";
import MyContext from "../../Search/MyContext";

export default function Calender({ name }) {
  const dates = getSevenDays();
  const [formattedDates, setFormattedDates] = useState(null);

  const swiperRef = useRef(null);
  const { timing, selectedDate, setSelectedDate } = useContext(MyContext);

  useEffect(() => {
    if (dates.length) {
      //   console.log(dates);
      let newDates;
      newDates = dates.map((date) =>
        moment(new Date(date)).format("ddd, DD MMM")
      );
      // console.log(newDates);
      setFormattedDates(newDates);
    }
  }, []);
  // console.log(dates);

  useEffect(() => {
    setSelectedDate(dates[0]);
  }, []);

  return (
    <Box
      borderTop="2px solid #ededf2"
      sx={{
        overflowX: "hidden",
        width: "100%",
      }}
    >
      <Box position="relative" width="100%">
        <MySwiper
          formattedDates={formattedDates}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          normalDates={dates}
          swiperRef={swiperRef}
        />
        <Box component="span" position="absolute" top={25} zIndex={1} left={0}>
          <PrevButton swiperRef={swiperRef} />
        </Box>
        <Box component="span" position="absolute" top={25} zIndex={1} right={0}>
          <NextButton swiperRef={swiperRef} />
        </Box>
      </Box>
      <Box>
        {timing.map((time) => (
          <Timings
            timings={time.timings}
            key={time.period}
            period={time.period}
            name={name}
          />
        ))}
      </Box>
    </Box>
  );
}

const MySwiper = ({
  formattedDates,
  setSelectedDate,
  normalDates,
  swiperRef,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectDate = (ind) => {
    setSelectedIndex(ind);
    // console.log(normalDates[ind]);
    setSelectedDate(normalDates[ind]);
    // console.log(selectedDate);
  };

  return (
    <Swiper
      //   modules={[Navigation, Scrollbar]}
      //   navigation={true}
      //   scrollbar={{
      //     hide: true,
      //   }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      className="mySwiper"
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        900: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
      style={{ margin: "0px 50px" }}
    >
      {formattedDates &&
        formattedDates.map((date, ind) => {
          const selected = selectedIndex === ind;
          return (
            <SwiperSlide
              style={{ position: "relative" }}
              key={normalDates[ind]}
            >
              <Stack
                spacing={0.5}
                justifyContent="center"
                alignItems="center"
                p={2}
                px={0}
                width="100%"
                sx={{
                  cursor: "pointer",
                  borderBottom: selected
                    ? "5px solid #2AA7FF"
                    : "5px solid #f0f0f5",
                }}
                onClick={(e) => selectDate(ind, e)}
              >
                {ind === 0 && (
                  <p style={{ fontSize: 18, fontWeight: selected && 650 }}>
                    Today
                    
                  </p>
                )}
                {ind !== 0 && (
                  <Typography
                    variant="h6"
                    fontSize={18}
                    fontWeight={selected && 650}
                  >
                    {ind === 1 && "Tomorrow"} {ind >= 2 && date}
                  </Typography>
                )}

                <Typography variant="h6" color="#01A400" fontSize={16}>

                  11 Slots Available
                </Typography>
              </Stack>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};
