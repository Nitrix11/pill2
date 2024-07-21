import PillLogo from"../assets/logo.png"
import CartPic from"../assets/cart.svg"
import SearchIcon from"../assets/Group.svg"
function Nav1(){
return(
    <>
    
<nav>
<img src={PillLogo} alt="" />
<div className="wrapper">


<ul>
    <li>
       Categories</li>
    <div className="cart">
    <li>Cart</li>
    <img src={CartPic} alt="" />
    </div>
</ul>
<button className="searchBtn"><img src={SearchIcon} alt="" /></button>
<button className="ConButton">Connect Wallet</button>
</div>
</nav>
<hr />
    </>
);
}
export default Nav1