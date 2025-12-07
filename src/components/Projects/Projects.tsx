import { Card, CardContent, Typography, Box, Icon, Grid, CardHeader, CardActions } from '@mui/material'
import { FolderGit2 } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      name: "Quiz App",
      description: "Quiz application built with React and TypeScript.",
      repoLink: "https://quiz-daily.netlify.app/"
    },
    {
      name: "Authentication Module",
      description: "Authentication module using Node.js and Express.",
      repoLink: "https://github.com/neiljamestony/authentication-module"
    },
    {
      name: "Chatify",
      description: "Real-time chat application using the MERN stack",
      repoLink: "https://github.com/neiljamestony/mern-chat"
    },
    {
      name: "Contact App",
      description: "CRUD built on MERN stack.",
      repoLink: "https://github.com/neiljamestony/contact-app"
    },
  ];

  return (
    <Card variant="outlined">
        <CardContent>
            <Box sx={{ 
              display: 'flex',
              justifyContent: 'start',
              gap: 1,
              alignItems: 'center' 
            }}>
            <Icon><FolderGit2 /></Icon>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', marginTop: 1.5 }}>
                Projects
            </Typography>
          </Box>
          <Box>
            <Grid container spacing={2}>
              {
                projects.map((project, index) => (
                  <Grid size={6} key={index}>
                    <Card variant="outlined">
                      <CardHeader title={<Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>{project.name}</Typography>}/>
                      <CardContent>
                        <Typography variant="subtitle2">{project.description}</Typography>
                      </CardContent>
                      <CardActions>
                        <a href={project.repoLink} style={{ backgroundColor: "#f6f6f6", borderRadius: 2, padding: 0.5, fontSize: 13, textDecoration: "none", color: 'black' }}>{project.repoLink.replace("https://", "")}</a>
                      </CardActions>
                    </Card>
                  </Grid>
                ))
              }
            </Grid>
          </Box>
        </CardContent>
    </Card>
  )
}
