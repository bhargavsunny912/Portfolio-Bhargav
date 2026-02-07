import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const Form=()=>{

    const [Form,SetForm]=useState(
        {name:"",email:"",msg:""}
    );
    

    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_API_KEY;
        console.log(WEB3FORMS_KEY);
        formData.append("access_key",`${WEB3FORMS_KEY}`);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");
        if(data.success){
            toast("Ok , I Will Get Back To U ASAP");
        }
        else{
            toast("Error , Enter the correct Details and Try Again");
        }
        SetForm((pre)=>({...pre,name:"",email:"",msg:""}));
    };

    return (
        <>
            <form onSubmit={onSubmit} action="" className="flex flex-wrap justify-between my-10 px-10">
                <input name="name" value={Form.name} onChange={(e)=>SetForm({...Form,name:e.target.value})} type="text" placeholder="Full Name" className="focus:outline-3 focus:outline-color3 border border-color3 p-5 w-[45%] text-color3 rounded-xl" required />
                <input name="email" value={Form.email} onChange={(e)=>SetForm({...Form,email:e.target.value})}  type="email" placeholder="Email Address" className="focus:outline-3 focus:outline-color3 border border-color3 p-5 w-[45%] text-color3 rounded-xl" required />
                <input name="msg" value={Form.msg} onChange={(e)=>SetForm({...Form,msg:e.target.value})} type="text" placeholder="Message" className="focus:outline-3 focus:outline-color3 border border-color3 rounded-xl px-5 pb-2.5 w-full h-[20vh] text-color3 overflow-x-scroll my-5" required />
                <button type="submit" className="flex items-center gap-2.5 border-none bg-color5 text-color3 p-5 rounded-xl mt-5 mx-auto shadow-[1px_1px_2px_white] text-xl"><svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffdb70" d="M256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM371 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5c-2.2 .5-37.1 23.5-104.6 69.1-9.9 6.8-18.9 10.1-26.9 9.9-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3 .6-4.5 6.7-9 18.4-13.7 72.3-31.5 120.5-52.3 144.6-62.3 68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9 2 1.7 3.2 4.1 3.5 6.7 .5 3.2 .6 6.5 .4 9.8z"/></svg>Send Message</button>
                <ToastContainer />
                <p>{result}</p>
            </form>
        </>
    );
}
export default Form;