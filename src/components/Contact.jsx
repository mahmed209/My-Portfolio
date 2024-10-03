import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaSkype } from 'react-icons/fa';
import { SiXing } from 'react-icons/si';

const Contact = () => {
    return (
        <div className="text-white py-16 px-8 mx-12 animate-topToBottom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-8">
                <div className="flex items-center">
                    <FaMapMarkerAlt className="text-yellow-500 text-3xl mr-4 animate-wiggle" />
                    <div>
                        <h3 className="text-xl font-bold">Address</h3>
                        <p className="text-md">Lahore, Pakistan</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <FaPhoneAlt className="text-yellow-500 text-3xl mr-4 animate-wiggle" />
                    <div>
                        <h3 className="text-xl font-bold">Call Me</h3>
                        <p className="text-md">+92 03074749297</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <FaEnvelope className="text-yellow-500 text-3xl mr-4 animate-wiggle" />
                    <div>
                        <h3 className="text-xl font-bold">Email Us</h3>
                        <p className="text-md">imahmed60@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <SiXing className="text-yellow-500 text-3xl mr-4 animate-wiggle" />
                    <div>
                        <h3 className="text-xl font-bold">Social Profiles</h3>
                        <div className="flex space-x-4 pt-2">
                            <FaFacebook className="text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500 hover:text-green-500" />
                            <FaInstagram className="text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500 hover:text-green-500" />
                            <FaSkype className="text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500 hover:text-green-500" />
                            <FaLinkedin className="text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500 hover:text-green-500" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <input
                    className="bg-gray-800 text-white p-4 rounded-md outline-none focus:ring-2 focus:ring-green-500"
                    type="text"
                    placeholder="Your Name"
                />
                <input
                    className="bg-gray-800 text-white p-4 rounded-md outline-none focus:ring-2 focus:ring-green-500"
                    type="email"
                    placeholder="Your Email"
                />
                <input
                    className="bg-gray-800 text-white p-4 rounded-md col-span-2 outline-none focus:ring-2 focus:ring-green-500"
                    type="text"
                    placeholder="Subject"
                />
                <textarea
                    className="bg-gray-800 text-white p-4 rounded-md col-span-2 outline-none focus:ring-2 focus:ring-green-500"
                    rows="5"
                    placeholder="Message"
                />
                <button
                    type="submit"
                    className='w-1/2 lg:w-1/2 ml-2 px-8 py-2 mb-4 mt-6 lg:mt-12 text-md lg:text-lg border-yellow-500 rounded-lg bg-yellow-500 text-white hover:bg-green-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500'
                >
                    Send Message
                </button>
            </div>
        </div>
    );
};

export default Contact;
