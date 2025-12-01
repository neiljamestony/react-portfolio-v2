import { Card, CardContent, Typography, Stack } from '@mui/material'

export default function Profile() {
  return (
    <Card variant="outlined">
        <CardContent>
            <Stack spacing={0.5}>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Poppins, sans-serif' }}>
                    Neil James Tony Perdigon
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Poppins, sans-serif' }}>Software Engineer 🧑🏻‍💻</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Poppins, sans-serif' }}>Caloocan City, National Capital Region, Philippines 🇵🇭</Typography>
            </Stack>
        </CardContent>
    </Card>
  )
}
