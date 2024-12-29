import React from 'react';
import b1 from '@/public/static/coolscultping/benefits/1.png'
import b2 from '@/public/static/coolscultping/benefits/2.png'
import b3 from '@/public/static/coolscultping/benefits/3.png'
import b4 from '@/public/static/coolscultping/benefits/4.png'

import Image from 'next/image'
const Benefits: React.FC = () => {
    return (
        <div className="bg-[#f6f4f2] py-10 md:py-20 flex justify-center text-center">
            <div className="max-w-7xl">
                <h2 className="text-2xl text-[#515b7e] md:text-3xl font-Begum font-bold mb-8">The Benefits of CoolSculpting® Elite at Ideal Image</h2>
                <div className="flex flex-col md:flex-row justify-evenly items-center space-y-4 md:space-y-0 md:space-x-8">
                    <div className="flex items-center">
                        <span className="text-3xl mr-2"><Image src={b1} alt='benefit' height={48} width={48} /></span>
                        <span className="text-base">Natural-Looking <br /> Results</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-3xl mr-2"><Image src={b2} alt='benefit' height={48} width={48} /></span>
                        <span className="text-base">Convenient & <br /> Comfortable</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-3xl mr-2"><Image src={b3} alt='benefit' height={48} width={48} /></span>
                        <span className="text-base">Top Technology</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-3xl mr-2"><Image src={b4} alt='benefit' height={48} width={48} /></span>
                        <span className="text-base">The top licensed <br /> medical professionals</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits; 