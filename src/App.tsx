import './App.css'
import { Container, Stack } from '@mui/material'
import Profile from './components/Profile/Profile'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
function App() {

  return (
    <Container maxWidth="md">
      <Stack spacing={0.5}>
        <Profile/>
        <About/>
        <Experience/>
      </Stack>
    </Container>
  )
}

export default App
