/**
 * @author Tyler Marois
 */
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import trendsync from "../../img/projects/trendsync.png";
import moose from "../../img/projects/mooseSim.png";
import physics from "../../img/projects/physicSim.png";
import chess from "../../img/projects/chessbot.jpeg";


const Projects = () => {
    const [activeProject, setActiveProject] = useState(0);
    const [direction, setDirection] = useState("");

    // title: "",
    // timeline: "",
    // description: "",
    // skills: [],
    // link: "",
    // image: 

    const project = [
        {
            title: "Trendsync",
            timeline: "August 2023 - December 2023",
            description: "My senior project at Plymouth State University, serves as an efficient moving and logistics management tool tailored for Trend Moving and Storage. Developed using React, React Native, Node.js, Express JS, and PostgreSQL, Trendsync simplifies dispatching operations and empowers crew members with a user-friendly mobile app for real-time job management.",
            skills: ["React", "Node JS", "PostgreSQL", "Tailwind", "Linux VPS"],
            link: "https://github.com/Marois2000/TrendSync",
            image: trendsync
        },
        {
            title: "Chess Playing Robot",
            timeline: "October 2023 - December 2023",
            description: "My team and I built and constructed a robot that can play chess. We created our own chess AI and built our own mechanical gantry and claw system to pick up and move the pieces. \n My team and I are also receiving recognition from our schools public relations team soon for this project.",
            skills: ["Arduino", "Raspberry Pi", "Python", "AI"],
            link: "https://www.youtube.com/watch?v=JjsQvisG6XE&ab_channel=Ty_Plays85",
            image: chess
        },
        {
            title: "Moose Population Simulation",
            timeline: "October 2023 - December 2023",
            description: "The simulation aims to answer the question of how long the moose population can survive on its current trajectory. It explores the impact of winter tick populations on moose and seeks to identify factors that could save the moose population.",
            skills: ["React", "Tailwind", "Unity", "Data Analysis"],
            link: "https://marois2000.github.io/Moose-Population-Simulation/",
            image: moose
        },
        {
            title: "Physics Simulation/Quiz App",
            timeline: "November 2023 - December 2023",
            description: "The application challenges users with physics problems, requiring correct answers to balance the system. If users fail, the simulator runs, demonstrating the correct physics behind the problem. \nThe goal was to make learning physics a little more fun and interactive. We solved this by showing users the physics of what they just solved for!",
            skills: ["React", "Matter JS"],
            link: "https://marois2000.github.io/Physics-Simulator/",
            image:physics
        }
    ]

    const nextProject = () => {
        setDirection("right");
        setActiveProject((prev) => (prev + 1) % project.length);
    }

    const prevProject= () => {
        setDirection("left");
        setActiveProject((prev) => (prev - 1 + project.length) % project.length);
    }

    return (
        <div className="w-full bg-gradient-to-b from-darkblue via-lightblue to-darkblue from-20% to-80% overflow-x-hidden" id="projects">
            <div className="w-full">
                <h1 className="p-10 font-rubik text-7xl text-lightwarm max-sm:text-4xl">Projects</h1>
            </div>

            <div className="flex justify-center items-center w-[95%] h-[80%] flex-col mt-10 overflow-hidden">
                <div className="w-[95%] h-[100%] justify-center items-center flex mb-36">
                    <button onClick={prevProject} className="hover:scale-125 duration-300 text-darkred"><FontAwesomeIcon className="text-7xl max-md:text-4xl" icon={faChevronLeft} /></button>

                    {project.map((slide, index) => {
                        return (
                            <div key={index} className={`${index == activeProject ? `animate-slide-in-${direction}` : `animate-slide-in-${direction}`} ${index != activeProject ? "hidden" : null}`} >
                                <ProjectCard 
                                    title={slide.title}
                                    description={slide.description}
                                    timeline={slide.timeline}
                                    skills={slide.skills}
                                    link={slide.link}
                                    image={slide.image}
                                />
                            </div>
                        );
                        
                    })}

                    <button onClick={nextProject} className="hover:scale-125 duration-300 text-darkred"><FontAwesomeIcon className="text-7xl max-md:text-4xl" icon={faChevronLeft} flip="horizontal"/></button>
                </div>

                <div className="flex gap-10 mb-10">
                    {project.map((project, index) => {
                        return (
                            <button onClick={() => setActiveProject(index)}><FontAwesomeIcon key={index} className={`text-2xl  ${index == activeProject ? "scale-[200%] text-darkred" : "text-lightwarm"} duration-300`} icon={faCircle} /></button>
                        );
                    })}
                    
                </div>
            </div>

        </div>
    )
}

const ProjectCard = ({ title, description, timeline, skills, image, link }) => {
    


    return (
        <div className={`flex items-center justify-center h-100% max-lg:flex-col `} >
            <img className="w-[650px] max-xl:w-[550px] max-lg:w-[600px] max-md:w-[450px] max-sm:w-[90%] aspect-video z-10 translate-x-10 -translate-y-10 drop-shadow-2xl border-darkblue border-2 max-lg:translate-x-0 max-lg:-translate-y-0" src={image} />

            <div className="bg-lightwarm flex justify-start items-start flex-col w-[600px] h-[550px] max-lg:h-[400px] rounded-lg pl-20 max-md:w-full max-lg:pl-3 max-sm:w-[90%] max-sm:h-[500px]">
                <div className="h-[100%]">
                    <h2 className="text-darkblue text-4xl font-exo mt-2">{title}</h2>
                    <h3 className="text-darkblue text-xl font-exo mt-2">{timeline}</h3>
                    <div className="flex flex-col justify-center items-start">
                        <h3 className="text-darkblue text-xl font-exo mt-5 underline">Skills Required</h3>
                        <div className=" flex items items-center justify-center gap-5 py-2 flex-wrap max-2xl:gap-1 max-sm:hidden">
                            {skills.map((skill) => {
                                return (
                                    <div className="rounded-lg px-2 py-3 bg-darkblue">
                                        <h3 className="font-exo text-lightwarm">{skill}</h3>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <p className="font-exo text-darkblue mt-5 text-lg pr-10 max-xl:text-sm max-xl:mt-0">{description}</p>
                </div>
                <div className="flex items-end justify-end w-full pr-20 pb-5">
                    <button><a href={link} className="underline text-2xl text-darkred" target="_Blank">Project Demo</a></button>
                </div>
            </div>
        </div>
    );
}

export default Projects;