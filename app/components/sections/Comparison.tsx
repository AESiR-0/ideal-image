import React from 'react';

const Comparison: React.FC = () => {
    return (
        <div className="bg-[#f9fafb] max-md:text-center flex justify-center py-6 md:p-12 rounded-lg shadow-lg">
            <div className="w-[75vw]">
                <h2 className="text-3xl md:text-4xl font-Begum font-extrabold text-[#3f4e6e] mb-8 text-center">CoolSculpting® Elite Comparison</h2>

                <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 gap-8">

                    {/* Comparison 1: CoolSculpting® Elite vs Liposuction */}
                    <div className="py-6 rounded-lg   bg-gray-50">
                        <h3 className="text-3xl font-bold font-Begum text-[#3f4e6e] mb-4">CoolSculpting® Elite vs Liposuction</h3>
                        
                        <p className="text-[#3f4e6e] text-xl pr-10 max-md:p-0 leading-relaxed">
                            Liposuction is a surgical fat removal procedure that involves general anesthesia and recovery time. It uses large tubes to extract fat from the body, providing immediate results, but is invasive and may require 1-2 weeks of downtime.
                        </p>
                        <p className="mt-4 text-[#3f4e6e] text-xl pr-10 max-md:p-0 leading-relaxed">
                            In contrast, CoolSculpting® Elite is a non-invasive procedure that doesn’t require surgery or downtime. It freezes fat cells, allowing for gradual and permanent fat reduction without the need for anesthesia or recovery time.
                        </p>
                    </div>

                    {/* Comparison 2: CoolSculpting® Elite vs Diet and Exercise */}
                    <div className="py-6 rounded-lg   bg-gray-50">
                        <h3 className="text-3xl font-bold font-Begum text-[#3f4e6e] mb-4">CoolSculpting® Elite vs Diet and Exercise</h3>
                        <p className="text-[#3f4e6e] text-xl leading-relaxed">
                            While a balanced diet and regular exercise are essential for overall health, they don’t always target stubborn fat cells effectively. Diet and exercise can reduce the appearance of fat, but they don’t eliminate fat cells from the body permanently.
                        </p>
                        <p className="mt-4 text-[#3f4e6e] text-xl leading-relaxed">
                            CoolSculpting® Elite works in conjunction with a healthy lifestyle by freezing and permanently eliminating fat cells. It helps enhance the results of your diet and exercise regimen, offering a more permanent solution to stubborn fat.
                        </p>
                    </div>
                </div></div>
        </div>
    );
};

export default Comparison;
