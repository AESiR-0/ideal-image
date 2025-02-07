import React from 'react';

const BotoxHero: React.FC = () => {
    const benefits = [
        {
            text: "Age-defying: Botox® helps improve the appearance of wrinkles.",
            icon: "✓"
        },
        {
            text: "Non-invasive, no surgery, no downtime.",
            icon: "✓"
        },
        {
            text: "Get results that last for 3-6 months.",
            icon: "✓"
        },
        {
            text: "Administered by highly-trained medical professionals and nurse practitioners.",
            icon: "✓"
        },
        {
            text: "Clinically proven to temporarily relax the muscles that cause lines on the forehead, around eyes (crow's feet), dimples on the chin, and to create a lip flip.",
            icon: "✓"
        },
    ];

    return (
        <div className="text-secondary font-Begum pb-12 py-24 px-4">
            <div className="container max-md:mt-10 mx-auto max-w-6xl">
                <h1 className="text-3xl  md:text-4xl font-bold mb-4 text-center">
                    Frown Lines? Kick 'Em To The Curb.
                </h1>
                <p className="text-xl md:text-2xl mb-12 text-center">
                    A non-invasive injectable that gets rid of wrinkles.
                </p>

                <div className="flex flex-col max-md:text-center px-10 md:flex-row md:gap-5 md:items-center justify-between max-w-6xl mx-auto">
                    <ul className="flex flex-col pr-0 md:pr-10 gap-4 w-full md:w-1/2">
                        {benefits.slice(0, 3).map((benefit, index) => (
                            <li key={index} className="text-lg md:text-xl list-disc">{benefit.text}</li>
                        ))}
                    </ul>
                    <ul className="flex flex-col gap-4 w-full md:w-1/2">
                        {benefits.slice(3).map((benefit, index) => (
                            <li key={index} className="text-lg md:text-xl list-disc">{benefit.text}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BotoxHero;