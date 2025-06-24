import { Box, Typography } from "@mui/material";

export default function IconCard({
  icon,
  text,
  bgcolor,
  selected = false,
  boxshadow = false,
}) {
  return (
    <Box
    height="100%"
      borderRadius="10px"
      border={selected ? "2px solid #2AA7FF" : "none"}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor={selected ? "#eef8ff" : bgcolor}
      py={4}
      boxShadow={boxshadow ? "0px 34px 44px #D5DBE470 " : "none"}
    >
      <img
        src={icon}
        alt={`${text}_icon`}
        style={{ objectFit: "cover", width: "60px", height: "60px" }}
      />
      <Typography
        marginTop="20px"
        variant="h5"
        color="#ABB6C7"
        px={3}
        textAlign="center"
      >
        {text}
      </Typography>
    </Box>
  );
}