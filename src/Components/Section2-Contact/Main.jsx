import Underline from "../Underline";
import Form from "./Form";

const Main=()=>{
    return (
        <>
            <div>
                <Underline />
                <iframe className="border-none rounded-6xl w-full my-12.5 px-12.5  h-[80vh]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.040728841562!2d78.36540907331896!3d17.430740401558474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f191b31379%3A0x1e6014b001cad7d4!2sC9J9%2B853%20SLN%20Luxury%20Men&#39;s%20PG%2C%20Telecom%20Nagar%2C%20Gachibowli%2C%20Hyderabad%2C%20Telangana%20500032!5e1!3m2!1sen!2sin!4v1768903286175!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <h2 className="px-10 text-2xl font-semibold">Contact Form</h2>
                <Form />
            </div>
        </>
    );
}
export default Main;