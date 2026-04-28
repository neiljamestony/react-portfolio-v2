import { useState } from 'react'
import { Grid, Box, Typography, Button, FormControlLabel, Stack } from '@mui/material'
import { CalendarSync, MailPlus, Download, CircleUser } from 'lucide-react'
import { MobileProfileImageContainer, ProfileName, Location, SendEmail, ScheduleACall } from './Style'
import { setTheme } from '../../redux/reducer/ThemeReducer'
import { useAppSelector, useAppDispatch } from '../../redux/hook/hook'
import SendEmailComponent from '../SendEmail/SendEmail'
import { MaterialUISwitchMobile } from './DesktopViewPort'

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
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    gap: 3,
                    padding: 1.5
                }}>
                <Box
                    sx={{
                        width: '35%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexShrink: 0,
                    }}>
                    <Box
                    component="img"
                    src="/image/profile.jpeg"
                    alt="profile-img"
                    sx={{
                        ...MobileProfileImageContainer
                    }}
                    />
                </Box>
                <Box
                    sx={{
                    width: '65%',
                    overflow: 'hidden',
                    }}
                >
                    <Stack spacing={1}>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                       
                    >
                        <Box sx={{ overflow: 'hidden' }}>
                            <Typography
                                sx={{
                                ...ProfileName,
                                color: theme === "dark" ? "#fff" : "black",
                                fontSize: 13,
                                lineHeight: 1,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0.5,
                                }}> Neil Perdigon
                                <Box
                                component="img"
                                src="/image/metaicon.png"
                                alt="meta-icon"
                                sx={{
                                    height: 16,
                                    width: 16,
                                }}
                                />
                            </Typography>
                        </Box>

                        <FormControlLabel
                            sx={{ m: 0 }}
                            value="bottom"
                            control={<MaterialUISwitchMobile />}
                            label=""
                            onChange={() =>
                                dispatch(setTheme(theme === "light" ? "dark" : "light"))
                            }
                            labelPlacement="bottom"
                        />
                    </Box>

                    <Typography
                        variant="subtitle2"
                        sx={{
                        ...Location,
                        color: theme === "dark" ? "#fff" : "black",
                        fontSize: 12,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        }}
                    >
                        📍 Metro Manila, Philippines
                    </Typography>

                    <Box
                        display="flex"
                        alignItems="center"
                        gap={0.5}
                    >
                        <CircleUser
                        size={16}
                        color={theme === "dark" ? "#fff" : "black"}
                        />

                        <Typography
                        variant="subtitle2"
                        sx={{
                            ...Location,
                            color: theme === "dark" ? "#fff" : "black",
                            fontSize: 12,
                        }}
                        >
                        Software Engineer
                        </Typography>
                    </Box>

                        <Button
                            variant="outlined"
                            onClick={scheduleCallEvent}
                            sx={{
                            ...ScheduleACall,
                            backgroundColor: theme === "dark" ? "#fff" : "black",
                            color: theme === "dark" ? "black" : "#fff",
                            fontSize: 10
                            }}
                        >
                            <CalendarSync size={16} />
                            &nbsp;Schedule a call
                        </Button>
                    </Stack>
                </Box>
                </Box>
            <Grid container spacing={1}>
                <Grid size={6}>
                    <Button variant="outlined" sx={{...SendEmail,
                  color: theme === "dark" ? "#fff" : "black",
                  borderColor: theme === "dark" ? "#fff" : "black"
                }} onClick={() => setOpen(true)}>
                        <MailPlus size={16}/>
                    </Button>
                </Grid>
                <Grid size={6}>
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
