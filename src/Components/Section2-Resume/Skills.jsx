const Skills=()=>{
    return (
        <>
            <div className="my-4 px-8">
                    <h2 className="text-2xl font-bold">My Skills</h2>
                    <div className="bg-color5 p-7.5 rounded-[10px] shadow-[1px_1px_10px_#383838] my-7.5 mx-auto flex flex-col gap-7.5">
                        <div className="flex flex-col gap-2.5">
                            <h4  className="font-semibold">Frontend Development <span className="text-primary3 ml-2.5">90%</span></h4>
                            <div className="h-2 rounded-xl bg-color2">
                                <div className="bg-color3 h-full rounded-xl" style={{width:"90%"}}></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <h4 className="font-semibold">Backend Development   <span className="per">80%</span></h4>
                            <div className="h-2 rounded-xl bg-color2">
                                <div className="bg-color3 h-full rounded-xl" style={{width:"80%"}}></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <h4 className="font-semibold">Full Stack Development <span className="per">80%</span></h4>
                            <div className="h-2 rounded-xl bg-color2">
                                <div className="bg-color3 h-full rounded-xl" style={{width:"80%"}}></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <h4 className="font-semibold">DSA <span className="per">75%</span></h4>
                            <div className="h-2 rounded-xl bg-color2">
                                <div className="bg-color3 h-full rounded-xl" style={{width:"75%"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}
export default Skills;