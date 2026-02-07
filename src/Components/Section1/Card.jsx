import { useSelector } from "react-redux";

const Card=({data})=>{

    const datas=useSelector((state)=>state.viewstatus.value);

    return (
        <>
            <div className={`${datas?"sm:flex":"sm:hidden"} xl:flex flex justify-baseline gap-4 w-[80%]`}>
                <span className="flex justify-center items-center p-3 h-10 w-10 bg-color5 shadow-[1px_1px_5px_#383838] rounded-lg">{data.img}</span>
                <div className="flex flex-col gap-1 items-start">
                    <h3 className="text-primary1 text-xs">{data.type}</h3>
                    <h3 className="text-primary2 text-sm">{data.data}</h3>
                </div>
            </div>
        </>
    );
}
export default Card;