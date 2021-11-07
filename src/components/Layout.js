import { CssBaseline } from '@mui/material';
import { Box } from "@mui/system"
import React, { Fragment } from "react"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({children}) => {
    return (<Fragment>
        <CssBaseline/>
        <Box>
            <Header/>
            <Box> 
                {children}
            </Box>
            <Footer/>
        </Box>
    </Fragment>
    )
}

export default Layout