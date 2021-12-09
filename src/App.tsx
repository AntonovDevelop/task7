import React from 'react';
import './App.css';
import { Box, AppBar, IconButton, Toolbar, Typography, Button, Container, Card, CardContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { fontSize } from '@mui/system';
import { Route } from 'react-router-dom';



function App() {
    return (
        <Box sx={{ flexGrow: 1 }} style={{ background: '#f6ffe3' }}>
            <AppBar position="static" style={{ background: '#6f9914d8' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        All News
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Top News
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Science
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Ecology
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Politics
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        About us
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Carousel>
                <div>
                    <img src="https://i0.wp.com/ofm.org/wp-content/uploads/2019/03/F_Buffon_Ecologia_Integrale.jpg?fit=1262%2C444&ssl=1" />
                    <p className="legend" style={{ background: '#f6ffe3', color: 'black', fontSize: 'large' }}>Ecology
                    </p>
                </div>
                <div>
                    <img src="https://i0.wp.com/ofm.org/wp-content/uploads/2019/03/F_Buffon_Ecologia_Integrale.jpg?fit=1262%2C444&ssl=1" />
                    <p className="legend" style={{ background: '#f6ffe3', color: 'black', fontSize: 'large' }}>Science</p>
                </div>
                <div>
                    <img src="https://i0.wp.com/ofm.org/wp-content/uploads/2019/03/F_Buffon_Ecologia_Integrale.jpg?fit=1262%2C444&ssl=1" />
                    <p className="legend" style={{ background: '#f6ffe3', color: 'black', fontSize: 'large' }}>Economy</p>
                </div>
            </Carousel>
            <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 1, sm: 1, md: 1 }}>
                <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://www.sciencenews.org/wp-content/uploads/2019/08/sn-fallback.png"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://www.sciencenews.org/wp-content/uploads/2019/08/sn-fallback.png"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://www.sciencenews.org/wp-content/uploads/2019/08/sn-fallback.png"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://www.sciencenews.org/wp-content/uploads/2019/08/sn-fallback.png"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://www.sciencenews.org/wp-content/uploads/2019/08/sn-fallback.png"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://www.sciencenews.org/wp-content/uploads/2019/08/sn-fallback.png"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
            <TableContainer component={Paper} style={{ background: '#c2ebc0', margin: '0px' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">All news</TableCell>
                            <TableCell align="center">Polytics</TableCell>
                            <TableCell align="center">Health</TableCell>
                            <TableCell align="center">Science</TableCell>
                            <TableCell align="center">Art</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Computer games</TableCell>
                            <TableCell align="center">Trump</TableCell>
                            <TableCell align="center">Deseases</TableCell>
                            <TableCell align="center">Discoveries</TableCell>
                            <TableCell align="center">Chemistry</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Football</TableCell>
                            <TableCell align="center">Gretta</TableCell>
                            <TableCell align="center">Physics</TableCell>
                            <TableCell align="center">Biology</TableCell>
                            <TableCell align="center">Music</TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default App;
