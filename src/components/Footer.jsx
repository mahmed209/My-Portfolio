import React from "react";
import Call from '../assets/img/call.png';
import Mail from '../assets/img/mail.png';
import Myimg from '../assets/img/ahmed-img3.png';

const Footer = () => {
    return (
        <div className="footer-container grid grid-cols-1 md:grid-cols-3 gap-4 p-4 lg:p-12 animate-topToBottom">
            <div className="company-info flex flex-col items-center">
                <div className="p-2">
                    <img
                        alt="Profile"
                        src={Myimg}
                        className="inline-block h-32 w-32 ml-44 rounded-full mt-12 ring-2 ring-white"
                    />
                    <p className="p-2 text-lg text-blue-200 text-center px-4 md:px-12">
                        I’m a Full Stack Web Developer with a BS in Computer Science and experience in building responsive, scalable web applications. Proficient in React, Node.js, MySQL, and cloud deployment, I specialize in creating seamless front-end and back-end solutions. I’ve worked on projects ranging from AI-powered apps to ride-booking systems. Let’s collaborate to bring your ideas to life!
                    </p>
                </div>
            </div>
            <div className="mt-12 mx-2 w-full md:mx-12  p-2 border-blue-200 rounded-3xl shadow-inner shadow-lg shadow-blue-800/50 flex flex-col items-center">
                <h1 className="p-2 text-blue-200 text-3xl md:text-5xl text-center">WANT TO HIRE</h1>
                <div className="flex items-center mt-4">
                    <img src={Call} className="w-16 h-auto animate-wiggle" alt="Call Icon" />
                    <h2 className="text-xl md:text-3xl text-blue-200 p-2">+92 30974749297</h2>
                </div>
                <div className="flex items-center mt-4">
                    <img src={Mail} className="w-16 h-auto animate-wiggle" alt="Mail Icon" />
                    <h2 className="text-xl md:text-3xl text-blue-200 p-2">Imahmed60@gmail.com</h2>
                </div>
            </div>
            <div className="footer-links mt-12 flex flex-col items-center">
                <div className="support-links">
                    <h3 className="text-3xl text-blue-200 p-4">USEFUL LINKS</h3>
                    <ul>
                        <li className="text-xl md:text-2xl text-blue-200 p-2">
                            <a href="/about">About</a>
                        </li>
                        <li className="text-xl md:text-2xl text-blue-200 p-2">
                            <a href="/services">Services</a>
                        </li>
                        <li className="text-xl md:text-2xl text-blue-200 p-2">
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
