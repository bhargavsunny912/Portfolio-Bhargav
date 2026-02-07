import { NavLink } from "react-router-dom";

const Navbar=()=>{

    return (
        <div className="font-semibold border-2 border-color2 flex justify-evenly items-center w-3/5 bg-color4 border-r-0 border-t-0 rounded-tr-xl rounded-bl-[20px]">
            <NavLink to="/" className="hover:opacity-60" style={({isActive})=>({color:isActive?"#ffdb70":""})}>About</NavLink>
            <NavLink to="/Resume" className="hover:opacity-60" style={({isActive})=>({color:isActive?"#ffdb70":""})}>Resume</NavLink>
            <NavLink to="/Portfolio/All" className="hover:opacity-60" style={({isActive})=>({color:isActive?"#ffdb70":""})}>Portfolio</NavLink>
            <NavLink to="/Contact" className="hover:opacity-60" style={({isActive})=>({color:isActive?"#ffdb70":""})}>Contact</NavLink>
        </div>
    );
}
export default Navbar;