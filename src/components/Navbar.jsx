import PillLogo from"../assets/logo.png"
import CartPic from"../assets/cart.svg"
import SearchIcon from"../assets/Group.svg"
import Menu from"../assets/Menu.svg"
import { Link } from "react-router-dom";

function Nav(){
    return(<>

<nav>
<img src={PillLogo} alt="" className="logoss" />
<div className="wrapper">


<ul>
    <li>
      <  Link to="/blogs" className="links">
      Categories
      </Link>
       
      
       </li>
    <div className="cart">
    <li>Cart</li>
    <img src={CartPic} alt="" />
    </div>
</ul>
<button className="searchBtn three" ><img src={SearchIcon} alt="" /></button>
<button className="ConButton">Connect Wallet</button>
<div className="menu">
<img src={Menu} alt="" />
</div>

</div>
</nav>
<hr />
</>
    );

}
export default Nav;

