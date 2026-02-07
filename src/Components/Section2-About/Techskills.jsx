import TechImg from "./TechImg";

const Techskills=()=>{
    const TechImgs=["html","css","javascript","tailwind","reactjs","redux","nodejs","expressjs","mongodb","git","material-ui"];
    return (
        <>
            <h2 className="py-5 px-0 font-bold text-2xl">Tech Skills</h2>
                {/* <div className="Tech flex flex-row overflow-x-scroll items-center gap-12 mt-8 mx-3 mb-10">
                    {TechImgs.map((s,i)=>{
                        return <TechImg key={i} data={s} />
                    })}
                </div> */}
            <div className="flex flex-col gap-5 py-5">
                <div className="flex items-start gap-5 ">
                    <h1 className="font-semibold shrink-0">Frontend Development :</h1>
                    <div className="flex items-center gap-2 flex-wrap">
                        <h1 className="hover:bg-[#ffc003] hover:scale-110 bg-color3 text-color1 px-4 font-semibold text-sm py-1 rounded-xl">HTML</h1>
                        <h1 className="hover:bg-[#ffc003] hover:scale-110 bg-color3 text-color1 px-4 font-semibold text-sm py-1 rounded-xl">CSS</h1>
                        <h1 className="hover:bg-[#ffc003] hover:scale-110 bg-color3 text-color1 px-4 font-semibold text-sm py-1 rounded-xl">JAVASCRIPT</h1>
                        <h1 className="hover:bg-[#ffc003] hover:scale-110 bg-color3 text-color1 px-4 font-semibold text-sm py-1 rounded-xl">REACT.JS</h1>
                        <h1 className="hover:bg-[#ffc003] hover:scale-110 bg-color3 text-color1 px-4 font-semibold text-sm py-1 rounded-xl">REDUX TOOLKIT</h1>
                        <h1 className="hover:bg-[#ffc003] hover:scale-110 bg-color3 text-color1 px-4 font-semibold text-sm py-1 rounded-xl">TAILWINDCSS</h1>
                        <h1 className="hover:bg-[#ffc003] hover:scale-110 bg-color3 text-color1 px-4 font-semibold text-sm py-1 rounded-xl">MATERIAL UI</h1>
                    </div>
                </div>
                <div className="flex items-start gap-5 ">
                    <h1 className="font-semibold shrink-0">Backend Development :</h1>
                    <div className="flex items-center gap-2 flex-wrap">
                        <h1 className="hover:bg-[#ffc003] hover:scale-110 bg-color3 text-color1 px-4 font-semibold text-sm py-1 rounded-xl">NODE.JS</h1>
                        <h1 className="hover:bg-[#ffc003] hover:scale-110 bg-color3 text-color1 px-4 font-semibold text-sm py-1 rounded-xl">EXPRESS.JS</h1>
                        <h1 className="hover:bg-[#ffc003] hover:scale-110 bg-color3 text-color1 px-4 font-semibold text-sm py-1 rounded-xl">REST-API</h1>
                        <h1 className="hover:bg-[#ffc003] hover:scale-110 bg-color3 text-color1 px-4 font-semibold text-sm py-1 rounded-xl">PYTHON</h1>
                    </div>
                </div>
                <div className="flex items-start gap-5 ">
                    <h1 className="font-semibold shrink-0">Database Management :</h1>
                    <div className="flex items-center gap-2 flex-wrap">
                        <h1 className="hover:bg-[#ffc003] hover:scale-110 bg-color3 text-color1 px-4 font-semibold text-sm py-1 rounded-xl">MONGO DB</h1>
                        <h1 className="hover:bg-[#ffc003] hover:scale-110 bg-color3 text-color1 px-4 font-semibold text-sm py-1 rounded-xl">POSTGRESS SQL</h1>
                        <h1 className="hover:bg-[#ffc003] hover:scale-110 bg-color3 text-color1 px-4 font-semibold text-sm py-1 rounded-xl">SQL</h1>
                    </div>
                </div>
                <div className="flex items-start gap-5 ">
                    <h1 className="font-semibold shrink-0">Tools And Technologies :</h1>
                    <div className="flex items-center gap-2 flex-wrap">
                        <h1 className="hover:bg-[#ffc003] hover:scale-110 bg-color3 text-color1 px-4 font-semibold text-sm py-1 rounded-xl">GIT</h1>
                        <h1 className="hover:bg-[#ffc003] hover:scale-110 bg-color3 text-color1 px-4 font-semibold text-sm py-1 rounded-xl">GITHUB</h1>
                        <h1 className="hover:bg-[#ffc003] hover:scale-110 bg-color3 text-color1 px-4 font-semibold text-sm py-1 rounded-xl">DSA</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Techskills;