import { Stack, Grid, Container } from '@mui/material'
import MobileViewPort from './Profile/MobileViewPort'

import MobileViewPortTechStack from './TechStack/MobileViewPort'
import MobileViewPortExperience from './Experience/MobileViewPort'
import MobileViewPortSocial from './Social/MobileViewPort'
import MobileViewPortProjects from './Projects/MobileViewPort'
import MobileViewPortRecommendations from './Recommendations/MobileViewPort'

import About from './About/About'

export default function MobileContent() {
  return (
    <Container maxWidth="md" sx={{ margin: 0, padding: 0 }}>
        <Stack spacing={1}>
            <MobileViewPort/>
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
    </Container>
  )
}
