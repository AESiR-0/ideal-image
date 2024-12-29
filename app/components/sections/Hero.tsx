import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="bg-primary text-gray-500 p-8 md:p-16 relative">
            {/* Background Image (optional) */}
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}></div>
            
            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <h1 className="text-4xl font-Begum md:text-5xl font-extrabold mb-6 leading-tight text-secondary">
                    Make your body goals a reality.
                </h1>
                <p className="text-lg md:text-xl mb-6 font-medium">
                    No needles, no surgery, no downtime required.
                </p>
                <p className="text-base md:text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
                    CoolSculpting® Elite uses patented cooling technology to eliminate fat cells – without surgery or downtime. 
                    Thank you, science! And a special thanks to the Harvard scientists who developed this ground-breaking, fat-freezing treatment.
                </p>
                <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
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
