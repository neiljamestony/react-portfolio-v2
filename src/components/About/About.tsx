import { Stack, Typography, Card, CardContent, Icon, Box } from "@mui/material"
import { BusinessCenterOutlined } from '@mui/icons-material'

export default function About() {
  return (
    <Card variant="outlined">
        <CardContent>
            <Box sx={{ 
            display: 'flex',
            justifyContent: 'start',
            gap: 1,
            alignItems: 'center' 
            }}>
            <Icon><BusinessCenterOutlined sx={{ color: 'black' }}/></Icon>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', marginTop: 1.5 }}>
                About
            </Typography>
            </Box>
            <Stack spacing={1}>
                {/* <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Poppins, sans-serif' }}>
                    I am a Web Developer from Metro Manila with 6 years of hands-on experience in building modern, 
                    user-friendly, and efficient web applications. I specialize in frontend and backend development using technologies such as PHP, 
                    Laravel, React.js, Redux, NodeJS, and SQL databases like MySQL, PostgreSQL and No SQL like MongoDB. 
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Poppins, sans-serif' }}>
                    As a self-taught developer, I am passionate about continuous learning and always exploring new tools that help me create better digital experiences. I take pride in writing clean, maintainable code and delivering solutions that align with user needs and business goals.
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Poppins, sans-serif' }}>
                    I hold a Bachelor’s degree in Computer Science from St. Clare College of Caloocan, which helped strengthen my foundation in software engineering. With my combination of experience, dedication, and curiosity, I strive to contribute to impactful projects and grow further in the tech industry.
                </Typography> */}
                <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Poppins, sans-serif' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
            </Stack>
        </CardContent>
    </Card>
  )
}
