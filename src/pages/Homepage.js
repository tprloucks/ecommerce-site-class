import React, { Fragment, useContext} from 'react'
import { Box } from '@mui/system'
import Layout from "../components/Layout"
import { shoppingCartContext } from '../context/ShoppingCartContext'

const Homepage = () => {
    const {user} = useContext(shoppingCartContext)
    console.log(user)
    return (
            <Layout>
                <Box>
                    Homepage main content
                </Box>
            </Layout>
    )
}

export default Homepage