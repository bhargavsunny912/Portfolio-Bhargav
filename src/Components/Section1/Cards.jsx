import Card from "./Card";

const Cards=({data})=>{
    return (
        <div className="flex flex-col gap-5 flex-wrap">
            {data.map((s,index)=>{
                return <Card key={index} data={s}/>
            })}
        </div>
    );
}
export default Cards;