import React from 'react';
import Hero from '@/app/components/sections/Hero';
import TreatmentList from '@/app/components/sections/TreatmentList';
import Benefits from '@/app/components/sections/Benefits';
import WhyIdealImage from '@/app/components/sections/WhyIdealImage';
import HowItWorks from '@/app/components/sections/HowItWorks';
import Comparison from '@/app/components/sections/Comparison';
import WhatToExpect from '@/app/components/sections/WhatToExpect';

const CoolSculpting: React.FC = () => {
    return (
        <div className='font-Halenoir'>
            <Hero />
            <TreatmentList />
            <WhyIdealImage />
            <Benefits />
            <HowItWorks />
            <Comparison />
            <WhatToExpect />
        </div>
    );
};

export default CoolSculpting; 