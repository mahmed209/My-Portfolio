import React from "react";

const Form = () => {
    return (
        <div className="w-full px-4 sm:px-8 lg:px-12">
            <h1 className='text-blue-200 text-center lg:text-center p-4 text-2xl sm:text-3xl lg:text-4xl lg:ml-40'>MESSAGE TO MAKE PROJECTS INTERESTING</h1>
            <form className="w-full lg:w-4/5 lg:ml-40 mt-8">
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-6">
                    <div className="md:col-span-3">
                        <label htmlFor="first-name" className="block text-left text-lg font-medium leading-6 text-blue-200">
                            First name
                        </label>
                        <div className="mt-2">
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                autoComplete="given-name"
                                className="block w-full rounded-md bg-blue-900 border-0 py-2 text-blue-200 shadow-sm ring-1 ring-inset ring-blue-200 placeholder:text-blue-200 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-md sm:text-lg"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <label htmlFor="last-name" className="block text-left text-lg font-medium leading-6 text-blue-200">
                            Last name
                        </label>
                        <div className="mt-2">
                            <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                autoComplete="family-name"
                                className="block w-full bg-blue-900 rounded-md border-0 py-2 text-blue-200 shadow-sm ring-1 ring-inset ring-blue-200 placeholder:text-blue-200 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-md sm:text-lg"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-4">
                        <label htmlFor="email" className="block text-left text-lg font-medium leading-6 text-blue-200">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full bg-blue-900 rounded-md border-0 py-2 text-blue-200 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-blue-200 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-md sm:text-lg"
                            />
                        </div>
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="message" className="block text-lg text-left font-medium leading-6 text-blue-200">
                            Message
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="block w-full bg-blue-900 rounded-md border-0 py-2 text-blue-200 shadow-sm ring-1 ring-inset ring-blue-200 placeholder:text-blue-200 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-md sm:text-lg"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                    <div className="col-span-full">
                        <button 
                            type="submit" 
                            className='w-full lg:w-auto px-8 py-2 mb-12 mt-6 lg:mt-12 text-md lg:text-lg border-blue-900 rounded-lg bg-blue-900 text-white shadow-2xl shadow-blue-900/70 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500'
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
