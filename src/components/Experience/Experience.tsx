import { Card, CardContent, Typography, Stack, Divider, Chip } from '@mui/material'

export default function Experience() {
  return (
    <Card variant="outlined">
        <CardContent>
            <Stack spacing={0.5}>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Poppins, sans-serif' }}>
                    Experience
                </Typography>
                <Divider textAlign="left"><Chip label="Accenture Inc." size="small" /></Divider>
                <Divider textAlign="left"><Chip label="i4one Inc." size="small" /></Divider>
                <Divider textAlign="left"><Chip label="Aktus Global Inc." size="small" /></Divider>
            </Stack>
        </CardContent>
    </Card>
  )
}
