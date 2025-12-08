import { Grid, Typography, Stack, Button, Box } from '@mui/material'
import { Calendar, Mail, FileDown } from 'lucide-react'
import { ProfileImageContainer, ProfileName, Location, ScheduleACall, SendEmail } from './Style'

export default function Profile() {
  return (
    <Grid container spacing={2}>
      <Grid size={2.5}>
        <Box
          component="img"
          src="/image/profile.jpeg"
          alt="profile-img"
          sx={ProfileImageContainer}
        />
      </Grid>
      <Grid size={9.5}>
        <Stack spacing={1}>
          <Typography variant="h6" gutterBottom sx={ProfileName}>Neil James Tony Perdigon</Typography>
          <Typography variant="subtitle2" sx={Location}>📍 Metro Manila, Philippines</Typography>
          <Typography variant="subtitle1" sx={Location}>Software Engineer</Typography>
          <Grid spacing={2} container>
            <Grid size={4}>
              <Button variant="outlined" startIcon={<Calendar size={16}/>} sx={ScheduleACall}>
                Schedule a call
              </Button>
            </Grid>
            <Grid size={4}>
              <Button variant="outlined" startIcon={<Mail size={16}/>} sx={SendEmail}>
                Send Email
              </Button>
            </Grid>
            <Grid size={4}>
              <Button variant="outlined" startIcon={<FileDown size={16}/>} sx={SendEmail}>
                Download CV
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  )
}
