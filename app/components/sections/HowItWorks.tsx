import React from 'react';

const HowItWorks: React.FC = () => {
    return (
        <div className="bg-white p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-Begum font-bold mb-4">How does CoolSculpting® Elite work?</h2>
            <p className="text-base mb-4">
                CoolSculpting® Elite technology precisely targets, cools, and destroys fat cells beneath the skin. 
                Over time, the treated fat cells shrink and are naturally metabolized then eliminated by your body. 
                With CoolSculpting® Elite, once the treated fat cells are gone, they’re gone for good.
            </p>
            <h3 className="text-lg font-semibold mb-2">How fat cells are frozen</h3>
            <ol className="list-decimal list-inside mb-4">
                <li>Despite diet and exercise, stubborn fat cells may accumulate in the body.</li>
                <li>CoolSculpting® technology uses controlled cooling (Cryolipolysis) to target, freeze, and kill only these fat cells.</li>
                <li>In the weeks to follow, these fat cells are naturally eliminated from the body.</li>
                <li>CoolSculpting® results are long-term, as treated fat cells are gone for good.</li>
            </ol>
            <div className="flex justify-center space-x-4">
                <img src="/path/to/image1.jpg" alt="Step 1" className="w-1/4 h-auto" />
                <img src="/path/to/image2.jpg" alt="Step 2" className="w-1/4 h-auto" />
                <img src="/path/to/image3.jpg" alt="Step 3" className="w-1/4 h-auto" />
                <img src="/path/to/image4.jpg" alt="Step 4" className="w-1/4 h-auto" />
            </div>
        </div>
    );
};

export default HowItWorks; 