import "./details.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";
import {useEffect, useState} from "react";
import { getTourById} from "../../api/api";
import { useParams} from "react-router-dom";
import Modal from"../../pages/InfoModal/infoModal"




export default function Details(){
  const [details,setDetails] = useState();
  const [modal,setModal]=useState(false)
  const {id} =useParams()
    useEffect(() => {
        getTourById()
            .then (({data}) =>{
                setDetails(data)
                console.log(data)

            })
    },[])

    function showModal(){
      setModal(true)


    }

    return details ?(
        <section>
            <div className="detail-background" >
                <img src={details.thumbnail} alt="img"/>

                <a href="/"> ... Go Back</a>
                <div className="detail-general-text">
                    <h1>{details.name}</h1>
                    <div className="detail-location ">
                        < IoLocationOutline className="icons"/>
                        <h3>{details.location}</h3>
                    </div>
                    <div className="detail-description">
                        <h2 className="text-2xl font-bold p-5">Description</h2>
                        <p >{details.description}</p>
                    </div>
                    <div className="detail-reviews">
                        <h2 className="text-2xl font-bold p-5">Reviews</h2>
                        <div className="detail-location">
                            <IoPersonCircleSharp className="icons" />
                            <h4 >{details.reviews[0].reviewer_name}</h4>
                        </div>
                        <p >{details.reviews[0].review_text}</p>
                         <center>
                             <button className="book-btn" onClick={showModal}>Book now</button>
                         </center>

                        {
                            modal ? <Modal/> : ""
                        }
                    </div>
                </div>
            </div>


        </section>

    ) :("")
}
