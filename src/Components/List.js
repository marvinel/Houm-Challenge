import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';

function List() {

    const [data, setData] = useState({});
    const [page, setPage] = useState(1)

    useEffect(() => {
        // obteniendo info para la lista de personajes
        axios.get(`https://rickandmortyapi.com/api/character?page=` + page)
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
    }, [page]);

    const handleChange = (event, value) => {
        setPage(value);
    }
    if (!data.info) {
        return (
            <h1>cargando...</h1>
        );

    } else {
        return (
            <div className="List">
                <h1>Lista de personajes</h1>


                <div className='characters'>
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {data.results.map((character,index) => (
                            <Grid item xs={4} sm={4} md={3} key={index}>
                                <Card className='card' sx={{ maxWidth: 345 }} key={character.id}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={character.image}
                                        alt="green iguana"
                                    />
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

                <Stack spacing={2}>
                    <Pagination count={data.info.pages} page={page} onChange={handleChange} />
                </Stack>
            </div>
        );
    }

}

export default List;