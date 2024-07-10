import React from 'react'
import NavBar from './Page1/App'
import Acceuil from './Page1/App2'
import Head from './Page1/App3'
import Services from './Page1/Services'
import Footer from './Page1/Footer'
import Menu_1 from './Page2/Menu1'
import TourneImage from './Page2/triplebulle'
import ContactUs from './Page2/ContactUs'
import Footer2 from './Page2/footer2'




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
        <TourneImage />
        <ContactUs />
        <Footer2 />
        </>
        
    )
}

export default Page1