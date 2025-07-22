import { Link } from "react-router-dom";

function Navbar() {
    return (
      <div style={{display:"flex", gap:"3rem", justifyContent:'center' ,border: "2px solid red", }}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    );

}
export default Navbar;