import React from "react";
import  "./HeaderCard.css"
import { FaArrowRightLong } from "react-icons/fa6";
import img from "../../assets/image/winter.png";
// import axios from "axios";
// import {useState,useEffect} from "react";

export default function HeaderCard(){

    return(
        <section id="header">
            <div className="header-general ">
                <div className="header-general-text  ">
                    <h1 className="font-bold text-8xl pt-28 pl-20" >Winter <br/>Vacation Trips</h1>
                    <p className="font-normal text-2xl w-[60%] p-[2rem] pl-20">Enjoy your winter vacations with warmth
                        and amazing sightseeing on the mountains.
                        Enjoy the best experience with us!</p>
                    <div className="flex items-center  text-3xl text-[#6A62B7]">
                        <a href="#recommended" className="header-button ">Let’s Go!  </a><FaArrowRightLong className="cursor-pointer"/>
                    </div>
                </div>
                <div className="header-image pr-20 ">
                    <img src={img} alt="img"/>
                </div>
            </div>


        </section>

    )
}