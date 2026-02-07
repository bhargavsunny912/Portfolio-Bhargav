import Upperbody from "./Upperbody";
import Cards from "./Cards";
import Footer from "./footer";
import ShowContacts from "./ShowContacts";

const Section1=()=>{

    const features=[
        {type:"EMAIL",data:"Bhargavpenta@gmail.com",img:<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#FFD43B" d="M0 352L0 128C0 75 43 32 96 32l320 0c53 0 96 43 96 96l0 224c0 53-43 96-96 96l-120 0c-5.2 0-10.2 1.7-14.4 4.8L166.4 539.2c-4.2 3.1-9.2 4.8-14.4 4.8-13.3 0-24-10.7-24-24l0-72-32 0c-53 0-96-43-96-96z"/></svg>},
        {type:"PHONE",data:"+91 9908472491",img:<svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffdb70" d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM128 440c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-13.3 0-24 10.7-24 24zM304 64l-224 0 0 304 224 0 0-304z"/></svg>},
        {type:"BIRTHDAY",data:"09-05-2004",img:<svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffdb70" d="M120 0c13.3 0 24 10.7 24 24l0 40 160 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-40c0-13.3 10.7-24 24-24zM384 432c8.8 0 16-7.2 16-16l0-64-88 0 0 80 72 0zm16-128l0-80-88 0 0 80 88 0zm-136 0l0-80-80 0 0 80 80 0zm-128 0l0-80-88 0 0 80 88 0zM48 352l0 64c0 8.8 7.2 16 16 16l72 0 0-80-88 0zm136 0l0 80 80 0 0-80-80 0zM120 112l-56 0c-8.8 0-16 7.2-16 16l0 48 352 0 0-48c0-8.8-7.2-16-16-16l-264 0z"/></svg>},
        {type:"LOCATION",data:"Hyderabad,Telangana, INDIA.",img:<svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffdb70" d="M288-16c17.7 0 32 14.3 32 32l0 18.3c98.1 14 175.7 91.6 189.7 189.7l18.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-18.3 0c-14 98.1-91.6 175.7-189.7 189.7l0 18.3c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-18.3C157.9 463.7 80.3 386.1 66.3 288L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l18.3 0C80.3 125.9 157.9 48.3 256 34.3L256 16c0-17.7 14.3-32 32-32zM128 256a160 160 0 1 0 320 0 160 160 0 1 0 -320 0zm160-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>},
    ];
    return (
            // <section className="sm:relative flex flex-col gap-7 items-center xl:w-[23%] rounded-3xl border-2 border-color2 bg-color1 xl:pt-15 xl:pb-20 sm:py-10  h-max">
            //     <Upperbody />
            //     <ShowContacts />
            //     <div className="flex flex-col gap-7">
            //         <Cards data={features}/>
            //         <Footer />
            //     </div>
            // </section>
    <aside className="xl:sticky xl:top-0 xl:self-start xl:w-[23%] w-full h-fit">
        <section className="sm:relative flex flex-col gap-7 items-center rounded-3xl border-2 border-color2 bg-color1 xl:pt-15 xl:pb-20 sm:py-10">
            <Upperbody />
            <ShowContacts />
            <div className="flex flex-col gap-7">
                <Cards data={features}/>
                <Footer />
            </div>
        </section>    
    </aside>
    );
}
export default Section1;