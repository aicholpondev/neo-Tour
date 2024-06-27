import React from "react";
import  "./HeaderCard.css"
import { FaArrowRightLong } from "react-icons/fa6";
import img from "../../assets/image/winter.png";
// import axios from "axios";
// import {useState,useEffect} from "react";

export default function HeaderCard(){

    return(
        <section id="header">
            <div className="header-general">
                <div className=" ">
                    <h1 className="font-bold text-8xl w-[660px] pt-28" >Winter <br/>Vacation Trips</h1>
                    <p className="font-bold text-2xl w-2/4 p-[2rem]">Enjoy your winter vacations with warmth
                        and amazing sightseeing on the mountains.
                        Enjoy the best experience with us!</p>
                    <div className="flex items-center gap-4 text-3xl text-[#6A62B7]">
                        <a href="#" className="header-button ">Let’s Go!  </a><FaArrowRightLong className="cursor-pointer"/>
                    </div>
                </div>
                <div className="header-image">
                    <img src={img} alt="img"/>
                </div>
            </div>


        </section>

    )
}