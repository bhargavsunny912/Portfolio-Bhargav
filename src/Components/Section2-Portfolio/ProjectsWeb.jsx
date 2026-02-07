import Project from "./Project";

const Projects=()=>{

    const Details=[
        {projectname:"Airbnb (Travel Application)",projectdomain:"Web Development",navigationlink:"https://airbnb-miniversion.onrender.com/listing",imgurl:"/Airbnb.avif"},
        {projectname:"Animated Portfolio",projectdomain:"Web Development",navigationlink:"https://react-portfolio-animated.onrender.com/",imgurl:"https://mir-s3-cdn-cf.behance.net/projects/404/28ceb2220930093.Y3JvcCwxMDA3LDc4OCwxOTcsMA.jpg"},
        {projectname:"Text Editor Package (NPM)",projectdomain:"Web Development",navigationlink:"https://www.npmjs.com/package/flowtext",imgurl:"/rich-text-editor-for-react-min.png"},
        {projectname:"Stock Scope (Market Data)",projectdomain:"Web Development",navigationlink:"/a",imgurl:"/stock-market.webp"},
    ];

    return (
        <div className="flex flex-wrap gap-5 mx-10 mb-10 sm:justify-evenly xl:justify-start">
            {Details.map((p,index)=>{
                return <Project key={index} data={p} />
            })}
        </div>
    );
}
export default Projects;
