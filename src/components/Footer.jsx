import Logo from"../assets/logo.png"
function Footer(){
    return(
<>

<footer>
    <hr />
    <div className="mainWrapper">
        <div className="one">
            <img src={Logo}alt="" />
            <div className="text">
                <p>
                Lorem ipsum dolor sit amet<br/>, consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt 
                </p>
            </div>
        </div>
        <div className="two">
            <h2>Quick Links</h2>
            <ol>
                <li>Connect Wallet</li>
                <li>Merchandise</li>
                <li>Promotions</li>
            </ol>
        </div>
        <div className="three">
            <h1>
            Subscribe For Merch Discount Updates
            </h1>
            <div className="submit">
                <input className="email" type="text" placeholder="Your email here"/>
                <input className="submits" type="submit" placeholder="Subscribe"/>
                            </div>
        </div>

        
    </div>
</footer>

</>
    );
}
export default Footer;
