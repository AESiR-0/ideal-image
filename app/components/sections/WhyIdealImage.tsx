import React from 'react';
import why from '@/public/static/coolscultping/why.png'
import Image from 'next/image'
import w1 from '@/public/static/coolscultping/why/1.png'
import w2 from '@/public/static/coolscultping/why/2.png'

const WhyIdealImage: React.FC = () => {
    return (
        <div className=''>
            <div className="bg-[#0A5346] flex max-md:py-10 items-center max-md:text-2xl max-md:px-5 text-3xl justify-center w-full h-28 text-center">
                <h1 className='text-white'>Ideal Image is the <span className='italic'>Largest National Provider</span> of CoolSculpting® Elite</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center max-md:px-5">
                <div className="flex justify-center md:justify-end md:w-1/2 pr-10">
                    <Image height={600} width={600} src={why} alt="CoolSculpting Treatment" className="shadow-lg" />
                </div>
                <div className="md:w-1/3 mb-8 md:mb-0">
                    <h2 className="text-4xl max-md:mt-5 font-Begum md:text-4xl font-extrabold text-[#515b7e] mb-6">
                        Why Ideal Image for CoolSculpting® Elite?
                    </h2>
                    <div className="flex items-center">

                        <p className="text-xl md:text-2xl text-[#515b7e] mb-4 leading-relaxed">
                            As the largest CoolSculpting® Elite provider in the U.S., we have a wealth of experience freezing away unwanted fat - for good.
                        </p>
                    </div>
                    <div className="flex items-center">
                        <Image src={w1} alt="CoolSculpting Treatment" height={64} width={64} className="mr-4" />
                        <p className="text-lg md:text-xl text-[#515b7e] mb-4 leading-relaxed">
                            We use the latest CoolSculpting® Elite protocol. Our DualSculpting technique allows us to treat two areas at once, reducing treatment time to as little as 35 minutes.
                        </p>
                    </div>
                    <div className="flex items-center">
                        <Image src={w2} alt="CoolSculpting Treatment" height={64} width={64} className="mr-4" />
                        <p className="text-lg md:text-xl text-[#515b7e] leading-relaxed">
                            Every treatment plan is personalized to suit your unique needs, including the number of treatments and areas targeted for fat reduction.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyIdealImage;
