import React from 'react';
import HTML from '../assets/img/html.png';
import CSS3 from '../assets/img/CSS.png';
import Bootstrap from '../assets/img/bootstrap.png';
import Javascript from '../assets/img/javascript.png';
import Reactt from '../assets/img/react.png';
import Angular from '../assets/img/angular.png';
import Review1 from '../assets/img/review1.png';
import Review2 from '../assets/img/review2.png';
import Review3 from '../assets/img/review3.png';
import Review4 from '../assets/img/review4.png';
import Review5 from '../assets/img/review5.png';
import Review6 from '../assets/img/review2.png';
import Footer from './Footer';
import { FaAngleRight } from 'react-icons/fa';
import './about.css';

const Card = ({ imgSrc, title, description }) => {
    return (
        <div className="bg-sky-800 shadow-md rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
            <img src={imgSrc} alt={title} className="w-auto h-40 object-cover animate-wiggle" />
            <div className="p-2">
                <h3 className="text-2xl text-blue-200 text-center font-semibold">{title}</h3>
                <p className="text-blue-200 leading-relaxed text-xl text-center py-2">{description}</p>
            </div>
        </div>
    );
};

const About = () => {
    return (
        <div>
            <div className='header-section my-12 animate-topToBottom py-24'>
                <h1 className='text-blue-200 p-2 mx-12 text-center text-4xl'>ABOUT ME</h1>
                <p className='text-blue-200 leading-relaxed p-2 py-4 mx-12 text-center text-xl'>
                    Hi, I'm a passionate Full Stack Web Developer with a Bachelor's degree in Computer Science and hands-on experience in designing, developing, and deploying robust web applications. From crafting intuitive user interfaces to building scalable back-end systems, I specialize in creating seamless digital experiences.
                    With expertise in front-end technologies like React, JavaScript, HTML5, and CSS3, combined with back-end frameworks such as Node.js, Express, and MySQL, I deliver end-to-end solutions that are efficient, secure, and user-friendly.

                    My skills extend to database management, cloud deployment, and API integration, ensuring that every project I work on is well-rounded and tailored to meet the specific needs of businesses and users alike.

                    I've worked on a variety of projects including AI-powered apps, e-challan systems, and ride-booking platforms, which have enhanced my ability to solve complex problems and implement scalable solutions.

                    With a focus on continuous learning and adapting to new technologies, I'm always eager to take on challenging projects that push the boundaries of web development.

                    If you're looking for a developer who can transform your ideas into impactful, real-world solutions, let's connect!
                </p>
            </div>
            <div className='my-12 mx-4 md:mx-12 shadow-lg shadow-blue-300/50 px-6 md:px-12 py-12 md:py-24 rounded-3xl header-section-3 animate-rightToLeft'>
                <h1 className='text-3xl md:text-5xl text-center text-blue-200'>Web Developer</h1>
                <p className='text-base md:text-xl text-center py-6 md:py-12 text-blue-200'>
                    As a web developer, I specialize in creating responsive, dynamic, and user-friendly websites tailored to meet your business needs. Whether you're looking for a sleek portfolio, an e-commerce platform, or a custom web application, I combine modern technologies like HTML5, CSS3, JavaScript, and frameworks such as React and Angular to bring your ideas to life. My focus is on delivering clean code, optimized performance, and exceptional user experiences, ensuring that your site not only looks great but also functions seamlessly across all devices.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-2'>
                    <div>
                        <FaAngleRight className='text-teal-400 text-xl inline-block mr-2' />
                        <pre className='font-sans text-blue-200 text-lg md:text-2xl inline-block'>Birthday: 31 July 2024</pre>
                    </div>
                    <div>
                        <FaAngleRight className='text-teal-400 text-xl inline-block mr-2' />
                        <pre className='font-sans text-blue-200 text-lg md:text-2xl inline-block'>Age: 30</pre>
                    </div>
                    <div>
                        <FaAngleRight className='text-teal-400 text-xl inline-block mr-2' />
                        <pre className='font-sans text-blue-200 text-lg md:text-2xl inline-block'>Degree: Bachelor in Computer Science</pre>
                    </div>
                    <div>
                        <FaAngleRight className='text-teal-400 text-xl inline-block mr-2' />
                        <pre className='font-sans text-blue-200 text-lg md:text-2xl inline-block'>Phone: +92 03074749297</pre>
                    </div>
                    <div>
                        <FaAngleRight className='text-teal-400 text-xl inline-block mr-2' />
                        <pre className='font-sans text-blue-200 text-lg md:text-2xl inline-block'>Email: imahmed60@gmail.com</pre>
                    </div>
                    <div>
                        <FaAngleRight className='text-teal-400 text-xl inline-block mr-2' />
                        <pre className='font-sans text-blue-200 text-lg md:text-2xl inline-block'>City: Lahore, Pakistan</pre>
                    </div>
                    <div>
                        <FaAngleRight className='text-teal-400 text-xl inline-block mr-2' />
                        <pre className='font-sans text-blue-200 text-lg md:text-2xl inline-block'>Freelance: Available</pre>
                    </div>
                </div>
            </div>
            <div className='my-12 animate-rightToLeft'>
                <h1 className='p-8 text-blue-200 text-4xl text-center'>MY SERVICES</h1>
                <div className="container mx-auto p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card
                            imgSrc={HTML}
                            title="HTML"
                            description="HTML is the standard language used to create the structure of web pages. It defines elements like headings, paragraphs, links, and images, forming the basic framework for web content."
                        />
                        <Card
                            imgSrc={CSS3}
                            title="CSS 3"
                            description="CSS3 is the latest version of CSS, used to style and layout web pages. It allows developers to add animations, transitions, and responsive designs to enhance user experience and make the web page visually appealing."
                        />
                        <Card
                            imgSrc={Bootstrap}
                            title="BOOTSTRAP"
                            description="Bootstrap is a popular front-end framework that simplifies web development by offering ready-made CSS and JavaScript components for responsive, mobile-first designs."
                        />
                        <Card
                            imgSrc={Javascript}
                            title="JAVASCRIPT"
                            description="JavaScript is a dynamic, high-level programming language that enables interactivity on web pages. It powers features like form validation, dynamic content updates, and real-time data handling."
                        />
                        <Card
                            imgSrc={Reactt}
                            title="REACT"
                            description="React is a JavaScript library developed by Facebook for building user interfaces. It emphasizes reusable components, allowing developers to create dynamic and fast web apps."
                        />
                        <Card
                            imgSrc={Angular}
                            title="ANGULAR"
                            description="Angular is a front-end framework developed by Google. It uses TypeScript and is ideal for building complex, large-scale web applications."
                        />
                    </div>
                </div>
                <div className='mt-12 p-2 animate-rightToLeft'>
                    <h1 className='text-5xl text-blue-200 text-semibold text-center p-2'>TESTIMONIALS</h1>
                    <p className='text-2xl text-blue-200 text-semibold text-center p-2 pb-12'>What people says</p>
                </div>
                <div class="snap-x flex lg:mx-24 overflow-x-auto scroll-smooth space-x-6 p-4">
                    <div class="snap-center flex-shrink-0 w-80 bg-blue-200 shadow-lg rounded-lg p-4">
                        <p class="text-lg text-gray-800">"This service was excellent! The team was incredibly professional and delivered everything on time."</p>
                        <div class="mt-4 flex items-center">
                            <img src={Review1} alt="Client photo" class="w-12 h-12 rounded-full object-cover mr-3"></img>
                            <div>
                                <p class="text-sm font-semibold text-gray-700">John Doe</p>
                                <p class="text-xs text-gray-500">CEO, Example Inc.</p>
                            </div>
                        </div>
                    </div>

                    <div class="snap-center flex-shrink-0 w-80 bg-blue-200 shadow-lg rounded-lg p-4">
                        <p class="text-lg text-gray-800">"I am so happy with the results! The website looks fantastic and functions flawlessly."</p>
                        <div class="mt-4 flex items-center">
                            <img src={Review2} alt="Client photo" class="w-12 h-12 rounded-full object-cover mr-3"></img>
                            <div>
                                <p class="text-sm font-semibold text-gray-700">Jane Smith</p>
                                <p class="text-xs text-gray-500">Marketing Director, Startup Co.</p>
                            </div>
                        </div>
                    </div>

                    <div class="snap-center flex-shrink-0 w-80 bg-blue-200 shadow-lg rounded-lg p-4">
                        <p class="text-lg text-gray-800">"Outstanding service! They went above and beyond to meet our requirements."</p>
                        <div class="mt-4 flex items-center">
                            <img src={Review3} alt="Client photo" class="w-12 h-12 rounded-full object-cover mr-3"></img>
                            <div>
                                <p class="text-sm font-semibold text-gray-700">Alice Johnson</p>
                                <p class="text-xs text-gray-500">Project Manager, Tech Solutions</p>
                            </div>
                        </div>
                    </div>

                    <div class="snap-center flex-shrink-0 w-80 bg-blue-200 shadow-lg rounded-lg p-4">
                        <p class="text-lg text-gray-800">"Fast, reliable, and great attention to detail. Highly recommended!"</p>
                        <div class="mt-4 flex items-center">
                            <img src={Review4} alt="Client photo" class="w-12 h-12 rounded-full object-cover mr-3"></img>
                            <div>
                                <p class="text-sm font-semibold text-gray-700">Michael Brown</p>
                                <p class="text-xs text-gray-500">Freelancer</p>
                            </div>
                        </div>
                    </div>

                    <div class="snap-center flex-shrink-0 w-80 bg-blue-200 shadow-lg rounded-lg p-4">
                        <p class="text-lg text-gray-800">"Their skills are impressive. Delivered on all promises, and communication was smooth."</p>
                        <div class="mt-4 flex items-center">
                            <img src={Review5} alt="Client photo" class="w-12 h-12 rounded-full object-cover mr-3"></img>
                            <div>
                                <p class="text-sm font-semibold text-gray-700">Emily Davis</p>
                                <p class="text-xs text-gray-500">Creative Lead, Design Studio</p>
                            </div>
                        </div>
                    </div>

                    <div class="snap-center flex-shrink-0 w-80 bg-blue-200 shadow-lg rounded-lg p-4">
                        <p class="text-lg text-gray-800">"Highly professional and a pleasure to work with. Will definitely collaborate again."</p>
                        <div class="mt-4 flex items-center">
                            <img src={Review6} alt="Client photo" class="w-12 h-12 rounded-full object-cover mr-3"></img>
                            <div>
                                <p class="text-sm font-semibold text-gray-700">Chris Wilson</p>
                                <p class="text-xs text-gray-500">CTO, WebDev Corp.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-12 pt-24 divide-y-4 divide-double divide-blue-200 animate-rightToLeft'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default About;
