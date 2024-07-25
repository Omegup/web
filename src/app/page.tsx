import "./g2.css"
import "./g.css"
import NavBar from "@/components/App";
import Acceuil from "@/components/App2";
import Objectives from "@/components/App3";
import ContactUS from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Footer2 from "@/components/footer2";
import Menu_1 from "@/components/Menu1";
import Services from "@/components/Services";
import TourneImage from "@/components/triplebulle";
export default function Home() {
  return (
  <>
  <NavBar/>
<Acceuil/>
<Objectives/>
<Services/>
<Footer/>
<Menu_1/>
<TourneImage/>
<ContactUS/>
<Footer2/>
</>
  );
}
