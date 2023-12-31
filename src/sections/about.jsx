/**
 * @author Tyler Marois
 */
import React from "react";
import { useInView } from 'react-intersection-observer';
import { SocialIcon } from 'react-social-icons';

const Header = ({ text }) => {
  return (
    <h2 className="text-2xl font-semibold text-lightwarm font-exo underline">
      {text}
    </h2>
  );
};

const Paragraph = ({ text }) => {
  return <p className="text-lg text-lightwarm font-exo">{text}</p>;
};

const About = () => {
    const [education, educationInView] = useInView({triggerOnce: true});
    const [life, lifeInView] = useInView({triggerOnce: true});
    const [tutor, tutorInView] = useInView({triggerOnce: true});
    const [connect, connectInView] = useInView({triggerOnce: true});
    const [pursuits, pursuitsInView] = useInView({triggerOnce: true});

    return (
        <div className="w-full bg-gradient-to-br from-darkblue to-lightblue from-80% overflow-x-hidden pb-64" id="about">
            <div className="w-full">
                <h1 className="p-10 font-rubik text-7xl text-lightwarm max-sm:text-4xl">About Me</h1>
            </div>

            <div className="w-full flex justify-evenly items-start mt-10 gap-10 max-lg:flex-col-reverse max-lg:items-center">
                <div className="flex flex-col justify-start items-start gap-5 w-[30%] max-lg:w-[80%]">
                    <div className={educationInView ? "flex flex-col gap-2 animate-slide-in-left" : "flex flex-col gap-2"} ref={education}>
                        <Header text="Education & Expertise" />
                        <Paragraph text="I graduated from Plymouth State University with a focus on React and Node.js, complemented by proficiency in Java, Python, and C. Alongside my major, I pursued a minor in cybersecurity, offering a dual perspective on creating both efficient and secure software solutions." />
                    </div>
                
                    <div className={lifeInView ? "flex flex-col gap-2 animate-slide-in-left" : "flex flex-col gap-2"} ref={life}>
                        <Header text="Life Beyond Code" />
                        <Paragraph text="Beyond the screen, I cherish moments with friends and family, finding joy in shared experiences. Whether on the golf course or engaged in regular exercise, I prioritize a healthy lifestyle that complements my professional pursuits." />
                    </div>

                    <div className={connectInView ? "flex flex-col gap-2 animate-slide-in-left" : "flex flex-col gap-2"} ref={connect}>
                        <Header text="Let's Connect" />  
                        <Paragraph text="If you share similar interests or want to explore the exciting world of technology together, feel free to reach out. I'm always open to new connections and collaborations!" />  
                        <div className="flex gap-2">
                            <SocialIcon url="https://github.com/marois2000/" />
                            <SocialIcon url="https://www.linkedin.com/in/tyler-marois-66b9b3267/" />
                            <SocialIcon url="https://tmarois85@gmail.com" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start gap-5 w-[30%] max-lg:w-[80%]">
                    <div className={tutorInView ? "flex flex-col gap-2 animate-slide-in-right" : "flex flex-col gap-2"} ref={tutor}>
                        <Header text="Tutoring Experience" />
                        <Paragraph text="During my academic journey, I also served as a computer science tutor. This experience not only solidified my skills but allowed me to assist others in navigating the coding landscape." />
                    </div>

                    <div className={pursuitsInView ? "flex flex-col gap-2 animate-slide-in-right" : "flex flex-col gap-2"} ref={pursuits}>
                        <Header text="Intellectual Pursuits" />  
                        <Paragraph text="My interests extend beyond coding into the realms of mathematics and physics. Exploring the theoretical aspects of these disciplines adds depth to my intellectual endeavors." />  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
