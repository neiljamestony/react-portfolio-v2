import { Dialog, DialogTitle, TextField, Stack, DialogContent, DialogActions, Button, CircularProgress } from '@mui/material'
import { ScheduleACall, SendEmail as SendEmailStyle } from '../Profile/Style'
import emailJs from '@emailjs/browser';
import DisplayMessage from './DisplayMessage';
import React from 'react'

export default function SendEmail({ open, handleClose }: { open: boolean, handleClose: () => void }) {
    const service_id = "service_kqxbb4c";
    const template_id = "portfolio-v2-template-id";
    const public_key = "OZZ4-r3MEYk1cIPi3";

    const [loading, setLoading] = React.useState(false)
    const [displayMessage, setOpenDisplayMessage] = React.useState(false)
    const [hasError, setStatus] = React.useState(false)
    const [formData, setFormData] = React.useState({
        from_name: "",
        message: "",
        to_email: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSendEmail = async () => {
        try{
            setLoading(true);
            const response = await emailJs.send(service_id, template_id, formData , public_key);
            if(response.status === 200){
                setStatus(false)
                setLoading(false);
                handleClose();
                setOpenDisplayMessage(true)
                setFormData({
                    from_name: "",
                    message: "",
                    to_email: ""
                })
            }else{
                setStatus(true)
                setLoading(false);
                handleClose();
                setOpenDisplayMessage(true)
                setFormData({
                    from_name: "",
                    message: "",
                    to_email: ""
                })
            }
            
            
        }catch(error: unknown){
            console.log(error)
            setLoading(false);
            setStatus(true)
            handleClose();
            setOpenDisplayMessage(true)
            setFormData({
                from_name: "",
                message: "",
                to_email: ""
            })
        }
    }

    return (
        <>
            <Dialog open={open} maxWidth="xs" fullWidth>
                <DialogTitle>Send email to: Neil James</DialogTitle>
                    <DialogContent>
                        <Stack spacing={2} sx={{ marginTop: 3 }}>
                            <TextField id="email" name="to_email" label="To" value="nvalerio747@gmail.com" disabled onChange={handleChange} size="small"/>
                            <TextField id="email" name="from_name" label="From" value={formData.from_name} onChange={handleChange} size="small"/>
                            <TextField id="message" name="message" label="Message" value={formData.message} onChange={handleChange} multiline minRows={2} maxRows={5} />
                        </Stack>
                    </DialogContent>
                    <DialogActions>
                        <Button type="button" variant="outlined" disabled={loading} onClick={handleClose} sx={{ ...SendEmailStyle, backgroundColor: 'black', color: '#fff' }}>Cancel</Button>
                        <Button type="submit" variant='outlined' sx={{...ScheduleACall, borderColor: 'black', color: 'black'}} onClick={handleSendEmail} disabled={loading}>{loading ? <CircularProgress size={20} sx={{ color: '#fff' }}/> : 'Submit'}</Button>
                    </DialogActions>
            </Dialog>
            <DisplayMessage open={displayMessage} error={hasError} handleClose={() => setOpenDisplayMessage(false)}/>
        </>
    )
}
