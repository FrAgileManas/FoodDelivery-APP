import { BsCart2 } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { UserContext } from "../UserContext"
import logo from "../../assets/logo.png";

function Header(){
    const iconColor="rgb(0, 128, 128)";
    const {username}=useContext(UserContext)
    
return(
<>
<div className={styles.header} style={{"position":"sticky","top":"0"}}>
<img src={logo} alt="Logo" className={styles.logo}/>
<div className={styles.menuIcon}>
<IoMenu color={iconColor} size={30} />
<span >Menu</span>
</div>
<input type="text" id={styles.search}  placeholder="Kya chaiye "/>
<div className={styles.icon}>
<span className={styles.location}>
<FaLocationDot color={iconColor} size={20} />
<span className={styles.city}>Gurugram,122001</span>
</span>
<span className="user"><FaUser color={iconColor}  size={20} />{username}</span>
<div className={styles.cart}>
<BsCart2 color={iconColor} size={25} style={{"marginRight":"0%"}}/>
<span className={styles.count}>6</span>
</div>
</div>
</div>
</>
);
}
export default Header