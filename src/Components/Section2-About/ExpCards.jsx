import Expcard from "./ExpCard";

const ExpCards=({data})=>{
    return (
        <>
            {data.map((s,i)=>{
                return <Expcard key={i} data={s} />
            })}
        </>
    );
}
export default ExpCards;