import { Card, CardContent, Typography, Box, Icon, Stack } from '@mui/material'
import { FolderGit2, Link } from 'lucide-react'
import { HeaderContainer, ProjectTitle, ProjectContainer, ProjectLink, ProjectName } from './Style';

export default function Projects() {
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
    <Card variant="outlined" sx={{ minHeight: 363}}>
        <CardContent>
            <Box sx={HeaderContainer}>
            <Icon><FolderGit2 /></Icon>
            <Typography gutterBottom variant="h6" component="div" sx={ProjectTitle}>
                Projects
            </Typography>
          </Box>
          <Box>
            <Stack spacing={2}>
              {
                projects.map((project, index) => (
                  <Box sx={ProjectContainer} onClick={() => openLink(project.repoLink)}>
                    <Box sx={ProjectLink}><Link size={16}/></Box>
                    <Typography key={index} variant="caption" sx={ProjectName}>
                      {project.name}
                  </Typography>
                  </Box>
                ))
              }
            </Stack>
          </Box>
        </CardContent>
    </Card>
  )
}
