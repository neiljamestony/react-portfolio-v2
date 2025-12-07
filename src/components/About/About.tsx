import { Stack, Typography, Card, CardContent, Icon, CardHeader } from "@mui/material"
import { BriefcaseBusiness } from 'lucide-react'

export default function About() {
  return (
    <Card variant="outlined">
        <CardHeader avatar={
            <Icon><BriefcaseBusiness /></Icon>
        }
        title={
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', marginTop: 1.5 }}>
            About
            </Typography>
        }
        />
        <CardContent>
            <Stack spacing={1}>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Poppins, sans-serif' }}>
                    I am a Web Developer from Metro Manila with 6 years of hands-on experience in building modern, 
                    user-friendly, and efficient web applications. I specialize in frontend and backend development using technologies such as PHP, 
                    Laravel, React.js, Redux, NodeJS, and SQL databases like MySQL, PostgreSQL and No SQL like MongoDB. 
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Poppins, sans-serif' }}>
                    As a self-taught developer, I am passionate about continuous learning and always exploring new tools that help me create better digital experiences. I take pride in writing clean, maintainable code and delivering solutions that align with user needs and business goals.
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Poppins, sans-serif' }}>
                    I hold a Bachelor’s degree in Computer Science from St. Clare College of Caloocan, which helped strengthen my foundation in software engineering. With my combination of experience, dedication, and curiosity, I strive to contribute to impactful projects and grow further in the tech industry.
                </Typography>
            </Stack>
        </CardContent>
    </Card>
  )
}
