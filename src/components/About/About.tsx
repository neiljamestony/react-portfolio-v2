import { Stack, Typography, Box } from "@mui/material"
import { AboutTitle, AboutDescription } from "./Style"
import { useAppSelector } from "../../redux/hook/hook"

export default function About() {
    const { theme } = useAppSelector((state) => state.themeState)
    return (
        <Box mb={2}>
            <Box sx={{...AboutTitle, color: theme === "dark" ? "#fff" : "black"}}>About</Box>
            <Box sx={{ padding: 0, margin: 0 }}>
                <Stack spacing={1}>
                    <Typography variant="body2" sx={{...AboutDescription, color: theme === "dark" ? "#fff" : "text.secondary" }}>
                        I am a Web Developer from 📍 Metro Manila with 6 years of hands-on experience in building modern, 
                        user-friendly, and efficient full stack web applications. 
                    </Typography>
                    <Typography variant="body2" sx={{...AboutDescription, color: theme === "dark" ? "#fff" : "text.secondary"}}>
                        As a self-taught developer, I am passionate about continuous learning and always exploring new tools that help me create better digital experiences. I take pride in writing clean, maintainable code and delivering solutions that align with user needs and business goals.
                    </Typography>
                    <Typography variant="body2" sx={{...AboutDescription, color: theme === "dark" ? "#fff" : "text.secondary" }}>
                        I hold a Bachelor’s degree in Computer Science from St. Clare College of Caloocan, which helped strengthen my foundation in software engineering. With my combination of experience, dedication, and curiosity, I strive to contribute to impactful projects and grow further in the tech industry.
                    </Typography>
                </Stack>
            </Box>
        </Box>
    )
}
