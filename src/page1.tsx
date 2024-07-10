import React from 'react'
import NavBar from './Page1/App'
import Acceuil from './Page1/App2'
import Head from './Page1/App3'
import Services from './Page1/Services'
import Footer from './Page1/Footer'
import Menu_1 from './Page2/Menu1'
import TripleBulle from './Page1/triplebulle'

const Page1 : React.FC = () => {
    return (
        <>
        <>
        <NavBar />
        <Acceuil />
        <Head />
        <Services />
        <Footer />
        </>
        <Menu_1 />
        <TripleBulle />
        </>
    )
}

export default Page1