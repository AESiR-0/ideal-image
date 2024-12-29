import React from 'react';
import Hero from '@/app/components/sections/Hero';
import TreatmentList from '@/app/components/sections/TreatmentList';
import Benefits from '@/app/components/sections/Benefits';
import WhyIdealImage from '@/app/components/sections/WhyIdealImage';
import HowItWorks from '@/app/components/sections/HowItWorks';
import Comparison from '@/app/components/sections/Comparison';
import WhatToExpect from '@/app/components/sections/WhatToExpect';
import HomeForm from '../components/sections/HomeForm';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import Footer from '../components/Footer';
import FAQs from '../components/FAQs';

const CoolSculpting: React.FC = () => {
    return (
        <div className='font-Halenoir text-[#424e6d]'>
            <HomeForm />
            <Hero />
            <TreatmentList />
            <Benefits />
            <WhyIdealImage />
            <HowItWorks />
            <BeforeAfterSlider page={"coolsculpting"} />
            <Comparison />
            <WhatToExpect />
            <FAQs page={"coolsculpting"} />
            <Footer />
        </div>
    );
};

export default CoolSculpting; 