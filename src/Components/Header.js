import React, { useState, useContext } from 'react';
import SideBar from './SideBar';
import { AuthContext } from '../Context/Authprovider';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
function Header(props) {

    const [stick, setStick] = useState("App-header")
    const [search, setSearch] = useState("");
    const {
        setName,
        gender,
        species,
        status,
        setDatalist,
    } = useContext(AuthContext);
    const changeheader = () => {
        if (window.scrollY > 0) {
            setStick("sti")
        } else {
            setStick("App-header")
        }
    }
    window.addEventListener("scroll", changeheader)

    const getsearch = (e) => {
        setSearch(e.target.value)
    }
    const buscar = () => {
        axios.get('https://rickandmortyapi.com/api/character?page=+' + 1 + 'name=' + search + "&gender=" + gender + "&species=" + species + "&status=" + status)
            .then(res => {
                setName(search)
                setDatalist(res.data)
            })
            .catch(err => {
                console.log(err)
                setDatalist({})
            })
    }

    return (
        <header className={stick}>
            <div className='header-left'>
                <SideBar />
                <div className='logo'>
                    <a href='/' className='main-header-logo'>
                        <img src="https://lever-client-logos.s3.us-west-2.amazonaws.com/e4b5b544-d8fb-4738-a096-186c0d1c9103-1621371173313.png" alt="logoHoum" />
                    </a>
                </div>
            </div>


            <div >
                <Paper className='search'
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'Search' }}
                        value={search}
                        onChange={getsearch}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={buscar}>
                        <SearchIcon />
                    </IconButton>
                </ Paper>
            </div>
        </header>
    );
}

export default Header;