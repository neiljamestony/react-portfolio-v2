import './App.css'
import { Container, Stack, Grid } from '@mui/material'
import Profile from './components/Profile/Profile'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Recommendations from './components/Recommendations/Recommendations'
import TechStack from './components/TechStack/TechStack'
import Social from './components/Social/Social';
import Footer from './components/Footer/Footer'

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
            <Stack spacing={1}>
              <Experience/>
              <Social/>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid size={6}>
            <Projects/>
          </Grid>
          <Grid size={6}>
            <Recommendations/>
          </Grid>
        </Grid>
      </Stack>
      <Footer/>
    </Container>
  )
}

export default App
