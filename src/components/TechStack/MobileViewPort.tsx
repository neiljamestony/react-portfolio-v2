import { Typography, Box, Stack } from "@mui/material"
import { SubHeaderTitle, SubHeaderContentContainer, SubHeaderContent, MobileViewPortTechStackTitle } from "./Style";

export default function MobileViewPort() {
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
        <Box sx={MobileViewPortTechStackTitle}>Tech Stack</Box>
        <Box mt={3} ml={1.5}>
            <Stack spacing={1}>
                <Box>
                    <Typography variant="body1" sx={SubHeaderTitle}>Frontend</Typography>
                    <Box sx={SubHeaderContentContainer}>
                        {frontendTech.map((tech, index) => (
                            <Typography key={index} variant="caption" sx={SubHeaderContent}>
                            {tech}
                            </Typography>
                        ))}
                    </Box>
                </Box>
                <Box>
                    <Typography variant="body1" sx={SubHeaderTitle}>Backend</Typography>
                    <Box sx={SubHeaderContentContainer}>
                        {backendTech.map((tech, index) => (
                            <Typography key={index} variant="caption" sx={SubHeaderContent}>
                            {tech}
                            </Typography>
                        ))}
                    </Box>     
                </Box>
                <Box>
                    <Typography variant="body1" sx={SubHeaderTitle}>Devops & Cloud</Typography>
                    <Box sx={SubHeaderContentContainer}>
                        {devOpsTech.map((tech, index) => (
                            <Typography key={index} variant="caption" sx={SubHeaderContent}>
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
