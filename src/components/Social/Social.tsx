import { Typography, Card, CardContent, Icon, CardHeader, Stack, Box } from "@mui/material"
import { BriefcaseBusiness, Linkedin, Github, Instagram } from 'lucide-react'
import { RecommendationTitle, SocialContainer, SocialTitle, SocialIcon } from "./Style";

export default function About() {

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
        <Card variant="outlined">
            <CardHeader avatar={
                <Icon><BriefcaseBusiness /></Icon>
            }
            title={
                <Typography gutterBottom variant="h6" component="div" sx={RecommendationTitle}>
                    Social Links
                </Typography>
            }
            />
            <CardContent>
                <Stack spacing={1}>
                    {
                        socialLinks.map((social, index) => (
                            <Box sx={SocialContainer} onClick={() => openLink(social.url)}>
                                <Box sx={SocialIcon}>{social.icon}</Box>
                                <Typography key={index} variant="caption" sx={SocialTitle}>
                                    {social.name}
                                </Typography>
                            </Box>
                        ))
                    }
                </Stack>
            </CardContent>
        </Card>
    )
}
