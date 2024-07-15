import React from "react";
import './contactus.css'


const ContactUs : React.FC = () => {
    return (
        <>
        <div className="bigContainer">
            <div className="formtext"><h3>Contact Us - Let's Start Building Together</h3>
            <p>At Omegup, we believe in open communication. Whether you have an inquiry, need a quote, 
                or want to discuss a project, we're here to help. Reach out to us and discover the power of web development expertise.
            </p></div>
            <div className="form">
                <form>
                    
                    
                    <label htmlFor="text"> Full Name </label>
                    <input type="text" name="Full-Name" id="Full-Name" />
                    <label htmlFor="e-mail">E-mail</label>
                    <input type="email" name="e-mail" id="e-mail" />
                    <label htmlFor="p-number">Mobile Number</label>
                    <input type="number" name="p-number" id="p-number" />
                    <br/>
                    <label htmlFor="message">Message</label>
                    <input type="text" name="message" id="message" />
                    <br/>
                    <div className="submit2">
                    
                    <input type="submit" value="Get In Touch Now !" id="submit"/>
                    
                    </div>
                </form>
            </div>

        </div>
        </>
    )
}

export default ContactUs;