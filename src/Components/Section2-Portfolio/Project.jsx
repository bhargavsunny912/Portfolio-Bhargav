import { NavLink } from "react-router-dom";

const Project=({data})=>{
    return (
        <>
            <NavLink to={`${data.navigationlink}`} target="_blank">
                <div className="flex flex-col justify-baseline">
                <div className={`hover:border-0 ease-in-out duration-300 bg-origin-content border-transparent border-10 sm:h-65 sm:w-90 xl:h-55 xl:w-65`}>
                    <img className="rounded-2xl h-full w-full" src={data.imgurl} alt="img" />
                </div>
                <h1 className="text-primary2 font-semibold mt-2 ml-3">{data.projectname}</h1>
                <p className="text-[#868686] font-normal ml-3">{data.projectdomain}</p>
            </div>
            </NavLink>
        </>
    );
}
export default Project;