import { Stack, Box, Typography, Button } from "@mui/material";
import { useContext } from "react";
import MyContext from "../../Search/MyContext";

export default function Timings({ period, timings, name }) {
    const { setSelectedTime, setModalOpen, setBookingID } = useContext(MyContext);

  const modalOpen = (time, e) => {
    setBookingID(e.currentTarget.name);
    // console.log(e.currentTarget.name);
    setSelectedTime(time);
    setModalOpen(true);
  };
  return (
    <Stack sx={{ p: 3 }} borderBottom="2px solid #ededf2" width="100%">
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 1, md: 6 }}
        alignItems="center"
      >
        
        <p
          style={{
            fontSize: "18px",
            color: "#414146",
            minWidth: "90px",
            textAlign: "center",
          }}
          >
          {period}
          </p>
        <Box
          display="flex"
          gap={3}
          alignItems="center"
          flexWrap="wrap"
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          {timings.map((time) => {
            return (
              <Button variant="outlined" 
              key={time}
              name={name}
              onClick={(e) => modalOpen(time, e)}
              >
                <Typography
                  variant="p"
                  fontSize="18px"
                  color="#2AA7FF"
                  fontWeight={400}
                  name={name}
                >
                  {time}
                </Typography>
              </Button>
            );
          })}
        </Box>
      </Stack>
    </Stack>
  );
}