import Nav from "../components/Navbar";
import Cards from "../components/BestSellers";
import Shirt from"../assets/shirt.png"
import icon from"../assets/Group2.png"
import Footer from "../components/Footer";
import Copy from "../components/Copyrights";

function Cryto(){
    return(
        
    <div className="cates">
    <Nav ></Nav>
    <div className="both">
    <h1>Buy Using Category</h1>
    <div className="div">
        <input type="seach" placeholder="search" className="input" />
        <button>
        <img src={icon}alt="" />
        </button>
       
    </div>
    </div>
    
    <ul>


        <li className="li">
            <span>
            T-shirts
                </span></li>
        <li className="li">Hoodies</li>
        <li className="li">Toy Pills</li>
        <li className="li">Bear Bricks</li>
        </ul>

    <div className="cate">
    <div className="card">
                    <div className="cardpic">
                        <img src={Shirt} alt="" />
                    </div>
                    <div className="cardtext">
<h2>Shirt Name Here </h2>
<h4>Price: <span>1 SOL</span></h4>
<p>You will buy 1 Pill for 1 SOL</p>
<div className="btn">

    <div className="btns">
    <p>Qty</p>
    <button class="quantity-button">
    <span className="decrease">-</span>
    <span className="quantity">1x</span>
    <span className="increase">+</span>
</button>
    </div>

<button className="ConButton">Buy</button>
</div>

                    </div>
                    </div>
                    <div className="card">
                    <div className="cardpic">
                        <img src={Shirt} alt="" />
                    </div>
                    <div className="cardtext">
<h2>Shirt Name Here </h2>
<h4>Price: <span>1 SOL</span></h4>
<p>You will buy 1 Pill for 1 SOL</p>
<div className="btn">

    <div className="btns">
    <p>Qty</p>
    <button class="quantity-button">
    <span className="decrease">-</span>
    <span className="quantity">1x</span>
    <span className="increase">+</span>
</button>
    </div>

<button className="ConButton">Buy</button>
</div>

                    </div>
                    </div>

    <div className="card">
                    <div className="cardpic">
                        <img src={Shirt} alt="" />
                    </div>
                    <div className="cardtext">
<h2>Shirt Name Here </h2>
<h4>Price: <span>1 SOL</span></h4>
<p>You will buy 1 Pill for 1 SOL</p>
<div className="btn">

    <div className="btns">
    <p>Qty</p>
    <button class="quantity-button">
    <span className="decrease">-</span>
    <span className="quantity">1x</span>
    <span className="increase">+</span>
</button>
    </div>

<button className="ConButton">Buy</button>
</div>

                    </div>
                    </div>
    </div>
   
    <Footer></Footer>
    <Copy/>
    </div>
    )
}
export default Cryto;