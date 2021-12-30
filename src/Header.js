import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';


function Header() {
    return (
        <div className='header'>
            <IconButton>
            <PersonIcon fontSize='Large' className='header_icon'></PersonIcon>
            </IconButton>
            <img src='https://1000logos.net/wp-content/uploads/2018/07/Tinder_logo_PNG3.png' className='header_logo'>
            
            </img>
            <IconButton><ForumIcon fontSize='Large'></ForumIcon></IconButton>
            
        </div>
    )
}


export default Header;