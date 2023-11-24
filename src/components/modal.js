import React, { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Logo from '../TJLogo.svg'
import '../App.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    height: '75%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function TransitionsModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // On componentDidMount set the timer
    useEffect(() => {
        const timeId = setTimeout(() => {
            // After 3 seconds set the show value to false
            handleClose()
        }, 3000)

        return () => {
            clearTimeout(timeId)
        }
    }, []);

    // If show is false the component will return null and stop here
    if (!setOpen) {
        return null;
    }

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <img src={Logo} className="App-logo" alt="logo" />
                        <Typography style={{ fontFamily: 'Nunito', fontWeight: 'bold', fontSize: '400%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                            Selamat Datang
                        </Typography>
                        <Typography style={{ fontFamily: 'Nunito', fontWeight: 'bold', fontSize: '400%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                            Fakhri
                        </Typography>
                        <Typography style={{ fontFamily: 'Nunito', fontWeight: 'bold', fontSize: '250%', marginTop: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                            VIP
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div >
    );
}
