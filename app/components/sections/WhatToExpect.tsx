import Link from 'next/link';
import React from 'react';

const WhatToExpect: React.FC = () => {
    return (
        <section className="bg-gray-50 py-12 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-Begum font-extrabold text-[#3f4e6e] mb-4 tracking-tight">What to Expect</h2>
                    <p className="text-xl text-[#3f4e6e] leading-relaxed max-w-2xl mx-auto">
                        From consultation to results, here's everything you need to know about CoolSculpting® Elite.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="bg-white shadow-lg rounded-lg ">
                        <div className="p-6">
                            <h3 className="text-3xl text-center font-bold text-[#3f4e6e] mb-4 font-Begum">Before Treatment</h3>
                            <ul className="text-center text-lg text-[#3f4e6e] space-y-10">
                                <li>Maintain a healthy diet and exercise plan.</li>
                                <li>Avoid anti-inflammatories like aspirin before the procedure.</li>
                                <li>We'll weigh you and take photos before starting treatment.</li>
                            </ul>
                        </div>
                        <div className="bg-[#abc1c4] h-5 w-full" ></div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white text-center shadow-lg rounded-lg ">
                        <div className="p-6">
                            <h3 className="text-3xl font-bold  text-[#3f4e6e] mb-4 font-Begum">During Treatment</h3>
                            <ul className="text-center text-lg text-[#3f4e6e] space-y-10">
                                <li>Sessions can take as little as 35 minutes.</li>
                                <li>Expect minimal discomfort, such as pulling and pinching.</li>
                                <li>Feel free to bring a book or laptop for entertainment.</li>
                            </ul>
                        </div>
                        <div className="bg-[#abc1c4] h-5 w-full" ></div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white text-center shadow-lg rounded-lg ">
                        <div className="p-6">
                            <h3 className="text-3xl  font-bold text-[#3f4e6e] mb-4 font-Begum">After Treatment</h3>
                            <ul className="text-center text-lg text-[#3f4e6e] space-y-10">
                                <li>Results start appearing within 3 weeks to 3 months.</li>
                                <li>Schedule a follow-up to assess your progress.</li>
                                <li>Maintain a healthy diet and exercise routine.</li>
                            </ul>
                        </div>
                        <div className="bg-[#abc1c4] h-5 w-full" ></div>
                    </div>
                </div>

                {/* Call-to-Action */}
                <div className="text-center mt-12">
                    <Link
                        href="#home"
                        className="inline-block px-8 py-3 bg-[#3f4e6e] text-lg font-semibold text-[#f6f4f2] hover:bg-[#f6f4f2] 
                        hover:text-[#3f4e6e] rounded-lg hover:scale-95 duration-300 underline-offset-2 transition"
                    >Claim upto 85% off
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhatToExpect;
