import { useState } from 'react'
import { Grid, Box, Typography, Button } from '@mui/material'
import { CalendarSync, MailPlus, Download } from 'lucide-react'
import { ProfileImageContainer, ProfileName, Location, SendEmail, ScheduleACall } from './Style'
import SendEmailComponent from '../SendEmail/SendEmail'

export default function MobileViewPort() {
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
                <Grid size={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Box
                    component="img"
                    src="/image/profile.jpeg"
                    alt="profile-img"
                    sx={ProfileImageContainer}
                    />
                </Grid>
                <Grid size={12}>
                    <Box textAlign="center">
                        <Typography variant="h6" gutterBottom sx={ProfileName}>Neil James Tony Perdigon</Typography>
                    </Box>
                </Grid>
                <Grid size={12}>
                    <Box textAlign="center">
                        <Typography variant="subtitle2" sx={Location}>📍 Metro Manila, Philippines</Typography>
                    </Box>
                </Grid>
                <Grid size={12}>
                    <Box textAlign="center">
                        <Typography variant="subtitle1" sx={Location}>Software Engineer</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid size={4}>
                    <Button variant="outlined" onClick={scheduleCallEvent} sx={ScheduleACall}>
                       <CalendarSync size={16}/>
                    </Button>
                </Grid>
                <Grid size={4}>
                    <Button variant="outlined" sx={SendEmail} onClick={() => setOpen(true)}>
                        <MailPlus size={16}/>
                    </Button>
                </Grid>
                <Grid size={4}>
                    <Button onClick={handleDownloadCV} variant="outlined" sx={SendEmail}>
                       <Download size={16}/>
                    </Button>
                </Grid>
            </Grid>
            <SendEmailComponent open={open} handleClose={() => setOpen(false)}/>
        </> 
    )
}
