import Project from "./Project";

const Projects = () => {

    const ProjectData=[
        {
            name:"Stock Scope ( Stock Market Data )",
            status:"Completed",
            desc:"Built a stock market application that provides free access to stocks, mutual funds, IPOs, and live Sensex/Nifty data. Features include full historical data, interactive line and candlestick charts, API-driven real-time updates, and a wishlist for tracking favorite assets.",
            SourceCode:"/a",
            TechStack:["REACT.JS","REDUX TOOLKIT","TAILWIND CSS","NODE.JS","REST API'S","MUI"]
        },
        {
            name:"Airbnb (Travel Based Application)",
            status:"Completed",
            desc:"Developed an Airbnb-inspired travel application with authentication, authorization, hotel listings, pricing, ratings, reviews, and sorting features. Integrated database support for user and listing data with secure login and signup functionality.",
            SourceCode:"https://github.com/bhargavsunny912/Airbnb-Mini",
            TechStack:["EXPRESS.JS","NODE.JS","REST API'S","HTML","CSS","JS","MONGODB","CLOUDINARY","PASSPORT.JS"]
        },
        {
            name:"Text Editor Package (NPM)",
            status:"Completed",
            desc:"Created and published a customizable Rich Text Editor npm package featuring font styling, alignment, resizing, emojis, image/file uploads, and speech-to-text support. Captures and outputs submitted content to the console for easy integration.",
            SourceCode:"https://www.npmjs.com/package/flowtext",
            TechStack:["JS","NPM"]
        }
    ];

  return (
    <>
        <h2 className="py-5 px-0 font-bold text-2xl">Featured Projects</h2>
        <div className="mb-10 flex xl:w-full xl:flex-row xl:flex-wrap xl:justify-evenly sm:w-[200%] sm:flex-col sm:gap-5">
            {ProjectData.map((d,index)=>{
                return <Project key={index} data={d} />
            })}
        </div>
    </>
  );
};

export default Projects;