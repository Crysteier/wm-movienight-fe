import React from 'react';
import './Header.css'
import PersonIcon from "@mui/icons-material/Person"
import ForumIcon from '@mui/icons-material/Forum';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowBackIosNew } from '@mui/icons-material';


function Header({ backButton }) {
    const navigate = useNavigate();
    return (
        <div className='header'>
            {backButton ? (
                <IconButton onClick={()=> navigate(backButton)}>
                    <ArrowBackIosNew fontSize='large' className='header__icon'></ArrowBackIosNew>
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className='header__icon' fontSize='large' />
                </IconButton>
            )}

            <Link to={"/"}>
                <MovieFilterIcon className='header__icon' style={{ fontSize: 40 }} color='secondary' />
            </Link>

            <Link to="/chat">
                <IconButton>
                    <ForumIcon className='header__icon' fontSize='large' />
                </IconButton>
            </Link>

        </div>
    );
}

export default Header;