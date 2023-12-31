/**
 * @author Tyler Marois
 */
import React, { useState } from "react";
import { SocialIcon } from 'react-social-icons';
import emailjs from "emailjs-com";
import { Cookies, CookiesProvider, useCookies } from "react-cookie";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const service = "service_9i1h8k1";
    const template = "template_8xvzbdg";
    const key = "4O0IqxnJRuXnAAjzI";

    const [cookies, setCookie, removeCookie] = useCookies(['delay']);

    const handleSubmit = async() => {
        if(message.length > 0) {
            if(!cookies.delay) {
                try {
                    const req = await emailjs.send(service, template, {
                        from_name: name,
                        to_name: "Tyler",
                        message: message,
                        reply: email
                    }, key);
        
                    if(req.status === 200) {
                        setCookie("delay", new Date(), {maxAge: 300});
                        toast.success("The message was sent Successfully!", {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: false,
                            progress: undefined,
                            theme: "dark",
                        });
                    } else {
                        toast.error("The Message Failed to Send. Please try again!", {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: false,
                            progress: undefined,
                            theme: "dark",
                        });
                    }
                } catch (error) {
                    toast.error("Something went wrong. Please try again!", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: "dark",
                    });
                    console.log(error);
                }
            } else {
                const time = new Date() - new Date(cookies.delay);
                console.log(time);
    
                if(time > 5 * 60 * 1000) {
                    location.reload("/");
                }
    
                const waitTime = Math.ceil((5 * 60 * 1000 - time) / 1000 / 60);
                const message = "Please wait " + waitTime + " more minutes";
    
                toast.error(message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                });
            }
        } else {
            toast.warning("Please Enter a Message!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    return (
        <CookiesProvider>
            <div className="w-full bg-darkblue overflow-x-hidden" id="contact">
                <div className="w-full">
                    <h1 className="p-10 font-rubik text-7xl text-lightwarm max-sm:text-4xl">Lets Connect!</h1>
                </div>

                <div className="w-full flex mt-10 justify-evenly max-lg:flex-col max-lg:justify-center items-center max-lg:gap-10">
                    <div className="w-[40%] max-lg:w-[80%]">
                        <h1 className="underline font-semibold font-exo text-4xl text-lightwarm mb-10 max-sm:text-3xl">Send Me a Message</h1>
                        <div>
                            <h2 className="font-exo text-2xl text-lightwarm">Full Name</h2>
                            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name..." className="w-full bg-lightwarm text-darkblue rounded-md py-2 px-1" type="text" />
                        </div>

                        <div className="mt-5">
                            <h2 className="font-exo text-2xl text-lightwarm">Email</h2>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ex. johndoe@example.com" className="w-full bg-lightwarm text-darkblue rounded-md py-2 px-1" type="text" />
                        </div>

                        <div className="mt-5">
                            <h2 className="font-exo text-2xl text-lightwarm">Message</h2>
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full h-[25vh] bg-lightwarm text-darkblue rounded-md py-2 px-1" ></textarea>
                        </div>

                        <button onClick={handleSubmit} className="hover:scale-105 border-2 mt-5 border-darkred bg-lightred text-3xl rounded-lg p-2 text-lightwarm hover:bg-darkred duration-300">Send</button>
                    </div>

                    <div className="w-[40%] flex flex-col gap-52 max-lg:flex-row max-lg:w-full max-lg:gap-10 max-lg:justify-center max-lg:px-10">
                        <div className="max-lg:w-[70%]">
                            <h1 className="underline font-semibold font-exo text-4xl text-lightwarm mb-10 max-md:text-2xl">...or Contact Me Directly</h1>
                            
                            <div className="flex flex-col gap-5">
                                <h2 className="font-exo text-2xl text-lightwarm max-md:text-sm"><u>Phone:</u><a className=" hover:text-lightred duration-300" href="tel:+16037160507"> (603) 716-0507</a></h2>
                                <h2 className="font-exo text-2xl text-lightwarm max-md:text-sm"><u>Email:</u><a className=" hover:text-lightred duration-300" href="mailto:tmarois85@gmail.com"> tmarois85@gmail.com</a></h2>
                            </div>
                        </div>

                        <div className="max-lg:w-[30%] ">
                            <h1 className="underline font-semibold font-exo text-4xl text-lightwarm mb-10 max-md:text-2xl">Find Me Here!</h1>
                            <div className="flex gap-4">
                                <SocialIcon className="hover:scale-125 duration-300" url="https://github.com/marois2000/" />
                                <SocialIcon className="hover:scale-125 duration-300" url="https://www.linkedin.com/in/tyler-marois-66b9b3267/" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full justify-center items-end flex pt-20 pb-10">
                    <h2 className="font-exo text-2xl text-lightwarm">Created by: Tyler Marois</h2>
                </div>

                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
        </CookiesProvider>
    )
}

export default Contact;