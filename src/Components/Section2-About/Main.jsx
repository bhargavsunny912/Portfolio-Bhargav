import Aboutme from "./Aboutme";
import Experience from "./Experience";
import Projects from "./Projects";
import Techskills from "./Techskills";

const Main=()=>{
    return (
        <div className="px-8">
                <Aboutme />
                <Techskills />
                {/* <Experience /> */}
                <Projects />
            </div>
    );
}
export default Main;