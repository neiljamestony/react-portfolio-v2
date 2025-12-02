import { Card, CardContent, Typography, Stack } from '@mui/material'

export default function Testimonials() {
  return (
    <Card variant="outlined">
        <CardContent>
            <Stack spacing={0.5}>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Poppins, sans-serif' }}>
                    Testimonials
                </Typography>
            </Stack>
        </CardContent>
    </Card>
  )
}
