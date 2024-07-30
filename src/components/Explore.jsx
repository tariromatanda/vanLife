import Nav from "./Navbar"
import Cream from"../assets/cream.png"
import Blue from"../assets/blue.png"
import Red from"../assets/red.png"
import Vanback from"../assets/vanback.png"
import White from"../assets/white.png"
import Green from"../assets/green.png"
import Van from "../components/Vans";
import SimpleBtn from "../components/btns/Simple";
import Rugged from"../components/btns/Rugged"
import Footer from "./Footer";
import Luxury from "../components/btns/Luxury"
function Explore(){ 
    return(
<div id="Explore">
<Nav></Nav>
<div className="exploreWrapper">
<div className="firstSection">
    <h1>
    Explore our van options
    </h1>
    <div className="btns">
       <SimpleBtn/>
       <Luxury/>
      <Rugged/>
        <a href="#">Clear filters</a>
    </div>
    </div>
    <div className="secondSection">
    <Van
  pic={Cream}
  vanName="Modest Explorer"
  size="$60"
  button={<SimpleBtn/>}
  />
   <Van
  pic={Blue}
  vanName="Beach Bum"
  size="$80"
  button={<Rugged/>}
  />
    </div>
    <div className="thirdSection">
    <Van
  pic={Red}
  vanName="Reliable Red"
  size="$100"
  button={<Luxury/>}
  />
   <Van
  pic={Vanback}
  vanName="Dreamfinder"
  size="$65"
  button={<SimpleBtn/>}
  />
    </div>
    <div className="fourthSection">
    <Van
  pic={White}
  vanName="The Cruiser"
  size="$120"
  button={<Luxury/>}
  />
   <Van
  pic={Green}
  vanName="Green Wonder"
  size="$70"
  button={<Rugged/>}
  />
    </div>


</div>
<Footer></Footer>
</div>

    )
}
export default Explore