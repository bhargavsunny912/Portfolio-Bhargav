import Section1 from "../Section1/Section1";
import Nav from "../Section2-About/Nav";
import Underline from "../Underline";
import MainWeb from "./MainWeb";
import MiniNav from "./MiniNav";

const Web=()=>{
    return (
        <>
            <Section1 />
            <section className="flex flex-col gap-6 sm:w-full xl:w-[75%] rounded-2xl bg-color1 border-2 border-color2 h-max">
                <Nav />
                <Underline />
                <MiniNav />
                <MainWeb />
            </section>
        </>
    );
}
export default Web;