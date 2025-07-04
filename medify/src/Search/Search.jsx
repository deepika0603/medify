import NavBar from "../components/NavBar/NavBar";
import FAQs from "../components/Sections/FAQs/FAQ";
import DownloadApp from "../components/Sections/DownloadApp/DownloadApp";
import Footer from "../components/Footer/Footer";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import { Box } from "@mui/material";

export default function Search() {
    return (
        <div>
            <NavBar background="white" />
            <Box
        width="100%"
        height={{xs: "260px", md: "110px"}}
        sx={{
          background: "linear-gradient(to right, #2AA7FF, #0C8CE5)",
          display: "flex",
          justifyContent: "center"
        }}
        position="relative"
        borderRadius="0px 0px 16px 16px"

      >
        <Box position="absolute" top={55} width="82%" backgroundColor="white" p={3} borderRadius={4}>
          <SearchHospital />
        </Box>
      </Box>
      <FAQs />
      <DownloadApp />
      <Footer />
        </div>
    );
}