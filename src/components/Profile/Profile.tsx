import { Grid, Typography, Stack, Button, Box } from '@mui/material'
import { Calendar, Mail } from 'lucide-react'

export default function Profile() {
  return (
    <Grid container spacing={2}>
      <Grid size={2.5}>
        <Box
          component="img"
          src="/image/profile.jpeg"
          alt="profile-img"
          sx={{
            width: 160,
            height: 160,
            borderRadius: '8px',
            objectFit: 'cover',
          }}
        />
      </Grid>
      <Grid size={9.5}>
        <Stack spacing={1}>
          <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Poppins, sans-serif', color: 'black', fontWeight: 'bold' }}>Neil James Tony Perdigon</Typography>
          <Typography variant="subtitle2" sx={{ color: 'black', fontFamily: 'Poppins, sans-serif' }}>📍 Metro Manila, Philippines</Typography>
          <Typography variant="subtitle1" sx={{ color: 'black', fontFamily: 'Poppins, sans-serif' }}>Software Engineer</Typography>
          <Grid spacing={2} container>
            <Grid size={4}>
              <Button variant="outlined" startIcon={<Calendar />} sx={{ fontFamily: 'Poppins, sans-serif', backgroundColor: 'black', color: '#fff', borderColor: 'black', textTransform: 'none', width: '100%', fontSize: 12, fontWeight: 400, fontStyle: 'normal' }}>
                Schedule a call
              </Button>
            </Grid>
            <Grid size={4}>
              <Button variant="outlined" startIcon={<Mail />} sx={{ fontFamily: 'Poppins, sans-serif', color: 'black', borderColor: 'black', textTransform: 'none', width: '100%', fontSize: 12, fontWeight: 400, fontStyle: 'normal' }}>
                Send Email
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  )
}
