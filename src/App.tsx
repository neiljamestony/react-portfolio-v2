import './App.css'
import { Container, Stack, Grid, useMediaQuery, useTheme } from '@mui/material'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Recommendations from './components/Recommendations/Recommendations'
import TechStack from './components/TechStack/TechStack'
import Social from './components/Social/Social';
import Footer from './components/Footer/Footer'


// DESKTOP
import DesktopProfile from './components/Profile/DesktopViewPort'

// MOBILE
import MobileViewPortProfile from './components/Profile/MobileViewPort'
import MobileViewPortExperience from './components/Experience/MobileViewPort'
import MobileViewPortSocial from './components/Social/MobileViewPort'
import MobileViewPortProjects from './components/Projects/MobileViewPort'
import MobileViewPortRecommendations from './components/Recommendations/MobileViewPort'
import MobileViewPortTechStack from './components/TechStack/MobileViewPort'

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isDesktopXL = useMediaQuery(theme.breakpoints.down("xl"));

  if(isMobile){
    return (
      <Container maxWidth="md">
        <Stack spacing={1}>
          <MobileViewPortProfile/>
          <Grid container spacing={1}>
            <Grid size={12}>
              <About/>
            </Grid>
            <Grid size={12}>
              <MobileViewPortTechStack/>
            </Grid>
            <Grid size={12}>
              <MobileViewPortExperience/>
            </Grid>
            <Grid size={12}>
              <MobileViewPortSocial/>
            </Grid>
            <Grid size={12}>
              <MobileViewPortProjects/>
            </Grid>
            <Grid size={12}>
              <MobileViewPortRecommendations/>
            </Grid>
          </Grid>
        </Stack>
        <Footer/>
      </Container>
    )
  }else if(isTablet){
    return (
      <Container maxWidth="md">
        <Stack spacing={1}>
          <MobileViewPortProfile/>
          <Grid container>
            <Grid size={12}>
              <About/>
            </Grid>
            <Grid size={12}>
             <Experience/>
            </Grid>
            <Grid size={12}>
              <TechStack/>
            </Grid>
            <Grid size={12}>
              <Social/>
            </Grid>
            <Grid size={12}>
              <Projects/>
            </Grid>
            <Grid size={12}>
              <Recommendations/>
            </Grid>
          </Grid>
        </Stack>
        <Footer/>
      </Container>
    )
  }else if(isDesktop || isDesktopXL){
    return (
      <Container maxWidth="md">
        <Stack spacing={1}>
          <DesktopProfile/>
          <Grid container>
            <Grid size={12}>
              <About/>
            </Grid>
            <Grid size={12}>
             <Experience/>
            </Grid>
            <Grid size={12}>
              <TechStack/>
            </Grid>
            <Grid size={12}>
              <Social/>
            </Grid>
            <Grid size={12}>
              <Projects/>
            </Grid>
            <Grid size={12}>
              <Recommendations/>
            </Grid>
          </Grid>
        </Stack>
        <Footer/>
      </Container>
    )
  }
}

export default App
