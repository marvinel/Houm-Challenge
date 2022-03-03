import React, { useState, useEffect, useContext }  from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { AuthContext } from '../Context/Authprovider';

export default function FileSystemNavigator() {

    const {
        gender,
        setGender,
        species,
        setSpecies,
        status,
        setStatus,
        setDatalist
    } = useContext(AuthContext);

    

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);

    const handleChange = (event) => {
        console.log(event.target.value)
        setGender(event.target.value);
     
    };
    const handleChange2 = (event) => {
        setSpecies(event.target.value);
    };
    const handleChange3 = (event) => {
        setStatus(event.target.value);
    };

    const handleClose = () => {
     
            setOpen(false);
       
            setOpen2(false);
        
            setOpen3(false);
        
    };

    const handleOpen = (event) => {
        console.log(event.target.id)

        if(event.target.id === "demo-controlled-open-select"){
            setOpen(true);
        }else if(event.target.id ==="demo-controlled-open-select2" ){
            setOpen2(true);
        }else if(event.target.id === "demo-controlled-open-select3"){
            setOpen3(true);
        }
        
    };
    return (
        <div>

            <div>
                <h3>Filter by</h3>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-controlled-open-select-label">Gender</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={gender}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>    
                        <MenuItem value="Genderless">Genderless</MenuItem>
                        <MenuItem value="Unknown">Unknown</MenuItem>
                        
                    </Select>

                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-controlled-open-select-label2">Species</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label2"
                        id="demo-controlled-open-select2"
                        open={open2}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={species}
                        label="Age"
                        onChange={handleChange2}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="Human">Human</MenuItem>
                        <MenuItem value="Robot">Robot</MenuItem>
                        <MenuItem value="unknown">unknown</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-controlled-open-select-label3">Status</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label3"
                        id="demo-controlled-open-select3"
                        open={open3}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={status}
                        label="Age"
                        onChange={handleChange3}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="Alive">Alive</MenuItem>
                        <MenuItem value="Dead">Dead</MenuItem>
                        <MenuItem value="Unknown">Unknown</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}