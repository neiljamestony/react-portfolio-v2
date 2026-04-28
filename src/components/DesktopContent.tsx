
import { Stack, Grid, Container } from '@mui/material'

import About from './About/About'
import Experience from './Experience/Experience'
import DesktopViewPort from './Profile/DesktopViewPort'
import TechStack from './TechStack/TechStack'
import Social from './Social/Social'
import Projects from './Projects/Projects'
import Recommendations from './Recommendations/Recommendations'

export default function DesktopContent() {
  return (
    <Container maxWidth="md">
        <Stack spacing={1}>
            <DesktopViewPort/>
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
    </Container>
  )
}
