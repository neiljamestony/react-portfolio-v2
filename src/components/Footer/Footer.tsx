import { Divider, Box, Typography } from "@mui/material"
import { useAppSelector } from "../../redux/hook/hook"

export default function Footer() {
  const { theme } = useAppSelector((state) => state.themeState)
  return (
    <Box sx={{ height: 70, marginTop: 20, marginBottom: 5 }}>
        <Divider/>
        <Box textAlign="center" color={theme === "dark" ? "#fff" : "black"} mt={5}>
            <Typography variant="subtitle2" sx={{ fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: "normal", fontStyle: "italic" }}>&copy; 2025 Neil James Tony Perdigon. All rights reserved.</Typography>
        </Box>
    </Box>
  )
}
