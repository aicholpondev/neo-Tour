import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import {getReview, getTours} from "../../api/api";
// import axios from "axios";
import img from "../../assets/image/mount.png";
import "./Recommended.css";

export default function Recommended() {
    const [tours, setTours] = useState([]);


    useEffect(() => {
        getTours()
            .then (({data}) =>{
            console.log(data)
            setTours(data)
        })
    },[])

    return (
        <div id="recommended">
            <h2>Recommended</h2>
            <div className="recommended-images">

                {tours.map((data) => (
                    <NavLink key={data.id} to={data.id}>
                        <div className="recommended-gallery-image">
                            <img src={data.thumbnail} alt="img" />
                            <div className="recommended-images-title">
                                <h4>{data.name}</h4>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}