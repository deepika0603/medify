import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/HeroSlider/Hero";
import Offers from "../components/Sections/Offers/Offers";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import { Box } from "@mui/material";
import IconLayout from "../components/IconLayout/IconLayout";
import Specialization from "../components/Sections/Specialization/Specialization";
import Specialists from "../components/Sections/Specialists/Specialists";
import FAQs from "../components/Sections/FAQs/FAQ";
import Blogs from "../components/Sections/Blogs/Blogs";
import DownloadApp from "../components/Sections/DownloadApp/DownloadApp";
import PatientCaring from "../components/Sections/PatientCaring/PatientCaring";
import OurFamilies from "../components/Sections/OurFamilies/OurFamilies";

export default function Home() {
  return (
    <div>
      <NavBar background="linear-gradient(to right, #E7F0FF 0%, #E8F1FF 47%, #E8F1FF 100%)" />
      <Hero />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"


        gap="70px"Add commentMore actions
        bgcolor="white"
        sx={{
          mx: { xs: 1, md: 15 },
          boxShadow: "6px 6px 35px 0 #D5DBE470",
          borderRadius: "8px",
          position: "relative",
          top: {
            xs: "-90px",
            sm: "-75px",
            md: "-60px",
            lg: "-50px",
            xl: "-120px",
          },
        }}
        py={3}
        px={3}
      >
        <SearchHospital />
        <IconLayout />
      </Box>
      <Offers />
      <Specialization />
      <Specialists />
      <PatientCaring />
      <Blogs/>
      <OurFamilies />
      <FAQs />
      <DownloadApp />
      <Footer />
    </div>
  );
}
