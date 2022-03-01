import React, { useState, useEffect } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
function Header() {

    const [stick,setStick] = useState("App-header")

    const changeheader = () =>{
        if( window.scrollY > 0){
            setStick("sti")
        }else{
            setStick("App-header")
        }
    }
    window.addEventListener("scroll", changeheader) 
    return (
        <header className={stick}>
            <div className='logo'>
                <h2 className='tit'>HOUM</h2>
</div>
            <div>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Buscar"
                        inputProps={{ 'aria-label': 'Buscar' }}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </ Paper>
            </div>

        </header>

    );
}

export default Header;