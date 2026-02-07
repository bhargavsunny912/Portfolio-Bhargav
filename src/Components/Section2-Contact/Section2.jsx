import Nav from "../Section2-About/Nav";
import Main from "./Main";

const Section2=()=>{
    return (
        <>
        <section className="flex flex-col gap-6 sm:w-full xl:w-[75%] rounded-2xl bg-color1 border-2 border-color2 h-max">
            <Nav />
            <Main />
        </section>
        </>
    );
}
export default Section2;