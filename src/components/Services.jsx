import { Laptop, Brush, BrainCircuit } from 'lucide-react';

export default function Services() {
    return (
        <main className="font-inter">
            <div className="mx-auto flex items-center max-w-[900px] p-3 mt-5 max-lg:flex-wrap gap-3 max-lg:justify-center">
                <div className="max-w-[400px]">
                    <h1 className="text-[22px] mb-3 font-bold bg-gradient-to-l from-[#702c47] via-[#b00b4d] to-[#f60264] text-transparent bg-clip-text">What can I do for you?</h1>
                    <p className="text-[12px] mb-3">I leverage my experience in technology to create digital strategies and experiences that accelerate growth, expand customer bases, and raise service excellence.</p>
                    <div className="flex gap-3 text-center items-center mt-4">
                        <div className="bg-[#781d42] text-[#ebebeb] p-1 w-[90px] rounded-lg shadow-sm shadow-[#781d42] max-md:w-[70px] ">
                            <span className="text-[12px] max-md:text-[10px]"><span className="text-[20px]  max-md:text-[18px] font-bold">20+</span> <br /> Projects</span>
                        </div>
                        <div className="bg-[#781d42] text-[#ebebeb] p-1 w-[90px] rounded-lg shadow-sm shadow-[#781d42] max-md:w-[70px] ">
                            <span className="text-[12px] max-md:text-[10px]"><span className="text-[20px]  max-md:text-[18px] font-bold">99%</span> <br /> Satisfaction</span>
                        </div>
                        <div className="bg-[#781d42] text-[#ebebeb] p-1 w-[90px] rounded-lg shadow-sm shadow-[#781d42] max-md:w-[70px] ">
                            <span className="text-[12px] max-md:text-[10px]"><span className="text-[20px]  max-md:text-[18px] font-bold">2+</span> <br /> Experiences</span>
                        </div>
                    </div>
                </div>
                <div className="max-w-[400px]">
                    <div className="border border-[#dadada] rounded-md p-3 w-full mb-3">
                        <p className='p-2 bg-[#de834d] max-w-[35px] items-center rounded-md mb-3' ><Laptop size={18} /></p>
                        <h2 className="text-[16px] font-semibold mb-3">Creating Interfaces with React</h2>
                        <p className="text-[12px]">I build modern, scalable, and responsive interfaces using React, with a strong focus on performance, usability, and visual consistency.</p>
                    </div>
                    <div className="border border-[#dadada] rounded-md p-3 w-full mb-3">
                        <p className='p-2 bg-[#de834d] max-w-[35px] items-center rounded-md mb-3' ><Brush size={18} /></p>
                        <h2 className="text-[16px] font-semibold mb-3">UX/UI Designer</h2>
                        <p className="text-[12px]">I design user-centered digital experiences with intuitive, accessible, and visually engaging interfaces that connect people and brands.</p>
                    </div>
                    <div className="border border-[#dadada] rounded-md p-3 w-full mb-3">
                        <p className='p-2 bg-[#de834d] w-[35px] items-center rounded-md mb-3' ><BrainCircuit size={18} /></p>
                        <h2 className="text-[16px] font-semibold mb-3">AI Integration</h2>
                        <p className="text-[12px]">I integrate AI solutions into digital products to automate processes, generate insights, and deliver smarter, more personalized user experiences.</p>
                    </div>
                </div>
            </div>

        </main >
    )
}