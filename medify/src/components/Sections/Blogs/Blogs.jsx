import {
    Box,
    Container,
    Typography,
    Stack,
    Divider,
    Grid,
  } from "@mui/material";
  import Detox from "../../../assets/news_card.jpg";
  import Rebecca from "../../../assets/rebecca_lee.png";
  
  export default function Blogs() {
    return (
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          background:
            "linear-gradient(to right, #E7F0FF 0%, #E8F1FF 47%, #E8F1FF 100%)",
          px: { xs: 5, md: 15 },
          py: 8,
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
              Blogs & News
            </Typography>
            <Typography color="#1B3C74" variant="h3" fontWeight="600">
              Read Our Latest News
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            <Grid size={{ sm: 12, lg: 4 }}>
              <Box
                width="100%"
                sx={{ backgroundColor: "white", borderRadius: 2 }}
              >
                <Box component="img" width="100%" src={Detox} title="Detox" />
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={1}
                  alignItems="center"
                  mb={1}
                  px={2}
                  pt={1}
                >
                  <Typography color="#77829D">Medical</Typography>
                  <Typography color="#77829D">March 31, 2022</Typography>
                </Stack>
                <Stack flexWrap="wrap" spacing={1} px={2} pt={0.5} pb={2.5}>
                  <Typography color="#1B3C74">
                    6 Tips To Protect Your Mental Health When You're Sick
                  </Typography>
                  <Stack direction="row" alignItems="center" gap="15px">
                    <img src={Rebecca} alt="Rebacca" />
                    <Typography color="#1B3C74">Rebecca Lee</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
            <Grid size={{ sm: 12, lg: 4 }}>
              <Box
                width="100%"
                sx={{ backgroundColor: "white", borderRadius: 2 }}
              >
                <Box component="img" width="100%" src={Detox} title="Detox" />
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={1}
                  alignItems="center"
                  mb={1}
                  px={2}
                  pt={1}
                >
                  <Typography color="#77829D">Medical</Typography>
                  <Typography color="#77829D">March 31, 2022</Typography>
                </Stack>
                <Stack flexWrap="wrap" spacing={1} px={2} pt={0.5} pb={2.5}>
                  <Typography color="#1B3C74">
                    6 Tips To Protect Your Mental Health When You're Sick
                  </Typography>
                  <Stack direction="row" alignItems="center" gap="15px">
                    <img src={Rebecca} alt="Rebacca" />
                    <Typography color="#1B3C74">Rebecca Lee</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
            <Grid size={{ sm: 12, lg: 4 }}>
              <Box
                width="100%"
                sx={{ backgroundColor: "white", borderRadius: 2 }}
              >
                <Box component="img" width="100%" src={Detox} title="Detox" />
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={1}
                  alignItems="center"
                  mb={1}
                  px={2}
                  pt={1}
                >
                  <Typography color="#77829D">Medical</Typography>
                  <Typography color="#77829D">March 31, 2022</Typography>
                </Stack>
                <Stack flexWrap="wrap" spacing={1} px={2} pt={0.5} pb={2.5}>
                  <Typography color="#1B3C74">
                    6 Tips To Protect Your Mental Health When You're Sick
                  </Typography>
                  <Stack direction="row" alignItems="center" gap="15px">
                    <img src={Rebecca} alt="Rebacca" />
                    <Typography color="#1B3C74">Rebecca Lee</Typography>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }