import React, { Fragment } from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer"
import { Box } from '@mui/system'

const Homepage = () => {
    return (
        <Fragment>
            <Header />
            <div style={{backgroundColor: '#faf9f7)', height: "200px"}}>
                Home page 
                </div>
            <Footer/>
        </Fragment>
    )
}

export default Homepage