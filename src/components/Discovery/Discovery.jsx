import  "./discovery.css";
import React, {useEffect,useState} from "react";
import img from "../../assets/image/mount.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
// import axios from "axios";
import {getPopular} from "../../api/api";
import {NavLink} from "react-router-dom";

export default function Discover (){
    const [discover,setDiscover] = useState()


    useEffect(() =>{
       getPopular()

            .then(({data}) =>{
                setDiscover(data)
                console.log(data)
            })
    },[])
    return (
        <section id="discover-general">
            <h1 className="">Discover</h1>
            <div className="discover-general-block flex justify-between">
                <div className="discover-text flex gap-10  pl-[50px] font-bold text-2xl">
                    <h3 className="discovery_category">Popular</h3>
                    <h3 className="discovery_category">Featured</h3>
                    <h3 className="discovery_category">Most Visited</h3>
                    <h3 className="discovery_category">Europe</h3>
                    <h3 className="discovery_category">Asia</h3>
                </div>
                <div className="flex items-center gap-2 ">
                    <button className="discover_click"><FaArrowRightLong /></button>
                    <button className="discover_click"> <FaArrowLeftLong /></button>

                </div>
            </div>

            {/*<div className="gallery-img">*/}
            {/*    {discover.map((data) => (*/}
            {/*        <NavLink key={data.id} to={data.id}>*/}
            {/*            <div className="gallery-img-slider">*/}
            {/*                <img src={data.thumbnail} alt="img" />*/}
            {/*                <div className="gallery-img-title">*/}
            {/*                    <h4>{data.location}</h4>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </NavLink>*/}
            {/*    ))}*/}
            {/*</div>*/}
            <div className="gallery-img">
                { discover && discover.map((data) => (
                    <NavLink key={data.id} to={data.id}>
                        <div className="gallery-img-slider">
                            <img src={data.thumbnail} alt="img" />
                            <div className="gallery-img-title">
                                <h4>{data.location}</h4>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>

        </section>

    )
}