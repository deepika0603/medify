import { IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const PrevButton = ({swiperRef}) => {
  
  return (
    <IconButton
      onClick={() => swiperRef.current.slidePrev()}
      sx={{ border: "0.5px solid gray" }}
    >
      <NavigateBeforeIcon sx={{ color: "#2AA7FF" }} />
    </IconButton>
  );
};

const NextButton = ({swiperRef}) => {
  
  return (
    <IconButton
      onClick={() => swiperRef.current.slideNext()}
      sx={{ border: "0.5px solid gray" }}
    >
      <NavigateNextIcon sx={{ color: "#2AA7FF" }} />
    </IconButton>
  );
};

export { PrevButton, NextButton };