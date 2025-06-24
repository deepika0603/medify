import {
    Box,
    FormControl,
    Select,
    MenuItem,
    Stack,
    InputAdornment,
    Button,
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  import { useEffect, useState } from "react";
  import axios from "axios";
  import { useNavigate } from "react-router";
  
  export default function SearchHospital() {
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      if (e.target.name === "state") {
        setSelectedState(e.target.value);
      } else {
        setSelectedCity(e.target.value);
      }
    };
  
    const findStates = async () => {
      try {
        const response = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        // console.log(response.data);
        setStates(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const findCities = async () => {
      try {
        const response = await axios.get(
          `https://meddata-backend.onrender.com/cities/${selectedState}`
        );
        // console.log(response.data);
        setCities(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const redirect = (e) => {
      e.preventDefault();
      if (selectedState && selectedCity) {
        navigate(`/search?state=${selectedState}&city=${selectedCity}`);
      } else {
        return;
      }
    };
  
    useEffect(() => {
      findStates();
    }, []);
  
    useEffect(() => {
      setSelectedCity("");
      if (selectedState) {
        findCities();
      }
    }, [selectedState]);
  
    return (
      <Box width="100%">
        <form onSubmit={redirect}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <FormControl fullWidth>
              <Select
                fullWidth
                inputProps={{ "aria-label": "Without label" }}
                id="demo-simple-select"
                displayEmpty
                value={selectedState}
                renderValue={(selectedState) => {
                  if (selectedState === "") {
                    return <span style={{ color: "#ABB6C7" }}>State</span>;
                  }
                  return selectedState;
                }}
                startAdornment={
                  <InputAdornment>
                    <SearchIcon sx={{ mr: 1, ml: 0.5 }} />
                  </InputAdornment>
                }
                name="state"
                onChange={handleChange}
                sx={{ borderRadius: "8px" }}
                required
              >
                <MenuItem value="" disabled>
                  <em>State</em>
                </MenuItem>
                {states.map((state) => (
                  <MenuItem value={state}>{state}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <Select
                fullWidth
                inputProps={{ "aria-label": "Without label" }}
                id="demo-simple-select"
                displayEmpty
                value={selectedCity}
                renderValue={(selectedCity) => {
                  if (selectedCity === "") {
                    return <span style={{ color: "#ABB6C7" }}>City</span>;
                  }
                  return selectedCity;
                }}
                startAdornment={
                  <InputAdornment>
                    <SearchIcon sx={{ mr: 1, ml: 0.5 }} />
                  </InputAdornment>
                }
                name="city"
                onChange={handleChange}
                sx={{ borderRadius: "8px" }}
                required
              >
                <MenuItem value="" disabled>
                  <em>City</em>
                </MenuItem>
                {cities.map((city) => (
                  <MenuItem value={city}>{city}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: { xs: "40%",sm: "25%", md: "40%", lg: "30%" },
                p: 1.5,
                boxShadow: "none",
                borderRadius: "8px",
              }}
            >
              <SearchIcon sx={{ mr: 1 }} />
              Search
            </Button>
          </Stack>
        </form>
      </Box>
    );
  }