import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';

export default function Header() {

    return (
        <nav className="text-[#272727] flex justify-evenly p-3 items-center font-inter text-[12px] text-center border-b border-[#dadada]">
            <div>
                <h1 className="text-[22px] font-bold bg-gradient-to-l from-[#702c47] via-[#b00b4d] to-[#f60264] text-transparent bg-clip-text">ramon.dev</h1>
            </div>
            <div className="max-md:hidden">
                <ul className="flex gap-3 items-center">
                    <li className="hover:text-[#781d42]">About</li>
                    <li className="hover:text-[#781d42]">Skills</li>
                    <li className="hover:text-[#781d42]">Experiences</li>
                    <li className="hover:text-[#781d42]">Services</li>
                </ul>
            </div>
            <div className="flex gap-3">
                <a href='https://github.com/ramoncode-exe' target='_blank' className="border p-1 border-[#dadada] rounded-md hover:bg-[#e3e3e3]"><Github size={18} /></a>
                <a href='https://www.linkedin.com/in/ramonprog/' target='_blank' className="border p-1 border-[#dadada] rounded-md hover:bg-[#e3e3e3]"><Linkedin size={18} /></a>
            </div>
        </nav>
    )
}