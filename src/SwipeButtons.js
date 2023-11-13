import React, { Component } from 'react';
import './SwipeButtons.css';
import { Favorite, FlashOn, ReplayCircleFilledOutlined, StarRate } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

class SwipeButtons extends Component {
    render() {
        return (
            <div className='swipeButtons'>
                <IconButton>
                    <ReplayCircleFilledOutlined fontSize='large' className='swipeButtons__repeat' />
                </IconButton>
                <IconButton>
                    <CloseIcon fontSize='large' className='swipeButtons__left' />
                </IconButton>
                <IconButton>
                    <StarRate fontSize='large' className='swipeButtons__star' />
                </IconButton>
                <IconButton>
                    <Favorite fontSize='large' className='swipeButtons__right' />
                </IconButton>
                <IconButton>
                    <FlashOn fontSize='large' className='swipeButtons__lightning' />
                </IconButton>
            </div>
        );
    }
}

export default SwipeButtons;