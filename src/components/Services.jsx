import { Laptop, Brush, BrainCircuit } from 'lucide-react';

export default function Services() {
    return (
        <main className="font-inter bg-[#702c47] text-[#fff] p-3 mt-[16px] mb-[16px]">
            <div id='services' className="mx-auto flex flex-col items-center max-w-[1280px] p-3 mt-5 max-lg:flex-wrap gap-3 max-lg:justify-center">
                <div className="max-w-[800px] text-center items-center mx-auto">
                    <h1 className="text-[26px] mb-3 font-bold text-[#fff]">What can I do for you?</h1>
                    <p className="text-[16px] mb-3">I leverage my experience in technology to create digital strategies and experiences that accelerate growth, expand customer bases, and raise service excellence.</p>
                </div>
                <div className="max-w-[800px] flex gap-3 max-lg:flex-wrap">
                    <div className="border border-[#dadada] rounded-md p-3 w-full mb-3 shadow-sm shadow-[#00000070]">
                        <p className='p-2 bg-[#de834d] max-w-[35px] items-center rounded-md mb-3' ><Laptop size={18} /></p>
                        <h2 className="text-[18px] font-semibold mb-3">Creating Interfaces with React</h2>
                        <p className="text-[14px]">I build modern, scalable, and responsive interfaces using React, with a strong focus on performance, usability, and visual consistency.</p>
                    </div>
                    <div className="border border-[#dadada] rounded-md p-3 w-full mb-3 shadow-sm shadow-[#00000070]">
                        <p className='p-2 bg-[#de834d] max-w-[35px] items-center rounded-md mb-3' ><Brush size={18} /></p>
                        <h2 className="text-[18px] font-semibold mb-3">UX/UI Designer</h2>
                        <p className="text-[14px]">I design user-centered digital experiences with intuitive, accessible, and visually engaging interfaces that connect people and brands.</p>
                    </div>
                    <div className="border border-[#dadada] rounded-md p-3 w-full mb-3 shadow-sm shadow-[#00000070]">
                        <p className='p-2 bg-[#de834d] w-[35px] items-center rounded-md mb-3' ><BrainCircuit size={18} /></p>
                        <h2 className="text-[18px] font-semibold mb-3">AI Integration</h2>
                        <p className="text-[14px]">I integrate AI solutions into digital products to automate processes, generate insights, and deliver smarter, more personalized user experiences.</p>
                    </div>
                </div>
            </div>

        </main >
    )
}