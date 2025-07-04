import { Box } from "@mui/material";
import Card from "./Card";


export default function HospitalCard({ type, hospital }) {
  
  return (
    <article>
      <Box bgcolor="white" p={3} borderRadius={3}>
        <Card type={type} hospital={hospital} />
      </Box>
    </article>
  );
}