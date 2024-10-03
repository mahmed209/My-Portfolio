import React from "react";
import HTML from '../assets/img/html.png';
import CSS3 from '../assets/img/CSS.png';
import Bootstrap from '../assets/img/bootstrap.png';
import Javascript from '../assets/img/javascript.png';
import Reactt from '../assets/img/react.png';
import Angular from '../assets/img/angular.png';
import Footer from './Footer';
import Experties from './Experties';

const Card = ({ imgSrc, title, description }) => {
    return (
        <div className="bg-cyan-900 shadow-md rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
            <img src={imgSrc} alt={title} className="w-auto h-40 object-cover animate-wiggle" />
            <div className="p-2">
                <h3 className="text-2xl text-blue-200 text-center font-semibold">{title}</h3>
                <p className="text-blue-200 leading-relaxed text-xl text-center py-2">{description}</p>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <div>
            <div className='header-section my-12 py-24'>
                <h1 className='text-blue-200 p-2 mx-12 text-center text-4xl'>MY SERVICES</h1>
                <p className='text-blue-200 leading-relaxed p-2 py-4 mx-12 text-center text-xl'>
                    Hi, I'm a passionate Full Stack Web Developer with a Bachelor's degree in Computer Science and hands-on experience in designing, developing, and deploying robust web applications. From crafting intuitive user interfaces to building scalable back-end systems, I specialize in creating seamless digital experiences.
                    With expertise in front-end technologies like React, JavaScript, HTML5, and CSS3, combined with back-end frameworks such as Node.js, Express, and MySQL, I deliver end-to-end solutions that are efficient, secure, and user-friendly.

                    My skills extend to database management, cloud deployment, and API integration, ensuring that every project I work on is well-rounded and tailored to meet the specific needs of businesses and users alike.

                    I've worked on a variety of projects including AI-powered apps, e-challan systems, and ride-booking platforms, which have enhanced my ability to solve complex problems and implement scalable solutions.

                    With a focus on continuous learning and adapting to new technologies, I'm always eager to take on challenging projects that push the boundaries of web development.

                    If you're looking for a developer who can transform your ideas into impactful, real-world solutions, let's connect!
                </p>
            </div>
            <div className='my-12'>
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
            </div>
            <div className="mt-12">
                <h1 className="text-6xl text-blue-200 font-bold p-4 text-center">EXPERTISE</h1>
                <Experties />
              </div>
            <div className='mt-12 pt-24 divide-y-4 divide-double divide-blue-200 animate-rightToLeft'>
                <Footer />
            </div>

        </div>
    )
}

export default Services