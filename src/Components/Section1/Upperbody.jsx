import { useSelector } from "react-redux";

const Upperbody=()=>{
    
    const datas=useSelector((state)=>state.viewstatus.value);

    return (
        <>
            <div className="flex xl:flex-col xl:ml-0 gap-2 items-center sm:flex-row sm:justify-baseline sm:ml-30 sm:gap-10 sm:w-full">
                <img className="hover:scale-105 bg-color2 rounded-3xl h-36 w-36" src="/Image.jpeg" alt="profilepic" />
                <div className="flex flex-col gap-4">
                    <h2 className="font-semibold text-3xl">Bhargav Penta</h2>
                    <p className=" bg-color4 rounded-xl text-sm py-1 px-10 border border-color3">Full Stack Developer</p>
                </div>
            </div>

            <hr className={`${datas?"sm:block":"sm:hidden"} xl:block w-[80%] border border-color2`}/>
        </>
    );
}
export default Upperbody;