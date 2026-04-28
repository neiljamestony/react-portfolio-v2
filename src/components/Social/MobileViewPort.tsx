import { Stack, Box } from "@mui/material"
import { Linkedin, Github, Instagram } from 'lucide-react'
import { MobileSocialName, MobileSocialTitle, MobileSocialIcon, MobileSocialContainer } from "./Style";
import { useAppSelector } from "../../redux/hook/hook";

export default function MobileViewPort() {
    const { theme } = useAppSelector((state) => state.themeState)
    const socialLinks = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/neil-james-tony-perdigon-631422207/",
            icon: <Linkedin size={16}/>
        },
        {
            name: "GitHub",
            url: "https://github.com/neiljamestony",
            icon: <Github size={16}/>
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/jameeesverse/",
            icon: <Instagram size={16}/>
        },
    ];

    const openLink = (url: string) => {
        window.open(url, '_blank');
    }
    
    return (
        <Box mb={2}>
            <Box sx={{...MobileSocialTitle, color: theme === "dark" ? "#fff" : "black", marginBottom: 3 }}>Social Links</Box>
            <Box sx={{ padding: 0, margin: 0}}>
                <Stack spacing={1}>
                    {
                        socialLinks.map((social, index) => (
                            <Box sx={{...MobileSocialContainer,
                                    border: 1,
                                    borderColor: theme === "dark" ? "#e1e1e1" : "text.secondary",
                                    backgroundColor: theme === "dark" ? "#fff" : "none",
                                    borderRadius: 2, 
                                    "&:hover": {
                                        color: "#fff",
                                        backgroundColor: theme === "dark" ? "#fff" : "black",
                                        border: 'none'
                                    },
                                    color: theme === "dark" ? "black" : "text.secondary"
                            }} onClick={() => openLink(social.url)} key={index}>
                                <Box sx={{...MobileSocialIcon,
                                    "&:hover": {
                                        color: "#fff",
                                        backgroundColor: theme === "dark" ? "#fff" : "black",
                                        border: 'none'
                                    }
                                }}>{social.icon}</Box>
                                <Box sx={MobileSocialName}>{social.name}</Box>
                            </Box>
                        ))
                    }
                </Stack>
            </Box>
        </Box>
    )
}
