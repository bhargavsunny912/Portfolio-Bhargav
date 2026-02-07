const Experience=()=>{
    return (
        <div className="my-4 px-8">
                    <div className="flex gap-5 items-center font-bold mb-7">
                        <svg className="h-11 w-11 bg-color5 p-2.5 rounded-xl shadow-[1px_1px_5px_#383838]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffdb70" d="M256 152a88 88 0 1 0 0-176 88 88 0 1 0 0 176zm0 298.7l0-149.3c16.3-6.8 32.9-13.7 49.7-20.7 39-16.2 80.8-24.6 123.1-24.6l19.2 0 0 160-19.2 0c-59.1 0-117.7 11.7-172.3 34.5l-.5 .2zM256 232l-25.1-10.5C184.1 202 133.9 192 83.2 192L48 192c-26.5 0-48 21.5-48 48L0 432c0 26.5 21.5 48 48 48l35.2 0c50.7 0 100.9 10 147.7 29.5l12.8 5.3c7.9 3.3 16.7 3.3 24.6 0l12.8-5.3c46.8-19.5 97-29.5 147.7-29.5l35.2 0c26.5 0 48-21.5 48-48l0-192c0-26.5-21.5-48-48-48l-35.2 0c-50.7 0-100.9 10-147.7 29.5L256 232z"/></svg>
                        <h2 className="text-2xl">Experience And Certifications</h2>
                    </div>
                    <div className="flex flex-col gap-7 pl-15 w-[90%] relative before:absolute before:content-[''] before:w-px before:bg-color2 before:left-5 before:inset-y-34 before:-top-7">
                        <div className="flex flex-col gap-1 relative before:absolute before:content-[''] before:h-4 before:w-4 before:bg-color3 before:rounded-full before:-left-11 before:border-4 before:border-color2 before:-ml-1 before:top-1 before:z-10">
                            <h4>AccioJob ( Hands On Experience )</h4>
                            <p className="text-color3">2025 — 2026</p>
                            <p className="text-primary3 leading-6.25">Undergoing intensive full-stack development training with hands-on experience in JavaScript, React, Node.js, Express, MongoDB . Building real-world projects involving REST APIs, authentication, database design, and responsive UI development . Practicing DSA, Git/GitHub, and industry-standard coding practices.</p>
                        </div>
                        <div className="flex flex-col gap-1 relative before:absolute before:content-[''] before:h-4 before:w-4 before:bg-color3 before:rounded-full before:-left-11 before:border-4 before:border-color2 before:-ml-1 before:top-1 before:z-10">
                            <h4>Suvidha Foundation ( Frontend Developer )</h4>
                            <p className="text-color3">2025 — 2025</p>
                            <p className="text-primary3 leading-6.25"> Contributed to the development and deployment of a website dedicated to women empowerment and security,focusing on frontend development. Implemented user interface (UI) components using technologies like HTML, CSS, JavaScript, React to create an engaging user experience and increased the user experience by adding animations using Gsap .</p>
                        </div>
                        {/* <div className="flex flex-col gap-1 relative before:absolute before:content-[''] before:h-4 before:w-4 before:bg-color3 before:rounded-full before:-left-11 before:border-4 before:border-color2 before:-ml-1 before:top-1 before:z-10">
                            <h4>High school of art and design</h4>
                            <p className="text-color3">2002 — 2004</p>
                            <p className="text-primary3 leading-6.25">Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.</p>
                        </div> */}
                    </div>
                </div>
    );
}
export default Experience;