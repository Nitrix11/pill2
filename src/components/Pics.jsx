import Boy from"../assets/boy.png"
import Girl from"../assets/girl.png"
import Boy2 from"../assets/yelloB.png"
function Sells(){
    return(
        <>
        <div className="sells">
            <div className="photo">
<div className="pic">
    <img src={Boy}alt="" />
    <button className="ConButton">Buy shirt Merch</button>
</div>
            </div>
            <div className="photo">
<div className="pic">
    <img src={Boy2}alt="" />
    <button className="ConButton">Buy shirt Merch</button>
</div>
            </div>
            <div className="photo">
<div className="pic">
    <img src={Girl}alt="" />
    <button className="ConButton">Buy shirt Merch</button>
</div>
            </div>
        </div>
        
        </>
    )
}
export default Sells;