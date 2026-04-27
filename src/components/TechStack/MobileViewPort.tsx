import { Typography, Box, Stack } from "@mui/material"
import { SubHeaderTitle, SubHeaderContentContainer, SubHeaderContent, MobileViewPortTechStackTitle } from "./Style";
import { useAppSelector } from "../../redux/hook/hook";

export default function MobileViewPort() {
    const { theme } = useAppSelector((state) => state.themeState)
    const frontendTech = [
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "React Testing Library",
        "Jest",
        "Mocha & Chai"
    ];

    const backendTech = [
        "Node.js",
        "Express.js",
        "PHP",
        "Laravel",
        "MongoDB",
        "MySQL",
        "PostgreSQL"
    ];

    const devOpsTech = [
        "Azure",
        "Git",
        "GitHub",
        "GitLab"
    ];

    return (
        <Box mb={2}>
            <Box sx={{...MobileViewPortTechStackTitle, color: theme === "dark" ? "#fff" : "black"}}>Tech Stack</Box>
            <Box mt={3} ml={1.5}>
                <Stack spacing={1}>
                    <Box>
                        <Typography variant="body1" sx={{...SubHeaderTitle, color: theme === "dark" ? "#fff" : "black"}}>Frontend</Typography>
                        <Box sx={SubHeaderContentContainer}>
                            {frontendTech.map((tech, index) => (
                                <Typography key={index} variant="caption" sx={{...SubHeaderContent,
                                    border: 1,
                                    borderColor: theme === "dark" ? "#e1e1e1" : "text.secondary",
                                    backgroundColor: theme === "dark" ? "#fff" : "none",
                                    borderRadius: 2, 
                                    "&:hover": {
                                        color: "#fff",
                                        backgroundColor: "black",
                                        border: 'none'
                                    },
                                    color: theme === "dark" ? "black" : "text.secondary"
                                }}>
                                {tech}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant="body1" sx={{...SubHeaderTitle, color: theme === "dark" ? "#fff" : "black"}}>Backend</Typography>
                        <Box sx={SubHeaderContentContainer}>
                            {backendTech.map((tech, index) => (
                                <Typography key={index} variant="caption" sx={{...SubHeaderContent,
                                    border: 1,
                                    borderColor: theme === "dark" ? "#e1e1e1" : "text.secondary",
                                    backgroundColor: theme === "dark" ? "#fff" : "none",
                                    borderRadius: 2, 
                                    "&:hover": {
                                        color: "#fff",
                                        backgroundColor: "black",
                                        border: 'none'
                                    },
                                    color: theme === "dark" ? "black" : "text.secondary"
                                }}>
                                {tech}
                                </Typography>
                            ))}
                        </Box>     
                    </Box>
                    <Box>
                        <Typography variant="body1" sx={{...SubHeaderTitle, color: theme === "dark" ? "#fff" : "black"}}>Devops & Cloud</Typography>
                        <Box sx={SubHeaderContentContainer}>
                            {devOpsTech.map((tech, index) => (
                                <Typography key={index} variant="caption" sx={{...SubHeaderContent,
                                    border: 1,
                                    borderColor: theme === "dark" ? "#e1e1e1" : "text.secondary",
                                    backgroundColor: theme === "dark" ? "#fff" : "none",
                                    borderRadius: 2, 
                                    "&:hover": {
                                        color: "#fff",
                                        backgroundColor: "black",
                                        border: 'none'
                                    },
                                    color: theme === "dark" ? "black" : "text.secondary"
                                }}>
                                {tech}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}
