import { useState } from 'react'
import { Grid, Box, Typography, Button, FormControlLabel, Stack } from '@mui/material'
import { CalendarSync, MailPlus, Download } from 'lucide-react'
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
      <Grid container spacing={3}>
        <Grid size={3}>
          <Box
            component="img"
            src="/image/profile.jpeg"
            alt="profile-img"
            sx={ProfileImageContainer}
          />
        </Grid>
        <Grid size={9} sx={{ padding: 1}}>
          <Stack spacing={0.5}>
            <Box display="flex">
              <Box flexGrow={1}>
                <Typography variant="h6" gutterBottom sx={{...ProfileName, color: theme === "dark" ? "#fff" : "black" }}>Neil James Tony Perdigon
                    <Box component="img" src="/image/metaicon.png" alt="meta-icon" sx={{ height: 20, width: 20, mt: -1 }}/>
                  </Typography>
              </Box>
              <Box>
                <FormControlLabel
                  control={<MaterialUISwitch sx={{ m: 0 }} />}
                  label=""
                  onChange={() => dispatch(setTheme(theme === "light" ? "dark" : "light"))}
                  labelPlacement="bottom"
                />
              </Box>
            </Box>
            <Typography variant="subtitle2" sx={{...Location, color: theme === "dark" ? "#fff" : "black" }}>📍 Metro Manila, Philippines</Typography>
            <Typography variant="subtitle2" sx={{...Location, color: theme === "dark" ? "#fff" : "black" }}>Software Engineer</Typography>
            <Grid container spacing={0.5} sx={{ paddingTop: 3 }}>
              <Grid size={4}>
                <Button variant="outlined" startIcon={<CalendarSync size={16}/>} onClick={scheduleCallEvent} sx={{...ScheduleACall,
                  backgroundColor: theme === "dark" ? "#fff" : "black",
                  color: theme === "dark" ? "black" : "#fff",
                  fontSize: 12
                }}>
                  Schedule a call
                </Button>
              </Grid>
              <Grid size={4}>
                <Button variant="outlined" startIcon={<MailPlus size={16}/>} sx={{...SendEmail,
                  color: theme === "dark" ? "#fff" : "black",
                  borderColor: theme === "dark" ? "#fff" : "black",
                  fontSize: 12
                }} onClick={() => setOpen(true)}>
                  Send Email
                </Button>
              </Grid>
              <Grid size={4}>
                <Button onClick={handleDownloadCV} variant="outlined" startIcon={<Download size={16}/>} sx={{...SendEmail,
                  color: theme === "dark" ? "#fff" : "black",
                  borderColor: theme === "dark" ? "#fff" : "black",
                  fontSize: 12
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
