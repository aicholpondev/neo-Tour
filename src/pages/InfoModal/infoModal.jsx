import { IoMdClose } from "react-icons/io";
import "./infoModal.css"
import {useState} from "react";
import PhoneInput from 'react-phone-number-input';
import Booking from "../BookLooking/BookLooking";


export default function InfoModal(){
    const[num,setNum] =useState(0);
    const [value, setValue] = useState();
    const [comments, setComments] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [book,setBook] = useState(false);




    function increment(event){
        event.preventDefault()
        setNum(num+1)

    }
    function decrement(event){
        event.preventDefault()
        setNum(num-1)
    }

    function showBook (){
        setBook(true)
    }




    return(
        <section>

            <div className="modal-container">
             <center>
                <form >
                    <div className="modal-info-close">
                        <h2>Info</h2> <button><IoMdClose /></button>
                    </div>
                    <p>To submit an application for a tour reservation, you need to fill in your information and select the number of people for the reservation</p>


                    <div className="info-number">
                        <h3>Phone number</h3>
                        < PhoneInput className="w-4 flex gap-2 items-center"

                            international={false}
                            defaultCountry="KG"
                            value={value}
                            onChange={setValue}/>
                    </div>
                    <div className="info-comment">
                        <h3>Commentaries to trip</h3>
                        <input type="text"
                               placeholder="Write your wishes to trip"/>
                    </div>
                    <div className="info-people">
                        <h3>Commentaries to trip</h3>
                    </div>
                    <center>
                    <div className=" flex items-center  gap-6 ml-8">

                           <button className="btn-number" onClick={decrement}>-</button>
                           <h4 className="text-2xl font-bold">{num}</h4>

                           <button className="btn-number" onClick={increment}>+</button>

                    </div>
                    </center>
                    <button className="submit-btn" onClick={showBook}>SUBMIT</button>
                    {
                        book? <Booking/> : ""
                    }
                </form>
             </center>

            </div>

        </section>
    )

}