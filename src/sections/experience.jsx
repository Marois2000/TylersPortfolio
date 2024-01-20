/**
 * @author Tyler Marois
 */
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


const Experience = () => {
    return (
        <div className="w-full bg-darkblue pb-96" id="experience">
            <div className="w-full">
                <h1 className="p-10 font-rubik text-7xl text-lightwarm max-sm:text-4xl">Experience</h1>
            </div>

            <div className="flex justify-center items-center w-full flex-col mt-20">
                <ExperienceTab 
                    title="Website Administrator for Guarino Construction"
                    bullets={[<p><strong>Website Development:</strong> Built, designed, and currently maintain Guarino Construction's user-friendly website using Wix.</p>,
                        <p><strong>User Experience Optimization:</strong> Analyzed user data to enhance the online experience for visitors.</p>,
                        <p><strong>Website Analytics:</strong>The recent enhancements to the website have led to remarkable results, with site sessions experiencing a substantial 90% increase and unique viewers surging by an impressive 96%.</p>]} 
                    dates="May 2023 - Present"
                    description="Served as the Website Administrator for Guarino Construction in a remote capacity. In this role, I've taken charge of building and designing the company's website on Wix, ensuring it remains user-friendly and visually appealing. By analyzing user data, I've actively worked to optimize the online experience, contributing to the overall enhancement of Guarino Construction's digital brand presence."
                    location="Remote"
                />

                <ExperienceTab 
                    title="Computer Science Tutor"
                    bullets={[<p><strong>Skill Reinforcement:</strong> Solidified proficiency in Python, C, and Java through hands-on tutoring.</p>,
                        <p><strong>Effective Communication:</strong> Developed clarity in explaining complex concepts to diverse learners.</p>,
                        <p><strong>Educational Growth: </strong>Advanced pedagogical skills, tailoring teaching methods to diverse learning styles.</p>]} 
                    dates="September 2022 - December 2023"
                    description="
                    During my time as a Computer Science Tutor at Plymouth State University, I strengthened my proficiency in Python, C, and Java through hands-on tutoring. Simultaneously, I refined my communication skills by explaining complex concepts to diverse learners. This experience not only enhanced my personal skills but also allowed me to grow as an educator, adapting teaching methods to cater to different learning styles."
                    location="Plymouth State University"
                />

                <ExperienceTab 
                    title="Crew Lead at Trend Moving & Storage"
                    bullets={[<p><strong>Efficient Operations Management:</strong> Lead daily moving operations at Trend Moving and Storage, ensuring safety and efficiency.</p>,
                        <p><strong>Effective Leadership:</strong> Demonstrate leadership skills to motivate and guide teams toward success.</p>,
                        <p><strong>Expertise Development:</strong> Develop proficiency in project management, teamwork, and customer service to deliver high-quality service.</p>]} 
                    dates="July 2020 - Present"
                    description="In this role, I've taken charge of managing daily moving operations, emphasizing safety and efficiency. Through effective leadership, I've motivated teams to excel, fostering a collaborative environment. My focus on developing expertise in project management, teamwork, and customer service has been instrumental in providing customers with an excellent and high-quality moving service."
                    location="Londonderry, NH"
                />

            </div>
        </div>
    )
}

const ExperienceTab = ({ title, bullets, dates, description, location }) => {
    const [openTab, setOpenTab] = useState("w-[75%] h-[0vh] rounded-b-lg bg-lightwarm duration-300");

    const toggle = () => {
        if(!openTab.includes("[45vh]") || !openTab.includes("[100vh]")) {
            setOpenTab("w-[75%] h-[45vh] rounded-b-lg bg-lightwarm duration-300 max-md:h-[100vh]")
        } else {
            setOpenTab("w-[75%] h-[0vh] rounded-b-lg bg-lightwarm duration-300")
        }
    }

    return (
        <>
            <div className="bg-lightblue drop-shadow-2xl w-[80%] h-[10vh] rounded-lg justify-between items-center flex mt-5 max">
                <h2 className="text-lightwarm text-4xl font-exo p-2 max-xl:text-2xl max-md:text-lg">{title}</h2>
                <button onClick={toggle} className={!openTab.includes("[45vh]") || !openTab.includes("[100vh]") ? "hover:scale-125 duration-300 text-darkred p-4" : "hover:scale-125 duration-300 text-darkred p-4 rotate-180 "}><FontAwesomeIcon className="text-4xl " icon={faChevronDown}/></button>
            </div>
            <div className={openTab}>
                <div className={!openTab.includes("[45vh]") || !openTab.includes("[100vh]") ? "opacity-0 duration-300 h-[0px]" : "w-full duration-300 h-full"}>
                    <div className="w-full justify-between p-2 items center flex gap-5">
                        <h2 className="text-darkblue text-2xl font-exo max-md:text-lg max-sm:text-sm">{dates}</h2>
                        <h2 className="text-darkblue text-2xl font-exo max-md:text-lg max-sm:text-sm">{location}</h2>
                    </div>

                    <div className="w-full flex justify-between items-start p-2 mt-5 max-md:flex-col max-md:mt-0">
                        <div className="flex flex-col w-[45%] max-md:w-full">
                            <h2 className="text-darkblue text-xl font-exo underline font-semibold">Description:</h2>
                            <p className="text-darkblue text-lg font-exo max-xl:text-sm">{description}</p>
                        </div>

                        <div className="flex flex-col w-[45%] max-md:w-full">
                            <h2 className="text-darkblue text-xl font-exo underline font-semibold">Success Factors:</h2>

                            <ul>
                                {bullets.map((bullet) => {
                                    return (
                                        <li className="text-darkblue text-lg font-exo max-xl:text-sm">{bullet}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Experience;