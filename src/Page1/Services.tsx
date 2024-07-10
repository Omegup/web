import './Service.css'

const Services : React.FC = () => {
    return(
        <>
        <div className='container10'>
            <h3>Our Services</h3>
            <p>At Omegup, we specialize in crafting exceptional digital experiences. Our core services include:</p>
        </div>
        <div className='boxing'> 
            
            <span id='grid1'><div id='circle1'></div><h3 className='titreservices'>Web Development<span id='point1'>.</span></h3> 
            <p className='texteservices'>
                🌐 Website Design & Development: Craft 
                 websites that leave a lasting impression and 
                 drive results.<br/>
                🚀 Web App Development: Build dynamic and 
                powerful web applications to meet your 
                unique needs.<br/>
                📱 Responsive Design: Ensure your web 
                presence is seamless across all devices.</p></span>
            <span id='grid2'><div id='circle2'></div><h3 className='titreservices'>UC/UI Design<span id='point2'>.</span></h3>
            <p className='texteservices '>🎨 User-Centric Design: We create intuitive 
            and visually stunning user interfaces that 
            captivate and engage.<br/>    
                🔍 User Research: Uncover insights to inform 
                design decisions and enhance user 
                experiences.<br/>
                🚀 Prototyping & Testing: Refine designs
                through iterative prototyping and user testing.</p></span>
            <span id='grid3'><div id='circle3'></div><h3 className='titreservices'>Mobile Development<span id='point3'>.</span></h3> 
            <p className='texteservices'>
            📱 iOS & Android Apps: Develop mobile apps 
            that shine on every platform and provide
            exceptional user experiences.<br/>
            💡 Mobile Strategy: Create strategies to 
            conquer the mobile market and reach your 
            audience effectively.<br/>
            🚀 App Optimization: Enhance app 
            performance.    </p></span>
        </div>
        </>
    )
}


export default Services;