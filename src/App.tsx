import './App.css'
import { Container, Stack, Grid } from '@mui/material'
import Profile from './components/Profile/Profile'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Blogs from './components/Blogs/Blogs'
import Testimonials from './components/Testimonials/Testimonials'
import TechStack from './components/TechStack/TechStack'
function App() {

  return (
    <Container maxWidth="md">
      <Stack spacing={1}>
        <Profile/>
        <Grid container spacing={1}>
          <Grid size={8}>
            <Stack spacing={1}>
              <About/>
              <TechStack/>
            </Stack>
          </Grid>
          <Grid size={4}>
            <Experience/>
          </Grid>
        </Grid>
        <Projects/>
        <Blogs/>
        <Testimonials/>
      </Stack>
    </Container>
  )
}

export default App
