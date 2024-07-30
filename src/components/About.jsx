import VanPic1 from"../assets/vanfront.png"
import Footer from "../components/Footer";
import Nav from "../components/Navbar";

function About(){
    return(
    <div className="about">
<Nav></Nav>
    <div className="abtWrapper">
<img src={VanPic1} alt="" />
<h1>
Don't squeeze in a sedan when you could relax in a van.
</h1>
<p>

Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.<br/>
"Hitch costs extra 😉"
<br/></p>

<p className="p">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

<div className="box">
    <h1 className="h1">
    Your destination is waiting.<br/>Your van is ready.
    </h1>
    <button>
    Explore our vans
    </button>
</div>
    </div>
    <Footer></Footer>

    </div>)
 
}
export default About;