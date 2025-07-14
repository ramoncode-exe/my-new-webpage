import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className='border-t border-[#dadada] font-inter text-[#272727]'>
            <div className="flex justify-evenly p-6 max-lg:flex-col max-lg:items-center max-lg:gap-6 max-lg:text-center">
                <div>
                    <h2 className="text-[18px] font-bold bg-gradient-to-l from-[#702c47] via-[#b00b4d] to-[#f60264] text-transparent bg-clip-text">
                        Built by Ramon Patrick
                    </h2>
                    <p className='text-[14px] mt-3 max-w-[220px]'>
                        Front-end developer crafting modern interfaces with React, Tailwind and UX/UI principles.
                    </p>
                </div>

                <div>
                    <h2 className="text-[18px] font-bold bg-gradient-to-l from-[#702c47] via-[#b00b4d] to-[#f60264] text-transparent bg-clip-text">
                        Links
                    </h2>
                    <ul className="gap-5 text-[14px]">
                        <li>
                            <a href="#about" className="hover:text-[#781d42] transition-colors">About</a>
                        </li>
                        <li>
                            <a href="#skills" className="hover:text-[#781d42] transition-colors">Skills</a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-[#781d42] transition-colors">Experiences</a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-[#781d42] transition-colors">Services</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-[18px] font-bold bg-gradient-to-l from-[#702c47] via-[#b00b4d] to-[#f60264] text-transparent bg-clip-text'>
                        Contact
                    </h2>
                    <div className="flex gap-3 mt-3 justify-center">
                        <a
                            href='https://github.com/ramoncode-exe'
                            target='_blank'
                            className="border p-2 border-[#dadada] rounded-md hover:bg-[#e3e3e3]"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/ramonprog/'
                            target='_blank'
                            className="border p-2 border-[#dadada] rounded-md hover:bg-[#e3e3e3]"
                        >
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>

                <div>
                    <h2 className='text-[18px] font-bold bg-gradient-to-l from-[#702c47] via-[#b00b4d] to-[#f60264] text-transparent bg-clip-text'>
                        I used:
                    </h2>
                    <ul className="text-[14px] mt-3 space-y-1">
                        <li>React</li>
                        <li>Tailwind CSS</li>
                        <li>UX/UI Design</li>
                    </ul>
                </div>
            </div>

            <div className='p-3 bg-[#702c47] text-white'>
                <p className='text-center text-[12px]'>
                    © 2025 Ramon Patrick — All rights reserved.
                </p>
            </div>
        </footer>
    );
}
