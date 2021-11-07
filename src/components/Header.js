import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Box>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/">
                        E-Commerce App
                    </Link>
                    </Typography>
                    <Button color="inherit">
                        Login
                    </Button>
                    <IconButton size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                    <Link to='/cart'>
                        <ShoppingCartIcon/>
                    </Link>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>

    )
}

export default Header
