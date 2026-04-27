import { Box, Stack } from '@mui/material'
import { Link } from 'lucide-react'
import { MobileProjectTitle, ProjectContainer, ProjectLink, ProjectName } from './Style';
import { useAppSelector } from '../../redux/hook/hook';

export default function Projects() {
  const { theme } = useAppSelector((state) => state.themeState)
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
    <Box mb={5}>
        <Box sx={{...MobileProjectTitle, color: theme === "dark" ? "#fff" : "black"}}>Projects</Box>
        <Box mt={3} ml={1.5}>
            <Stack spacing={1}>
            {
                projects.map((project, index) => (
                  <Box sx={{...ProjectContainer,
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

                  }} key={index} onClick={() => openLink(project.repoLink)}>
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
