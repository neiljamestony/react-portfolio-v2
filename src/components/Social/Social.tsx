import { Stack, Box } from "@mui/material"
import { Linkedin, Github, Instagram } from 'lucide-react'
import { SocialTitle, SocialIcon, SocialContainer, SocialName } from "./Style";


export default function Social() {
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
            url: "https://www.instagram.com/nljmstny/",
            icon: <Instagram size={16}/>
        },
    ];

    const openLink = (url: string) => {
        window.open(url, '_blank');
    }
    
    return (
        <Box sx={{ height: 200 }}>
            <Box sx={SocialTitle}>Social Links</Box>
            <Box mt={3} ml={1.5}>
                <Stack spacing={1}>
                    {
                        socialLinks.map((social, index) => (
                            <Box sx={SocialContainer} onClick={() => openLink(social.url)} key={index}>
                                <Box sx={SocialIcon}>{social.icon}</Box>
                                <Box sx={SocialName}>{social.name}</Box>
                            </Box>
                        ))
                    }
                </Stack>
            </Box>
        </Box>
    )
}
