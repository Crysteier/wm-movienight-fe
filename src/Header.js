import React from 'react';
import './Header.css'
import PersonIcon from "@mui/icons-material/Person"
import ForumIcon from '@mui/icons-material/Forum';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import IconButton from '@mui/material/IconButton';

function Header(props) {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon className='header__icon' fontSize='large' />
            </IconButton>

            <MovieFilterIcon className='header__icon' style={{ fontSize: 40 }} color='secondary' />

            <IconButton>
                <ForumIcon className='header__icon' fontSize='large' />
            </IconButton>
        </div>
    );
}

export default Header;