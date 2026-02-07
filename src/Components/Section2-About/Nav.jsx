import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Nav=()=>{
    return (
        <div className="flex justify-between h-15 -pr-[30px]">
                <Link to="/" className="pl-7.5 font-bold w-2/5 self-end text-3xl">About Me</Link>
                <Navbar />
            </div>
    );
}
export default Nav;