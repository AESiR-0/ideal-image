import Image from 'next/image';
import React from 'react';
import CoolSculptingImage from '@/public/static/coolscultping/section-two.jpeg'; // Adjust the path as per your project structure

export default function TreatmentList() {
    const treatments = [
        'Stomach and Abdomen',
        'Thighs',
        'Arms',
        'Love Handles and Flanks',
        'Back Bulge and Bra Area',
        'Under Buttocks (Banana Roll)',
        'Double Chin',
    ];

    return (
        <section className="bg-gray-100 py-10 px-5">
            <div className="max-w-7xl font-Halenoir mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Content Section */}
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-Begum lg:text-4xl font-bold mb-4 text-secondary">
                        What can we treat with CoolSculpting® Elite?
                    </h2>
                    <ul className="text-gray-600 list-none text-xl pt-5 space-y-4">
                        {treatments.map((item, index) => (
                            <li key={index} className="flex list-none items-center gap-3">
                                <span className="inline-block  list-none h-2.5 bg-primary rounded-full"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Image Section */}
                <div className="relative w-full  ">
                    <Image
                        src={CoolSculptingImage}
                        alt="CoolSculpting Elite"
                        className="rounded-lg "
                        height={512}
                        width={512}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
