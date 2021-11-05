import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        E-Commerce App
                    </Typography>
                    <Button color="inherit">
                        Login
                    </Button>
                    <IconButton size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <ShoppingCartIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>

    )
}

export default Header
