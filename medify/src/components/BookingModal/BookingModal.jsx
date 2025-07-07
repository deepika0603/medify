import {
    Modal,
    TextField,
    Typography,
    Button,
    Box,
    Stack,
  } from "@mui/material";
  import moment from "moment";
  import { useState } from "react";
  
  export default function BookingModal({
    open,
    setOpen,
    selectedDate,
    selectedTime,
    hospitalList,
    bookingID,
    persistBookings,
    setSnackbar,
  }) {
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: { xs: 400, md: 700 },
      bgcolor: "background.paper",
      border: "none",
      boxShadow: 24,
      p: 4,
      borderRadius: 4,
    };
  
    const [email, setEmail] = useState("");
  
    const handleEmail = (e) => {
      // console.log(e.target.value);
      setEmail(e.target.value);
    };
  
    const handleOpen = () => {
      setOpen(!open);
    };
  
    const formSubmit = (e) => {
      e.preventDefault();
      // setBookingEmail(email);
      persistBookings(bookingID, hospitalList, email, selectedDate, selectedTime);
      setOpen(!open);
      setSnackbar(true);
    };
  
    return (
      <Modal open={open}>
        <Box sx={style}>
          <form onSubmit={formSubmit}>
            <Stack spacing={3}>
              <Box>
                <Typography color="#1b3c74" variant="h4" fontWeight={600}>
                  Confirm Booking
                </Typography>
                <Typography variant="p" fontSize={15}>
                  Please enter your email address to confirm booking for{" "}
                  <strong>{selectedTime}</strong> on
                  <strong>
                    {" "}
                    {moment(new Date(selectedDate)).format("ddd, DD MMM")}
                  </strong>
                </Typography>
              </Box>
              <TextField
                label="Email address"
                type="email"
                required
                value={email}
                onChange={handleEmail}
              />
  
              <Box display="flex" gap={2}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ fontSize: 18, boxShadow: "none" }}
                >
                  Confirm
                </Button>
                <Button
                  type="button"
                  variant="outlined"
                  sx={{ fontSize: 18 }}
                  onClick={handleOpen}
                >
                  Cancel
                </Button>
              </Box>
            </Stack>
          </form>
        </Box>
      </Modal>
    );
  }