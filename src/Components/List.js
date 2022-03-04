import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { AuthContext } from '../Context/Authprovider';
import Pagination from '@mui/material/Pagination';


import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';

function List() {


    const [page, setPage] = useState(1)


    const {
        gender,
        status,
        species,
        datalist,
        setDatalist

    } = useContext(AuthContext);

    useEffect(() => {
        // obteniendo info para la lista de personajes
        console.log("busqueda: " + gender)
        axios.get(`https://rickandmortyapi.com/api/character?page=` + page + "&gender=" + gender +"&species="+ species +"&status="+status)
            .then(res => {
                console.log(res.data)
                setDatalist(res.data)
            })

    }, [page,gender,species,status]);

    const handleChange = (event, value) => {
        setPage(value);
    }


    if (!datalist.info) {
        return (
            <h1>cargando...</h1>
        );

    } else {
        return (
            <div className="List">

                <h1>Character List</h1>


                <div className='characters'>
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {datalist.results.map((character, index) => (
                            <Grid className='character' item xs={4} sm={4} md={3} key={index}>
                                <Card className='card' sx={{ maxWidth: 300 }} key={character.id}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={character.image}
                                        alt={character.name}
                                    />
                                    <div className='charactercontent'>
                                        <div className='charactertitle'>{character.name}</div>
                                        <p className='characterdescription'>Gender: {character.gender} </p>
                                        <p className='characterdescription'>Species: {character.species}</p>
                                        <p className='characterdescription'>Status: {character.status}</p>

                                    </div>

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {character.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))

                        }
                    </Grid>

                </div>

                <div className='pagination'>
                    <Pagination className='pagi' count={datalist.info.pages} page={page} onChange={handleChange} />
                </div>
            </div>
        );
    }

}

export default List;