"use client";

import React from "react";
import Image from "next/image";

const BotoxUnits = () => {
    const treatmentAreas = [
        { id: 1, area: "Forehead", units: "(20 Units†)", price: "$180" },
        { id: 2, area: "Frown Lines", units: "(20 Units†)", price: "$180" },
        { id: 3, area: "Crow's Feet", units: "(24 Units†)", price: "$216" },
        { id: 4, area: "Neck", units: "(50+ Units†)", price: "$450" },
    ];

    const addOnAreas = [
        { id: 5, label: "Lip Flip" },
        { id: 6, label: "Bunny Lines" },
        { id: 7, label: "Chin" },
    ];

    return (
        <div className="relative py-10">
            <div className="md:bg-[radial-gradient(circle,_rgb(235,224,210)_0%,_rgb(220,205,190)_100%)] overflow-hidden md:min-h-screen flex flex-col md:grid md:grid-cols-2 pt-10 relative">
                {/* Table Section - Shows first on mobile */}
                <div className="w-full order-1 md:order-2 px-4 flex flex-col items-center gap-8">
                    <div className="w-full max-w-lg">
                        <div className="w-full justify-center flex">
                            <h2 className="text-4xl text-center font-bold text-secondary font-Begum mb-8">
                                How Many Units Will I Need?
                            </h2>
                        </div>

                        <div className="bg-secondary px-6 md:px-6 rounded-t-lg p-3 flex gap-40 max-md:gap-28 justify-end">
                            <div className="font-semibold text-white">Units</div>
                            <div className="font-semibold text-white">Price*</div>
                        </div>
                        <div className="bg-white rounded-b-lg p-4 md:p-6 shadow-xl">
                            <div className="grid grid-cols-[auto,1fr,auto] gap-2 md:gap-4 mb-6">
                                {treatmentAreas.map(area => (
                                    <React.Fragment key={area.id}>
                                        <div className="w-7 h-7 max-md:mt-2 md:w-8 md:h-8 bg-secondary text-white rounded-full flex items-center justify-center">
                                            {area.id}
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="font-semibold text-md">{area.area}</div>
                                            <div className="md:text-md text-gray-600">{area.units}</div>
                                        </div>
                                        <div className="md:text-right text-center text-md">{area.price}</div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                        <div className="bg-transparent border-white px-4 md:px-20 py-5 border-b-2 flex flex-col items-center justify-center pt-4">
                            <div className="text-secondary font-semibold mb-2 text-center">NEW! ADD-ON AREAS*</div>
                            <div className="flex flex-wrap justify-center gap-4">
                                {addOnAreas.map(addon => (
                                    <div key={addon.id} className="flex items-center gap-2">
                                        <div className="w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-sm">
                                            {addon.id}
                                        </div>
                                        <span className="text-sm md:text-base">{addon.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-4 py-5 text-center md:text-left md:text-sm text-gray-600 space-y-1">
                            <p>*Only with qualifying memberships. Terms apply.</p>
                            <p>*Available only with the purchase of standard treatment areas: forehead, frown lines, crow's feet, and neck.</p>
                            <p>†Number of units may vary depending on individual. Results may vary.</p>
                        </div>
                    </div>
                </div>

                {/* Image Section - Shows second on mobile */}
                <div className="w-full md:w-10/12 order-2 md:order-1 mt-8 md:mt-0">
                    <Image
                        src="/static/botox/units/units_model.png"
                        alt="Botox Treatment Areas"
                        width={720}
                        height={620}
                        className="mx-auto md:mx-0 md:bottom-0 md:absolute md:left-5 pt-5 rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

// Helper function to position the indicators on the image
const getPositionForArea = (id: number) => {
    const positions = {
        1: { top: '20%', left: '50%' },
        2: { top: '30%', left: '45%' },
        3: { top: '35%', left: '35%' },
        4: { top: '70%', left: '45%' },
        5: { top: '45%', right: '45%' },
        6: { top: '40%', right: '40%' },
        7: { top: '60%', left: '50%' },
    };
    return positions[id as keyof typeof positions];
};

export default BotoxUnits; 