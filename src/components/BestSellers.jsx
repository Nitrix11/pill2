import Hat from"../assets/Rectangle37.png"
import Box from"../assets/box.png"
import Shirt from"../assets/shirt.png"
import Cryto from "../pages/BlogPage"



function Cards(){
    return(
        <div className="Maincards">
        <div className="bestsellers">
            <h1>
                Best Sellers
            </h1>
            <div className="cards1">
                <div className="card">
                    <div className="cardpic">
                        <img src={Hat} alt="" />
                    </div>
                    <div className="cardtext">
<h2>Kango Hat</h2>
<h4>Price: <span>1 SOL</span></h4>
<p>You will buy 1 Pill for 1 SOL</p>
                    </div>
                </div>
                <div className="card">
                    <div className="cardpic">
                        <img src={Box} alt="" />
                    </div>
                    <div className="cardtext">
<h2>Bear Brick</h2>
<h4>Price: <span>1 SOL</span></h4>
<p>You will buy 1 Pill for 1 SOL</p>
                    </div>
                </div>
                <div className="card">
                    <div className="cardpic">
                        <img src={Shirt} alt="" />
                    </div>
                    <div className="cardtext">
<h2>Shirt </h2>
<h4>Price: <span>1 SOL</span></h4>
<p>You will buy 1 Pill for 1 SOL</p>
                    </div>
                </div>
                
            </div>
        </div>
        <span>
            <Cryto></Cryto>

        </span>
        </div>
    )
}
    export default Cards;