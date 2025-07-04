import { useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

export default function MyAccordion({ questionData, index }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const isOpen = expandedIndex === index;
  return (
    <Accordion
     expanded={isOpen}
      onChange={() => setExpandedIndex(isOpen ? false : index)}
      sx={{
        boxShadow: "none",
        "&::before": {
          display: "none",
        },
      }}
      disableGutters
    >
      <AccordionSummary
        expandIcon={
          isOpen ? (
            <IoMdClose fontSize="23px" strokeWidth={25} color="#2AA7FF" />
          ) : (
            <IoMdAdd fontSize="23px" strokeWidth={25} color="#2AA7FF" />
          )
        }
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          my: 0, // default margin
          "&.Mui-expanded": {
            minHeight: "48px", // default collapsed height
            my: 0, // remove margin on expand
          },
          "& .MuiAccordionSummary-content.Mui-expanded": {
            margin: 0, // remove spacing around content
          },
        }}
      >
        <Typography component="span" color="#1B3C74" fontWeight={600}>
          {questionData.question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ fontSize: "14px" }}>
        {questionData.answer}
      </AccordionDetails>
    </Accordion>
  );
}