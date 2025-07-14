import { Github, Linkedin } from 'lucide-react';

export default function Header() {
    return (
        <nav className="text-[#272727] flex justify-evenly p-3 items-center font-inter text-[12px] text-center border-b border-[#dadada] fixed top-0 w-full z-50 bg-white">
            <div>
                <h1 className="text-[24px] font-bold bg-gradient-to-l from-[#702c47] via-[#b00b4d] to-[#f60264] text-transparent bg-clip-text">
                    ramon.dev
                </h1>
            </div>
            <div className="max-md:hidden">
                <ul className="flex gap-5 items-center text-[14px]">
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
            <div className="flex gap-3">
                <a
                    href="https://github.com/ramoncode-exe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border p-1 border-[#dadada] rounded-md hover:bg-[#e3e3e3]"
                >
                    <Github size={18} />
                </a>
                <a
                    href="https://www.linkedin.com/in/ramonprog/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border p-1 border-[#dadada] rounded-md hover:bg-[#e3e3e3]"
                >
                    <Linkedin size={18} />
                </a>
            </div>
        </nav>
    );
}
