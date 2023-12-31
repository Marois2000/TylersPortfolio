/**
 * @author Tyler Marois
 */
import React from "react";
import Headshot from "../../img/headshot.png";
import { useInView } from 'react-intersection-observer';

const Hero = () => {
    const [details, detailsInView] = useInView({triggerOnce: true});
    const [image, imageInView] = useInView({triggerOnce: true});


    return (
        <div className="bg-darkblue h-[100vh] w-full overflow-x-hidden" id="hero">
            <div className="flex justify-evenly items-center h-full max-lg:flex-col-reverse max-lg:justify-center">
                <div className={detailsInView ? "flex flex-col justify-start items-start gap-5 w-[30%] animate-slide-in-left max-lg:mt-10 max-lg:w-[70%] max-lg:items-center" : "flex flex-col justify-start items-start gap-5 w-[30%] max-lg:mt-10 max-lg:w-[70%] max-lg:items-center"} ref={details}>
                    <h1 className="text-8xl text-lightwarm font-rubik max-lg:text-center max-lg:hidden">Hello!</h1>
                    <h2 className="text-5xl text-lightwarm font-exo max-lg:text-center">My Name is Tyler Marois</h2>
                    <h2 className="text-3xl text-lightwarm font-exo max-lg:text-center">I am aspiring to become a versatile Full Stack Developer</h2>
                </div>

                <div className={imageInView ? "w-[25%] max-md:w-[50%] max-xl:w-[30%]  animate-slide-in-right flex flex-col items-center" : "w-[25%] max-xl:w-[30%]"} ref={image}>
                    <h1 className="text-8xl text-lightwarm font-rubik hidden max-lg:text-center max-lg:flex">Hello!</h1>
                    <img className="bg-lightwarm rounded-3xl overflow-hidden mt-10" src={Headshot} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero;