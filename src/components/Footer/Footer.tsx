import { Divider, Box, Typography } from "@mui/material"

export default function Footer() {
  return (
    <Box sx={{ height: 50, marginTop: 10 }}>
        <Divider/>
        <Box textAlign="center" color="black" mt={5}>
            <Typography variant="subtitle2" sx={{ fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: "normal", fontStyle: "italic" }}>&copy; 2025 Neil James Tony Perdigon. All rights reserved.</Typography>
        </Box>
    </Box>
  )
}
