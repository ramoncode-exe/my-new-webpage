import HomeBg from "../assets/home-bg.svg";
import { MoveRight } from 'lucide-react';

export default function Home() {
    return (
        <main className="flex items-center justify-around p-3 mt-[16px] max-lg:flex-wrap-reverse font-inter">
            <div className="max-w-[500px]">
                <h1 className="text-[28px] font-bold"><span className="bg-gradient-to-l from-[#702c47] via-[#b00b4d] to-[#f60264] text-transparent bg-clip-text">Hi,</span> I'm Ramon <br /> <span className="bg-gradient-to-l from-[#702c47] via-[#b00b4d] to-[#f60264] text-transparent bg-clip-text">Front End Developer</span></h1>
                <p className="text-[14px] text-[#272727]">Building responsive UIs using React, JavaScript, HTML, CSS, and Tailwind. Strong in UX/UI and currently learning AI integration.</p>
                <div className="flex flex-row gap-3 mt-4">
                    <a className="text-[14px] bg-[#f60264] p-1 rounded-lg text-[#fff] hover:bg-[#702c47]" href="https://www.linkedin.com/in/ramonprog/">Contact</a>
                    <a className="flex items-center gap-1 text-[14px] hover:text-[#702c47]" href="https://github.com/ramoncode-exe">Projects <MoveRight size={16} /></a>
                </div>
            </div>
            <div className="max-lg:w-auto">
                <img src={HomeBg} alt="Home Image" className="max-w-[400px]" />
            </div>
        </main>
    )
}