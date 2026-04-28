import { useState } from 'react'
import { Grid, Box, Typography, Button, FormControlLabel, Stack } from '@mui/material'
import { CalendarSync, MailPlus, Download, CircleUser } from 'lucide-react'
import { ProfileImageContainer, ProfileName, Location, SendEmail, ScheduleACall } from './Style'
import SendEmailComponent from '../SendEmail/SendEmail'
import { useAppSelector, useAppDispatch } from '../../redux/hook/hook'
import { setTheme } from '../../redux/reducer/ThemeReducer'
import { MaterialUISwitch } from './DesktopViewPort'

export default function TabletViewPort() {
    const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.themeState)
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
    <Box>
      <Grid container spacing={1}>
        <Grid size={3}>
          <Box
            component="img"
            src="/image/profile.jpeg"
            alt="profile-img"
            sx={ProfileImageContainer}
          />
        </Grid>
        <Grid size={9}>
          <Stack spacing={2}>
            <Grid container>
              <Grid size={10}>
                  <Typography variant="h6" gutterBottom sx={{...ProfileName, color: theme === "dark" ? "#fff" : "black" }}>Neil James Tony Perdigon
                    <Box component="img" src="/image/metaicon.png" alt="meta-icon" sx={{ height: 20, width: 20, mt: -1 }}/>
                  </Typography>
              </Grid>
              <Grid size={2}>
                <FormControlLabel
                  control={<MaterialUISwitch sx={{ m: 0 }} />}
                  label=""
                  onChange={() => dispatch(setTheme(theme === "light" ? "dark" : "light"))}
                  labelPlacement="bottom"
                />
              </Grid>
            </Grid>
            <Typography variant="subtitle2" sx={{...Location, color: theme === "dark" ? "#fff" : "black" }}>📍 Metro Manila, Philippines</Typography>
            <Box display="flex" alignItems="center" justifyContent="initial" gap={0.5} mb={1}>
              <CircleUser size={16} color={theme === "dark" ? "#fff" : "black" }/>
              <Typography variant="subtitle2" sx={{...Location, color: theme === "dark" ? "#fff" : "black" }}>Software Engineer</Typography>
            </Box>
            <Grid spacing={2} container>
              <Grid size={4}>
                <Button variant="outlined" startIcon={<CalendarSync size={16}/>} onClick={scheduleCallEvent} sx={{...ScheduleACall,
                  backgroundColor: theme === "dark" ? "#fff" : "black",
                  color: theme === "dark" ? "black" : "#fff"
                }}>
                  Schedule a call
                </Button>
              </Grid>
              <Grid size={4}>
                <Button variant="outlined" startIcon={<MailPlus size={16}/>} sx={{...SendEmail,
                  color: theme === "dark" ? "#fff" : "black",
                  borderColor: theme === "dark" ? "#fff" : "black"
                }} onClick={() => setOpen(true)}>
                  Send Email
                </Button>
              </Grid>
              <Grid size={4}>
                <Button onClick={handleDownloadCV} variant="outlined" startIcon={<Download size={16}/>} sx={{...SendEmail,
                  color: theme === "dark" ? "#fff" : "black",
                  borderColor: theme === "dark" ? "#fff" : "black"
                }}>
                  Download CV
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
      <SendEmailComponent open={open} handleClose={() => setOpen(false)}/>
    </Box>
  )
}
