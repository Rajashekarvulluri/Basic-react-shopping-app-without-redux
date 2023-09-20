import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import Ritalogo from './images/ritalogo.png'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { products } from './Data.js'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from "@mui/material/InputAdornment";
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%'
    },
}));


const Header = ({cart}) => {


    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <div >
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static">
                    <Toolbar style={{ backgroundColor: 'white' }} >
                        <img src={Ritalogo} className='ritalogo' />
                        <Typography color="blue" sx={{ flexGrow: 1 }}>
                            <strong>FRANCHISE ADMIN CONSOLE</strong>
                        </Typography>
                        <div className='searchbox'>
                            <Autocomplete
                                sx={{ width: 300 }}
                                options={products.map((option) => option.name)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        InputProps={{
                                            ...params.InputProps,
                                            endAdornment: (
                                                <SearchIcon className='SearchIcon' />
                                            )
                                        }}
                                    />
                                )}
                            />
                        </div>
                        {auth && (
                            <div>
                                <Link to="/">
                                    <IconButton
                                        size="small"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color='blue'>
                                        <HomeIcon style={{ color: 'blue' }}/>
                                    </IconButton>
                                </Link>
                                <Link to ="/purchaseitems">
                                <IconButton
                                    size="small"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color='blue'>
                                    <AddShoppingCartIcon style={{color:'blue'}} />
                                    {cart.length}
                                </IconButton>
                                </Link>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Header
