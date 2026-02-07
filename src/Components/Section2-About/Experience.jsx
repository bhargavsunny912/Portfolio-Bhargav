import ExpCards from "./ExpCards";

const Experience=()=>{

    const Expdata=[
                    {
                    title: "Web Design",
                    desc: "Designing clean, responsive, and user-friendly interfaces with a strong focus on UI/UX principles.",
                    img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-design.svg"
                    },
                    {
                    title: "Web Development",
                    desc: "Building scalable and high-performance web applications using modern frontend and backend technologies.",
                    img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-dev.svg"
                    },
                    {
                    title: "Problem Solving (DSA)",
                    desc: "Solving data structures and algorithm problems to write efficient, optimized, and clean code.",
                    img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-app.svg"
                    },
                    {
                    title: "Open Source",
                    desc: "Contributing to open-source projects by improving features, fixing bugs, and collaborating with developers.",
                    img: "https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-photo.svg"
                    }

    ];
    return (
        <>
            <h2 className="py-5 px-0 font-bold text-2xl">What I have done so far</h2>
                <div className="flex xl:w-full xl:flex-row xl:flex-wrap xl:justify-evenly sm:w-[250%] sm:flex-col sm:gap-5">
                    <ExpCards  data={Expdata}/>
                </div>
        </>
    );
}
export default Experience;