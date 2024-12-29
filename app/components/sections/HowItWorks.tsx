import React from 'react';
import Image from 'next/image';
import fatCells from '@/public/static/coolscultping/fat cells.png'

const HowItWorks: React.FC = () => {
    return (
        <div className="bg-[#f6f4f2] text-secondary w-full flex justify-center text-[#515b7e]border-red-400  p-28">
            <div className="max-w-7xl  flex justify-evenly  gap-10  w-full">
                <div className="w-1/2 ">
                    <h2 className="text-2xl md:text-4xl font-Begum font-bold mb-4">How does CoolSculpting® Elite work?</h2>
                    <p className="text-xl mb-4">
                        CoolSculpting® Elite technology precisely targets, cools, and destroys fat cells beneath the skin.
                        Over time, the treated fat cells shrink and are naturally metabolized then eliminated by your body.
                        With CoolSculpting® Elite, once the treated fat cells are gone, they’re gone for good.
                    </p>
                </div>
                <div className="flex flex-col -mt-10 gap-5 w-1/2">
                    <div className="flex flex-col justify-center space-x-4">
                        <h3 className="text-3xl font-bold text-center font-Begum mb-2">How fat cells are frozen</h3>
                        <Image src={fatCells} height={600} width={1000} alt='Fat cells' />
                    </div>
                    <div className="">

                        <ol className="list-decimal space-y-2 text-lg list-inside mb-4">
                            <li>Despite diet and exercise, stubborn fat cells may accumulate in the body.</li>
                            <li>CoolSculpting® technology uses controlled cooling (Cryolipolysis) to target, freeze, and kill only these fat cells.</li>
                            <li>In the weeks to follow, these fat cells are naturally eliminated from the body.</li>
                            <li>CoolSculpting® results are long-term, as treated fat cells are gone for good.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks; 