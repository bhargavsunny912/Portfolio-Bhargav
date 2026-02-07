const Expcard=({data})=>{
    return (
        <>
            <div className="max-h-1/4 my-4 mx-0 max-w-2/5 bg-color5 p-6 rounded-2xl shadow-md hover:scale-105 hover:shadow-[10px_10px_50px_white] shadow-color2 flex gap-5">
                        <img className="h-10 w-10" src={data.img} alt="logo" />
                        <div className="flex flex-col gap-3 leading-relaxed">
                            <h3 className="font-bold text-xl">{data.title}</h3>
                            <p className="text-primary3">{data.desc}</p>
                        </div>
                    </div>
        </>
    );
}
export default Expcard;