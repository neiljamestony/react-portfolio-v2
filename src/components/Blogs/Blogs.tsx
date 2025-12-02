import { Card, CardContent, Typography, Stack } from '@mui/material'

export default function Blogs() {
  return (
    <Card variant="outlined">
        <CardContent>
            <Stack spacing={0.5}>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Poppins, sans-serif' }}>
                    Blogs
                </Typography>
            </Stack>
        </CardContent>
    </Card>
  )
}
