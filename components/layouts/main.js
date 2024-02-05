import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../navbar.js'
import VoxelDog from '../voxel-dog.js'


const Main = ({ children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <title> Hugo Gómez - Homepage </title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="./favicon.ico" />
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <VoxelDog />
                {children}
            </Container>
        </Box>
    )
}

export default Main