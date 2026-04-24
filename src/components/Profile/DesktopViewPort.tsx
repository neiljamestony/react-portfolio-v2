import { useState } from 'react'
import { Grid, Box, Stack, Typography, Button } from '@mui/material'
import { ProfileName, ProfileImageContainer, Location, ScheduleACall, SendEmail } from './Style'
import { Calendar, Mail, FileDown } from 'lucide-react'
import SendEmailComponent from '../SendEmail/SendEmail'

export default function DesktopViewPort() {
    const [open, setOpen] = useState(false)
    const handleDownloadCV = () => {
        window.open(
        "https://drive.google.com/uc?export=download&id=1rtApoh0XeyYioJHxUaMxRknp4Se6gsd3",
        "_blank"
        );
    }

    const scheduleCallEvent = () => {
        const url ="https://calendar.google.com/calendar/render?action=TEMPLATE" + "&text=Scheduled%20Call%20with%20James" +
        "&details=Let%27s%20discuss%20your%20project%20or%20opportunities." + "&location=Google%20Meet";
        window.open(url, "_blank");
    };
  return (
    <>
        <Grid container spacing={2}>
          <Grid size={2.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
                  <Button variant="outlined" startIcon={<Calendar size={16}/>} onClick={scheduleCallEvent} sx={ScheduleACall}>
                    Schedule a call
                  </Button>
                </Grid>
                <Grid size={4}>
                  <Button variant="outlined" startIcon={<Mail size={16}/>} sx={SendEmail} onClick={() => setOpen(true)}>
                    Send Email
                  </Button>
                </Grid>
                <Grid size={4}>
                  <Button onClick={handleDownloadCV} variant="outlined" startIcon={<FileDown size={16}/>} sx={SendEmail}>
                    Download CV
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
        <SendEmailComponent open={open} handleClose={() => setOpen(false)}/>
      </> 
  )
}
