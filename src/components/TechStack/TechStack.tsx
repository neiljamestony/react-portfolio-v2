import { Typography, Card, CardContent, Box, Icon, CardHeader } from "@mui/material"
import { Cpu } from 'lucide-react'

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
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', marginTop: 1.5 }}>
            Tech Stack
            </Typography>
        }
        />
        <CardContent>
          <Box>
            <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>Frontend</Typography>
              <Box sx={{ display: 'flex', alignItems: 'self-start', justifyContent: 'start', gap: 1, marginTop: 1, flexWrap: 'wrap' }}>
                {frontendTech.map((tech, index) => (
                    <Typography key={index} variant="caption" sx={{ fontFamily: 'Poppins, sans-serif', border: '1px solid #e1e1e1', borderRadius: 2, padding: 0.5, fontSize: 13, paddingLeft: 1, paddingRight: 1 }}>
                      {tech}
                    </Typography>
                ))}
              </Box>
          </Box>
          <Box mt={2}>
            <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>Backend</Typography>
              <Box sx={{ display: 'flex', alignItems: 'self-start', justifyContent: 'start', gap: 1, marginTop: 1, flexWrap: 'wrap' }}>
                {backendTech.map((tech, index) => (
                    <Typography key={index} variant="caption" sx={{ fontFamily: 'Poppins, sans-serif', border: '1px solid #e1e1e1', borderRadius: 2, padding: 0.5, fontSize: 13, paddingLeft: 1, paddingRight: 1 }}>
                      {tech}
                    </Typography>
                ))}
              </Box>
          </Box>
          <Box mt={2}>
            <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>Devops & Cloud</Typography>
              <Box sx={{ display: 'flex', alignItems: 'self-start', justifyContent: 'start', gap: 1, marginTop: 1, flexWrap: 'wrap' }}>
                {devOpsTech.map((tech, index) => (
                    <Typography key={index} variant="caption" sx={{ fontFamily: 'Poppins, sans-serif', border: '1px solid #e1e1e1', borderRadius: 2, padding: 0.5, fontSize: 13, paddingLeft: 1, paddingRight: 1 }}>
                      {tech}
                    </Typography>
                ))}
              </Box>
          </Box>
        </CardContent>
    </Card>
  )
}
