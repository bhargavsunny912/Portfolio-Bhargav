import { useDispatch } from "react-redux";
import { toggle } from "../../Redux/ViewSlice";

const ShowContacts=()=>{

    const dispatch=useDispatch();

    const handleview=()=>{
        dispatch(toggle());
    }

    return (
        <div className="absolute top-0 right-0 xl:hidden h-14 text-center w-35 flex p-4 rounded-bl-2xl rounded-tr-2xl text-color3 border-color3 border">
            <button onClick={handleview}>Show Contacts</button>
        </div>
    );
}
export default ShowContacts;