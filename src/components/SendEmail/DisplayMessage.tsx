import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material'
import { ScheduleACall } from '../Profile/Style'

export default function DisplayMessage({ open, handleClose, error }: { open: boolean, handleClose: () => void, error: boolean }) {

    const closeModal = () => handleClose();

    return (
        <Dialog open={open}>
            <DialogTitle>{error ? "Message did not deliver." : "Message Sent Successfully!" }</DialogTitle>
            <DialogContent>
                {error ? "Sorry! We've encountered an error while sending the message, please try again later!" : "All set! Your message has been delivered—expect a response soon."}
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" type="button" onClick={closeModal} sx={{...ScheduleACall, color: 'black'}}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}
