/**
 * @author Tyler Marois
 */
import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import html from "../../img/icons/html.png";
import css from "../../img/icons/css.png";
import javascript from "../../img/icons/javascript.png";
import react from "../../img/icons/react.png";
import reactnative from "../../img/icons/reactnative.png";
import java from "../../img/icons/java.png";
import c from "../../img/icons/c.png";
import cplus from "../../img/icons/cplus.png";
import csharp from "../../img/icons/csharp.png";
import python from "../../img/icons/python.png";
import git from "../../img/icons/git.png";
import unity from "../../img/icons/unity.png";
import sql from "../../img/icons/sql.png";
import postgres from "../../img/icons/postgres.png";
import node from "../../img/icons/node-js.png";

const Skills = () => {
    const [skills, skillsInView] = useInView({triggerOnce: true});
    

    return (
        <div className="w-full h-[100vh] bg-gradient-to-tr from-darkblue to-lightblue from-80%" id="skills">
            <div className="w-full">
                <h1 className="p-10 font-rubik text-7xl text-lightwarm">My Skills</h1>
            </div>

            <div className="w-full flex justify-center items-center mt-10 h-[70%] " ref={skills}>
                    {
                        skillsInView ?
                            <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2">
                                <Skill image={react} text="React" />
                                <Skill image={node} text="Node JS" />
                                <Skill image={javascript} text="Javascript" />
                                <Skill image={postgres} text="PostgreSQL"/>
                                <Skill image={html} text="HTML" />
                                <Skill image={css} text="CSS" />
                                <Skill image={sql} text="SQL" />
                                <Skill image={reactnative} text="React Native" />
                                <Skill image={git} text="Git/Github" />
                                <Skill image={c} text="C" />
                                <Skill image={cplus} text="C++" />
                                <Skill image={csharp} text="C#" />
                                <Skill image={java} text="Java" />
                                <Skill image={python} text="Python" />
                                <Skill image={unity} text="Unity" />

                            </div>
                        : null
                    }
                    
                
            </div>
        </div>
    );
}

const Skill = ({ image, text}) => {
    const [style, setStyle] = useState("flex gap-3 items-center opacity-0");

    useEffect(() => {
        setTimeout(() => {
            setStyle("flex gap-3 items-center w-full animate-slide-in-left");
            clearTimeout();
        }, Math.random() * 1000);
    });

    return(
        <div className={style}>
            <img src={image} />
            <h2 className="text-2xl font-exo text-lightwarm">{text}</h2>
        </div>
    )
}

export default Skills;