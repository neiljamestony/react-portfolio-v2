import { useState } from 'react'
import { Grid, Box, Stack, Typography, Button, FormControlLabel, Switch } from '@mui/material'
import { ProfileName, ProfileImageContainer, Location, ScheduleACall, SendEmail } from './Style'
import { styled } from '@mui/material/styles'
import { CalendarSync, MailPlus, Download, CircleUser } from 'lucide-react'
import SendEmailComponent from '../SendEmail/SendEmail'
import { useAppSelector, useAppDispatch } from '../../redux/hook/hook'
import { setTheme } from '../../redux/reducer/ThemeReducer'

export const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        ...theme.applyStyles('dark', {
          backgroundColor: '#8796A5',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}));

export const MaterialUISwitchMobile = styled(Switch)(({ theme }) => ({
  width: 46,
  height: 26,
  padding: 0, // important

  '& .MuiSwitch-switchBase': {
    padding: 2,
    margin: 0,
    transitionDuration: '200ms',
    transform: 'translateX(2px)',

    '&.Mui-checked': {
      transform: 'translateX(20px)', // fully reaches right side
      color: '#fff',

      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },

      '& + .MuiSwitch-track': {
        backgroundColor: '#8796A5',
        opacity: 1,
      },
    },
  },

  '& .MuiSwitch-thumb': {
    width: 22,
    height: 22,
    backgroundColor: '#001e3c',
    position: 'relative',

    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '12px',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528z"/></svg>')`,
    },

    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },

  '& .MuiSwitch-track': {
    borderRadius: 13,
    backgroundColor: '#aab4be',
    opacity: 1,

    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}));

export default function DesktopViewPort() {
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
      <Grid container>
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
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box display="flex" alignItems="center" gap={0.5}>
                <Typography variant="h6" gutterBottom sx={{...ProfileName, color: theme === "dark" ? "#fff" : "black" }}>Neil James Tony Perdigon</Typography>
                <Box component="img" src="/image/metaicon.png" alt="meta-icon" sx={{ height: 20, width: 20, mt: -1 }}/>
              </Box>
              <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                label=""
                onChange={() => dispatch(setTheme(theme === "light" ? "dark" : "light"))}
                labelPlacement="bottom"
              />
            </Box>
            <Typography variant="subtitle2" sx={{...Location, color: theme === "dark" ? "#fff" : "black" }}>📍 Metro Manila, Philippines</Typography>
            <Box display="flex" alignItems="center" justifyContent="initial" gap={0.5} mb={1}>
              <CircleUser size={16} color={theme === "dark" ? "#fff" : "black" }/>
              <Typography variant="subtitle2" sx={{...Location, color: theme === "dark" ? "#fff" : "black" }}>Software Engineer</Typography>
            </Box>
            <Grid spacing={1} container>
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
