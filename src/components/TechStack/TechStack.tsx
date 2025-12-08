import { Typography, Card, CardContent, Box, Icon, CardHeader } from "@mui/material"
import { Cpu } from 'lucide-react'
import { HeaderTitle, SubHeaderTitle, SubHeaderContentContainer, SubHeaderContent } from "./Style";

export default function TechStack() {
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
    <Card variant="outlined">
      <CardHeader avatar={
            <Icon><Cpu /></Icon>
        }
        title={
            <Typography gutterBottom variant="h6" component="div" sx={HeaderTitle}>
            Tech Stack
            </Typography>
        }
        />
        <CardContent>
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
          <Box mt={2}>
            <Typography variant="body1" sx={SubHeaderTitle}>Backend</Typography>
              <Box sx={SubHeaderContentContainer}>
                {backendTech.map((tech, index) => (
                    <Typography key={index} variant="caption" sx={SubHeaderContent}>
                      {tech}
                    </Typography>
                ))}
              </Box>
          </Box>
          <Box mt={2}>
            <Typography variant="body1" sx={SubHeaderTitle}>Devops & Cloud</Typography>
              <Box sx={SubHeaderContentContainer}>
                {devOpsTech.map((tech, index) => (
                    <Typography key={index} variant="caption" sx={SubHeaderContent}>
                      {tech}
                    </Typography>
                ))}
              </Box>
          </Box>
        </CardContent>
    </Card>
  )
}
