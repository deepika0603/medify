import {
  Container,
  Box,
  Typography,
  Stack,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/logo.jpg";
import { useState } from "react";
import { Link, useLocation } from "react-router";

export default function NavBar({ background }) {
  const [navOptions, setNavOptions] = useState([
    { name: "Find Doctors", path: "#" },
    { name: "Hospitals", path: "/search" },
    { name: "Medicines", path: "#" },
    { name: "Surgeries", path: "#" },
    { name: "Software for Provider", path: "#" },
    { name: "Facilities", path: "#" },
  ]);
  return (
    <header>
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "primary.contrastText",
          textAlign: "center",
          p: 1,
        }}
      >
        <Typography>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>
      <Container
        sx={{
          height: "96px",
          display: "flex",
          background: background,
          px: { xs: 5, md: 15 },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
        maxWidth={false}
        disableGutters
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
          spacing={5}
        >
          {/* Logo */}
          <Box>
            <Link to="/">
              <img
                src={logo}
                alt="Medify Logo"
                width="92px"
                height="27px"
              />
            </Link>
          </Box>

          <TemporaryDrawer options={navOptions} />
        </Stack>
      </Container>
    </header>
  );
}

function TemporaryDrawer({ options }) {
  const { pathname } = useLocation();
  // console.log(pathname);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <IconButton onClick={() => toggleDrawer(false)} sx={{ ml: "200px" }}>
          <CloseIcon />
        </IconButton>
        {options.map((option) => {
          const isActive = pathname === option.path;
          return (
            <ListItem disablePadding key={option.name}>
              <ListItemButton
                component={Link}
                to={option.path}
                sx={{
                  textDecoration: "none",
                  color: isActive ? "white" : "#2AA8FF",
                  backgroundColor: isActive && "#2AA8FF",
                  "&:hover": {
                    backgroundColor: "#2AA8FF",
                    color: "white",
                    "& .MuiListItemText-primary": {
                      color: "white",
                    },
                  },
                }}
              >
                <ListItemText primary={option.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
        <ListItem>
          <Link to="/my-bookings">
            <Button variant="contained">My Bookings</Button>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{ display: { xs: "block", lg: "none" } }}>
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
          {DrawerList}
        </Drawer>
      </Box>
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <Stack direction="row" gap={5}>
          {options.map((option) => {
            const isActive = pathname === option.path;
            return (
              <Link
                key={option.name}
                style={{
                  textDecoration: "none",
                  color: isActive ? "#2AA8FF" : "black",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: isActive && 700,
                }}
                to={option.path}
              >
                {option.name}
              </Link>
            );
          })}
          <Link to="/my-bookings">
            <Button variant="contained">My Bookings</Button>
          </Link>
        </Stack>
      </Box>
    </div>
  );
}