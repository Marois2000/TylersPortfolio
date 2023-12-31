/**
 * @author Tyler Marois
 */
import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [visible, setVisible] = useState(true);
    const [clear, setClear] = useState(true);
    const [open, setOpen] = useState(false);
    let scrollPrev = 0;

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


    const handleScroll = () => {
        const scrolled = document.documentElement.scrollTop;

        setClear(scrolled === 0);
        
        if(scrolled > scrollPrev + 400) {
            setVisible(false);
            scrollPrev = scrolled;
        } else if(scrolled < scrollPrev - 100) {
            setVisible(true);
            scrollPrev = scrolled;
        }

    }



    const linkStyle = `text-2xl font-exo duration-300 cursor-pointer ${clear ? "text-lightwarm" : "text-darkblue"}`;

    return (
        <>
            <div className={`w-full fixed bg-lightwarm  z-50 duration-300 ${visible ? "h-[10vh]" : "h-0"} ${clear ? "bg-opacity-0" : null} ${open ? "hidden" : null}`}>
                <div className={`w-full flex justify-evenly items-center duration-300 z-50 h-full max-md:hidden ${visible ? null : "opacity-0"}`}>
                    <button>
                        <Link
                            className={linkStyle}
                            to="hero"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-100}
                        >
                            Home
                        </Link>
                    </button>

                    <button>
                        <Link
                            className={linkStyle}
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-100}
                        >
                            About
                        </Link>
                    </button>

                    <button>
                        <Link
                            className={linkStyle}
                            to="skills"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-100}
                        >
                            Skills
                        </Link>
                    </button>

                    <button>
                        <Link
                            className={linkStyle}
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={0}
                        >
                            Projects
                        </Link>
                    </button>

                    <button>
                        <Link
                            className={linkStyle}
                            to="experience"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-100}
                        >
                            Experience
                        </Link>
                    </button>

                    <button>
                        <Link
                            className={linkStyle}
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={25}
                        >
                            Contact
                        </Link>
                    </button>
                </div>

                <div className={`w-full justify-end items-center duration-300 h-full hidden px-5 ${visible ? null : "opacity-0"} max-md:flex max-md:visible`}>
                    <button onClick={() => setOpen(!open)}><FontAwesomeIcon className={`text-3xl duration-300 ${clear ? "text-lightwarm" : "text-darkblue"}`} icon={faBars} /></button>
                </div>
            </div>

            <Menu open={open} setOpen={setOpen}/>
        </>
        
    )
}


const Menu = ({ open, setOpen }) => {

    const linkStyle = `text-2xl font-exo duration-300 text-darkblue`;


    return (
        <div className={`z-30 fixed w-full flex flex-col duration-300 bg-lightwarm items-center justify-start ${open ? "h-[100vh]" : "h-0 opacity-0"}`}>
            <div className="w-full justify-end items-center flex p-5">
                <button className="z-40" onClick={() => setOpen(!open)}><FontAwesomeIcon className={`text-3xl duration-300 text-darkblue`} icon={faX} /></button>
            </div>
            <div className={`z-50 w-full flex flex-col justify-evenly items-center duration-300 h-full`}>
                    <button >
                        <Link
                            onClick={() => setOpen(false)}
                            className={linkStyle}
                            to="hero"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={0}
                        >
                            Home
                        </Link>
                    </button>

                    <button >
                        <Link
                            onClick={() => setOpen(false)}
                            className={linkStyle}
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={0}
                        >
                            About
                        </Link>
                    </button>

                    <button>
                        <Link
                            onClick={() => setOpen(false)}
                            className={linkStyle}
                            to="skills"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={0}
                        >
                            Skills
                        </Link>
                    </button>

                    <button>
                        <Link
                            onClick={() => setOpen(false)}
                            className={linkStyle}
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={0}
                        >
                            Projects
                        </Link>
                    </button>

                    <button>
                        <Link
                            onClick={() => setOpen(false)}
                            className={linkStyle}
                            to="experience"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={0}
                        >
                            Experience
                        </Link>
                    </button>

                    <button>
                        <Link
                            onClick={() => setOpen(false)}
                            className={linkStyle}
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={0}
                        >
                            Contact
                        </Link>
                    </button>
                </div>
        </div>
    )
}

export default Navbar;