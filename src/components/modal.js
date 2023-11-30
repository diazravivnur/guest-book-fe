import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Logo from '../TJLogo.svg'
import '../App.css';

import database from '../components/firebaseConfig/firebaseConfig'
import { ref, onValue } from 'firebase/database';
import { getDatabase } from 'firebase/database';
const _ = require('lodash');

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
    const [data, setData] = React.useState(null);
    const [isModalOpen, setModalOpen] = React.useState(false);

    React.useEffect(() => {
        const database = getDatabase();
        const dataRef = ref(database, 'users');

        const fetchData = (snapshot) => {
            const fetchedData = snapshot.val();
            setData(fetchedData);

            // Open the modal if data exists
            if (!_.isEmpty(fetchedData)) {
                setModalOpen(true);
            }
        };

        // Add a listener to fetch data from the database
        onValue(dataRef, fetchData);

        // Cleanup function (optional for removing the listener when the component unmounts)
        return () => {
            // The listener is automatically removed when the component unmounts
        };
    }, []); // Empty dependency array means this effect runs once on mount
    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isModalOpen}
                onClose={handleCloseModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={isModalOpen}>
                    <Box sx={style}>
                        <img src={Logo} className="App-logo" alt="logo" />
                        <Typography style={{ fontFamily: 'Nunito', fontWeight: 'bold', fontSize: '400%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                            Selamat Datang
                        </Typography>
                        <Typography style={{ fontFamily: 'Nunito', fontWeight: 'bold', fontSize: '400%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                            {data?.name}
                        </Typography>
                        <Typography style={{ fontFamily: 'Nunito', fontWeight: 'bold', fontSize: '250%', marginTop: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                            {data?.status}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div >
    );
}
