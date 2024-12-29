import React from 'react';

const WhatToExpect: React.FC = () => {
    return (
        <section className="bg-gray-50 py-12 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-Begum font-extrabold text-gray-800 mb-4 tracking-tight">What to Expect</h2>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        From consultation to results, here’s everything you need to know about CoolSculpting® Elite.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl  text-gray-800 mb-4 font-Begum">Before Treatment</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-4">
                            <li>Maintain a healthy diet and exercise plan.</li>
                            <li>Avoid anti-inflammatories like aspirin before the procedure.</li>
                            <li>We’ll weigh you and take photos before starting treatment.</li>
                        </ul>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl  text-gray-800 mb-4 font-Begum">During Treatment</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-4">
                            <li>Sessions can take as little as 35 minutes.</li>
                            <li>Expect minimal discomfort, such as pulling and pinching.</li>
                            <li>Feel free to bring a book or laptop for entertainment.</li>
                        </ul>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl  text-gray-800 mb-4 font-Begum">After Treatment</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-4">
                            <li>Results start appearing within 3 weeks to 3 months.</li>
                            <li>Schedule a follow-up to assess your progress.</li>
                            <li>Maintain a healthy diet and exercise routine.</li>
                        </ul>
                    </div>
                </div>

                {/* Call-to-Action */}
                <div className="text-center mt-12">
                    <a
                        href="#"
                        className="inline-block px-8 py-3 text-lg font-semibold text-white bg-secondary rounded-lg hover:bg-opacity-90 transition"
                    >
                        Learn More About CoolSculpting® Elite
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WhatToExpect;
