import { Box, Stack } from '@mui/material'
import { Link } from 'lucide-react'
import { MobileProjectTitle, ProjectContainer, ProjectLink, ProjectName } from './Style';

export default function MobileViewPort() {
  const projects = [
    {
      name: "Quiz App",
      repoLink: "https://quiz-daily.netlify.app/"
    },
    {
      name: "Authentication Module",
      repoLink: "https://github.com/neiljamestony/authentication-module"
    },
    {
      name: "Chatify",
      repoLink: "https://github.com/neiljamestony/mern-chat"
    },
    {
      name: "Contact App",
      repoLink: "https://github.com/neiljamestony/contact-app"
    },
  ];

  const openLink = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <Box sx={{ height: 200 }}>
        <Box sx={MobileProjectTitle}>Projects</Box>
        <Box mt={3} ml={1.5}>
            <Stack spacing={1}>
            {
                projects.map((project, index) => (
                  <Box sx={ProjectContainer} key={index} onClick={() => openLink(project.repoLink)}>
                      <Box sx={ProjectLink}><Link size={16}/></Box>
                      <Box sx={ProjectName}>{project.name}</Box>
                  </Box>
                ))
            }
            </Stack>
        </Box>
    </Box>
  )
}
