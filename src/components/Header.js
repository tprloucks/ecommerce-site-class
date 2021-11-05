import { AppBar, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Header = () => {
    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        E-Commerce App
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>

    )
}

export default Header
