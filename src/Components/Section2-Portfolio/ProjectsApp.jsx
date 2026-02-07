import Project from "./Project";

const Projects=()=>{

    const Details=[
        {projectname:"Safe Video Transmission",projectdomain:"Application",navigationlink:"/a",imgurl:"/Video-Encryption.webp"},
        {projectname:"Text To Image Converter",projectdomain:"Web Development",navigationlink:"/a",imgurl:"/Text-to-image.webp"},
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