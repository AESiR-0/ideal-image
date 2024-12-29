import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="bg-[#f6f4f2] text-secondary p-8 md:p-16 relative mt-[6vh] md:mt-[2vh] lg:mt-2">
            {/* Background Image (optional) */}
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto ">
                <h1 className="text-2xl font-Begum md:text-3xl font-extrabold mb-6 leading-tight text-secondary">
                    Make your body goals a reality.
                </h1>
                <p className="text-xl   mb-6 ">
                    No needles, no surgery, no downtime required.
                </p>
                <p className="text-base font-thin md:text-lg mb-6 mx-auto leading-relaxed">
                    CoolSculpting® Elite uses patented cooling technology to eliminate fat cells – without surgery or downtime.
                    Thank you, science! And a special thanks to the Harvard scientists who developed this ground-breaking, fat-freezing treatment.
                </p>
                <p className="text-base font-thin md:text-lg mx-auto leading-relaxed">
                    Sometimes, stubborn fat just won't budge, no matter how hard you work out or how strict your diet is.
                    CoolSculpting® Elite targets these areas to provide noticeable and lasting results, helping you look and feel your very best.
                    Our highly trained medical and nursing professionals use advanced technology to ensure a safe, comfortable procedure, delivering results you'll absolutely love.
                </p>

                {/* Call to Action Button */}

            </div>
        </div>
    );
};

export default Hero;
