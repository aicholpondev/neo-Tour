import { IoMdClose } from "react-icons/io";
import "./infoModal.css"
import {useState} from "react";
import PhoneInput from 'react-phone-number-input';
import Booking from "../BookLooking/BookLooking";
import kg from "../../assets/image/kg-img.png";
import kz from "../../assets/image/kz-img.jpg";
import rf from "../../assets/image/rs-img.png";


export default function InfoModal(){
    const[num,setNum] =useState(0);
    const [value, setValue] = useState();
    const [comments, setComments] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [book,setBook] = useState(false);

    const [showFlags, setShowFlags] = useState(true);
    const [country, setCountry] = useState("kg");
    const [peopleCount, setPeopleCount] = useState(0);




    function increment(event){
        event.preventDefault()
        setNum(num+1)

    }
    function decrement(event){
        event.preventDefault()
        setNum(num-1)
    }

    function showBook (e){
        e.preventDefault()
        setBook(true)
    }
    function showPhoneFlags() {
        setShowFlags(!showFlags);
    }

    function selectPhone(country) {
        setCountry(country);
        setShowFlags(true);
    }




    return(
        <section>

            <div className="modal-container">
             <center>
                <form onSubmit={showBook}>
                    <div className="modal-info-close">
                        <h2>Info</h2> <button type="button"><IoMdClose /></button>
                    </div>
                    <p>To submit an application for a tour reservation, you need to fill in your information and select the number of people for the reservation</p>


                    <div className="info-number">
                        <h3>Phone number</h3>

                        {/*<label>*/}
                        {/*    <select>*/}
                        {/*        <option><img src={kg} alt="img"/>+996</option>*/}
                        {/*        <option><img src={kz} alt="img"/>+7</option>*/}
                        {/*        <option><img src={rf} alt="img"/>+7</option>*/}
                        {/*    </select>*/}
                        {/*</label>*/}
                      
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

                           <button type="button" className="btn-number" onClick={decrement}>-</button>
                           <h4 className="text-2xl font-bold">{num}</h4>

                           <button type="button" className="btn-number" onClick={increment}>+</button>

                    </div>
                    </center>
                    <button className="submit-btn" onClick={showBook} type="submit">SUBMIT</button>
                    {
                        book? <Booking/> : ""
                    }
                </form>
                {/* <form className="book__form">*/}
                {/*     <label htmlFor="phone">Phone number</label>*/}
                {/*     <div className="book__form-phone">*/}
                {/*         <ol className="show__phone-flag">*/}
                {/*             <div className="country__option" onClick={showPhoneFlags}>*/}
                {/*                 <img src={`./imgs/flag_${country}.svg`} alt="flag" />*/}
                {/*                 <div className="phone__arrow"></div>*/}
                {/*             </div>*/}
                {/*         </ol>*/}
                {/*         <ol*/}
                {/*             className={`select__phone-flag ${*/}
                {/*                 showFlags ? "phone__select-active" : null*/}
                {/*             }`}*/}
                {/*         >*/}
                {/*             <div*/}
                {/*                 className="country__option"*/}
                {/*                 onClick={() => {*/}
                {/*                     selectPhone("kg");*/}
                {/*                 }}*/}
                {/*             >*/}
                {/*                 <img src="./imgs/flag_kg.svg" alt="flag" />*/}
                {/*                 <strong>+996</strong>*/}
                {/*                 <div className="phone__arrow"></div>*/}
                {/*             </div>*/}
                {/*             <div*/}
                {/*                 className="country__option"*/}
                {/*                 onClick={() => {*/}
                {/*                     selectPhone("kz");*/}
                {/*                 }}*/}
                {/*             >*/}
                {/*                 <img src="./imgs/flag_kz.svg" alt="flag" />*/}
                {/*                 <strong>+7</strong>*/}
                {/*                 <div className="phone__arrow"></div>*/}
                {/*             </div>*/}
                {/*             <div*/}
                {/*                 className="country__option"*/}
                {/*                 onClick={() => {*/}
                {/*                     selectPhone("ru");*/}
                {/*                 }}*/}
                {/*             >*/}
                {/*                 <img src="./imgs/flag_ru.svg" alt="flag" />*/}
                {/*                 <strong>+7</strong>*/}
                {/*                 <div className="phone__arrow"></div>*/}
                {/*             </div>*/}
                {/*         </ol>*/}
                {/*         <input*/}
                {/*             type="number"*/}
                {/*             id="phone"*/}
                {/*             maxLength={13}*/}
                {/*             name="phone"*/}
                {/*             placeholder="+996 (999) 999 999"*/}
                {/*             value={formData.phone}*/}
                {/*             onChange={handleChange}*/}
                {/*         />*/}
                {/*     </div>*/}
                {/*     <label htmlFor="comment">Commentaries to trip</label>*/}
                {/*     <input*/}
                {/*         type="text"*/}
                {/*         placeholder="Write your wishes to trip..."*/}
                {/*         id="comment"*/}
                {/*         name="comment"*/}
                {/*         value={formData.comment}*/}
                {/*         onChange={handleChange}*/}
                {/*     />*/}
                {/*     <label htmlFor="counter">Amount of people</label>*/}
                {/*     <div className="people-count">*/}
                {/*         <div className="counter">*/}
                {/*             <button onClick={decreaseCountPeople}>-</button>*/}
                {/*             <h3 className="count">{peopleCount}</h3>*/}
                {/*             <button onClick={increaseCountPeople}>+</button>*/}
                {/*         </div>*/}
                {/*     </div>*/}
                {/*     <button className="book__form-submit" onClick={handleSubmit}>*/}
                {/*         Submit*/}
                {/*     </button>*/}
                {/* </form>*/}
             </center>

            </div>

        </section>
    )

}