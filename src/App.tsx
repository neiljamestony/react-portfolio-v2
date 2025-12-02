import './App.css'
import { Container, Stack } from '@mui/material'
import Profile from './components/Profile/Profile'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Blogs from './components/Blogs/Blogs'
import Testimonials from './components/Testimonials/Testimonials'
function App() {

  return (
    <Container maxWidth="md">
      <Stack spacing={0.5}>
        <Profile/>
        <About/>
        <Experience/>
        <Projects/>
        <Blogs/>
        <Testimonials/>
      </Stack>
    </Container>
  )
}

export default App
