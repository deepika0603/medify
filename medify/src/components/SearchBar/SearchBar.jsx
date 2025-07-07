import { TextField, Box, Button, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function SearchBar({
  filterBookings,
  totalBookings
}) {
  const [inputText, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 2, sm: 3 }}
      justifyContent="center"
    >
      <TextField
        type="text"
        label="Search By Hospital"
        variant="outlined"
        fullWidth
        value={inputText}
        onChange={handleInput}
      />
      <Button
        variant="contained"
        sx={{ borderRadius: 2, boxShadow: "none", px: 5, fontSize: "18px" }}
        onClick={() => filterBookings(inputText, totalBookings)}
      >
        {" "}
        <SearchIcon sx={{ fontSize: 25, mr: 1 }} />
        Search
      </Button>
    </Stack>
  );
}