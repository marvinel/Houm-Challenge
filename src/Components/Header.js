import React, { useState, useEffect, useContext } from 'react';
import SideBar from './SideBar';
import { AuthContext } from '../Context/Authprovider';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
function Header(props) {

    const [stick, setStick] = useState("App-header")
    const [search, setSearch] = useState("");
    const {
        setGender,
        gender,
        species,
        status,
        setDatalist
    } = useContext(AuthContext);
    const changeheader = () => {
        if (window.scrollY > 0) {
            setStick("sti")
        } else {
            setStick("App-header")
        }
    }
    window.addEventListener("scroll", changeheader)

    const getsearch = (e) =>{
        setSearch(e.target.value)
       
    }
    const buscar = ()=>{
        console.log("genero: "+ gender)
        axios.get(`https://rickandmortyapi.com/api/character?name=` + search + "&gender=" + gender +"&species="+ species +"&status="+status )
        .then(res => {
            console.log(res.data)
           
            setDatalist(res.data)
           
        })
       
    }


    return (
        <header className={stick}>
             <SideBar />
            <div className='logo'>
                <h2 className='tit'>HOUM </h2>
            </div>
            <div>
                <Paper
                  //  component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Buscar"
                        inputProps={{ 'aria-label': 'Buscar' }}
                        value={search }
                        onChange={getsearch }
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