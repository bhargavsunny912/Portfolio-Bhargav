import { NavLink } from "react-router-dom";

const MiniNav=()=>{
    return (
        <div className="flex gap-8 ml-8 mt-2 mb-4 justify-baseline">
            <NavLink to="/Portfolio/All" style={({isActive})=>({color:isActive?"#ffdb70":""})} className="hover:opacity-60 text-lg">All</NavLink>
            <NavLink to="/Portfolio/Web" style={({isActive})=>({color:isActive?"#ffdb70":""})} className="hover:opacity-60 text-lg">Web Development</NavLink>
            <NavLink to="/Portfolio/App" style={({isActive})=>({color:isActive?"#ffdb70":""})} className="hover:opacity-60 text-lg">Applications</NavLink>
        </div>
    );
}
export default MiniNav;