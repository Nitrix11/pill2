import AbtPic from"../assets/Rectangle.png"

function Abouts(){
    return(
        <>
        <div className="about">
            <div className="textAbt">
                <h1>
                    <span>
                    Pill Syndrome
                    </span>
                </h1>
                <h1>
                Merch Store
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua. Ut<br/> enim ad minim veniam, quis nostrud <br/>exercitation ullamco laboris nisi ut aliquip ex<br/> ea commodo consequat.</p>
                <button className="ConButton">Connect Wallet</button>
            </div>
  
        <div className="pic">
            <img src={AbtPic} alt="" />
        </div>
        </div>
        </>
    )
}
export default Abouts;
