import { useState } from 'react'
import { Grid, Box, Typography, Button, FormControlLabel } from '@mui/material'
import { CalendarSync, MailPlus, Download } from 'lucide-react'
import { ProfileImageContainer, ProfileName, Location, SendEmail, ScheduleACall } from './Style'
import { setTheme } from '../../redux/reducer/ThemeReducer'
import { useAppSelector, useAppDispatch } from '../../redux/hook/hook'
import SendEmailComponent from '../SendEmail/SendEmail'
import { MaterialUISwitch } from './DesktopViewPort'

export default function MobileViewPort() {
    const { theme } = useAppSelector((state) => state.themeState)
    const dispatch = useAppDispatch();
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
            <Grid container spacing={1}>
                <Grid size={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Box
                    component="img"
                    src="/image/profile.jpeg"
                    alt="profile-img"
                    sx={ProfileImageContainer}
                    />
                   
                </Grid>
                <Grid size={12}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box display="flex">
                            <Typography gutterBottom sx={{...ProfileName, color: theme === "dark" ? "#fff" : "black", fontSize: 20 }}>Neil James</Typography>
                            <Box component="img" src="/image/metaicon.png" alt="meta-icon" sx={{ height: 20, width: 20, mt: 0.5}}/>
                        </Box>
                        <FormControlLabel
                            value="bottom"
                            control={<MaterialUISwitch size="small"/>}
                            label=""
                            onChange={() => dispatch(setTheme(theme === "light" ? "dark" : "light"))}
                            labelPlacement="bottom"
                        />
                    </Box>
                    
                </Grid>
                <Grid size={12}>
                    <Box textAlign="center">
                        <Typography variant="subtitle1" sx={{...Location, color: theme === "dark" ? "#fff" : "black" }}>Software Engineer</Typography>
                    </Box>
                </Grid>
                <Grid size={12}>
                    <Box textAlign="center">
                        <Typography variant="subtitle2" sx={{...Location, color: theme === "dark" ? "#fff" : "black" }}>📍 Metro Manila, Philippines</Typography>
                        
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid size={4}>
                    <Button variant="outlined" onClick={scheduleCallEvent} sx={{...ScheduleACall,
                  backgroundColor: theme === "dark" ? "#fff" : "black",
                  color: theme === "dark" ? "black" : "#fff"
                }}>
                       <CalendarSync size={16}/>
                    </Button>
                </Grid>
                <Grid size={4}>
                    <Button variant="outlined" sx={{...SendEmail,
                  color: theme === "dark" ? "#fff" : "black",
                  borderColor: theme === "dark" ? "#fff" : "black"
                }} onClick={() => setOpen(true)}>
                        <MailPlus size={16}/>
                    </Button>
                </Grid>
                <Grid size={4}>
                    <Button onClick={handleDownloadCV} variant="outlined" sx={{...SendEmail,
                  color: theme === "dark" ? "#fff" : "black",
                  borderColor: theme === "dark" ? "#fff" : "black"
                }}>
                       <Download size={16}/>
                    </Button>
                </Grid>
            </Grid>
            <SendEmailComponent open={open} handleClose={() => setOpen(false)}/>
        </> 
    )
}
