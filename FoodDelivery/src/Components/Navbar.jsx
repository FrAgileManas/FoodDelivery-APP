import { BsCart2 } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import "./Navbar.css";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import logo from "../assets/logo.png";

function Header(){
    const iconColor="rgb(0, 128, 128)";
    const {username}=useContext(UserContext)
    console.log("leeee"+username)
return(
<>
<div className="header" style={{"position":"sticky","top":"0"}}>
<img src={logo} alt="Logo" className="logo"/>
<div className="menuIcon">
<IoMenu color={iconColor} size={30} />
<span >Menu</span>
</div>
<input type="text" id="search" placeholder="Kya chaiye "/>
<div className="icon">
<span className="location">
<FaLocationDot color={iconColor} size={20} />
<span className="city">Gurugram,122001</span>
</span>
<FaUser color={iconColor}  size={20} />{username}
<div className="cart">
<BsCart2 color={iconColor} size={20} style={{"marginRight":"0%"}}/>
<span className="count">6</span>
</div>
</div>
</div>
</>
);
}
export default Header