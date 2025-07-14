import AzureLogo from "../assets/azure.svg";
import SpookenLogo from "../assets/spooken.svg";
import YourCoffeLogo from "../assets/yourcoffe.svg";
import { MoveRight } from 'lucide-react';

export default function Projects() {
    return (
        <main className="font-inter p-3 text-[#272727]">
            <div>
                <div id="projects" className="border border-[#dadada] bg-gradient-to-tr from-[#efefef] to-[#f6026420] rounded-md p-3 mt-[16px] max-w-[900px] mx-auto flex max-sm:flex-wrap gap-3 shadow-sm shadow-[#f6026470]">
                    <div className="border border-[#dadada] rounded-md p-3 w-full">
                        <img src={AzureLogo} alt="Azure logo" className="mb-3" />
                        <div className="mb-4">
                            <h1 className="font-semibold bg-gradient-to-l from-[#702c47] via-[#b00b4d] to-[#f60264] text-transparent bg-clip-text text-[20px]">Azure</h1>
                            <p className="text-[14px]">A website for a company offering travel packages to the Maldives.</p>
                            <a href="https://azure-seven.vercel.app/" target="_blank" className="w-[140px] text-[14px] font-bold border border-[#f60264] p-1 mt-2 rounded-md hover:bg-[#f60264] hover:text-[#fff] flex gap-1">See my project <MoveRight size={16} /></a>
                        </div>
                        <div className="text-[12px] flex flex-wrap gap-3">
                            <div className="bg-[#f60264] p-1 rounded-md text-[#fff]" >HTML</div>
                            <div className="bg-[#f60264] p-1 rounded-md text-[#fff]" >CSS</div>
                            <div className="bg-[#f60264] p-1 rounded-md text-[#fff]" >JavaScript</div>
                            <div className="bg-[#f60264] p-1 rounded-md text-[#fff]" >UX/UI</div>
                        </div>
                    </div>
                    <div className="border border-[#dadada] rounded-md p-3 w-full">
                        <img src={SpookenLogo} alt="Spooken logo" className="mb-3" />
                        <div className="mb-4">
                            <h1 className="font-semibold bg-gradient-to-l from-[#702c47] via-[#b00b4d] to-[#f60264] text-transparent bg-clip-text text-[20px]">Spooken</h1>
                            <p className="text-[14px]">Project created by myself, focused on helping people from Brazil, Portugal or any other country to learn Spanish, French or English.</p>
                            <a href="https://spoken-web.vercel.app/" target="_blank" className="w-[140px] text-[14px] font-bold border border-[#f60264] p-1 mt-2 rounded-md hover:bg-[#f60264] hover:text-[#fff] flex gap-1">See my project <MoveRight size={16} /></a>
                        </div>
                        <div className="text-[12px] flex flex-wrap gap-3">
                            <div className="bg-[#f60264] p-1 rounded-md text-[#fff]" >HTML</div>
                            <div className="bg-[#f60264] p-1 rounded-md text-[#fff]" >TailwindCSS</div>
                            <div className="bg-[#f60264] p-1 rounded-md text-[#fff]" >JavaScript</div>
                            <div className="bg-[#f60264] p-1 rounded-md text-[#fff]" >UX/UI</div>
                            <div className="bg-[#f60264] p-1 rounded-md text-[#fff]" >React</div>
                            <div className="bg-[#f60264] p-1 rounded-md text-[#fff]" >APIs</div>
                        </div>
                    </div>
                    <div className="border border-[#dadada] rounded-md p-3 w-full">
                        <img src={YourCoffeLogo} alt="Your Coffe Logo" className="mb-3" />
                        <div className="mb-4">
                            <h1 className="font-semibold bg-gradient-to-l from-[#702c47] via-[#b00b4d] to-[#f60264] text-transparent bg-clip-text text-[20px]">YourCoffe</h1>
                            <p className="text-[14px]">A company that works in the coffee industry, selling the best coffee to the best customers.</p>
                            <a href="https://yourcoffe.vercel.app/" target="_blank" className="w-[140px] text-[14px] font-bold border border-[#f60264] p-1 mt-2 rounded-md hover:bg-[#f60264] hover:text-[#fff] flex gap-1">See my project <MoveRight size={16} /></a>
                        </div>
                        <div className="text-[12px] flex flex-wrap gap-3">
                            <div className="bg-[#f60264] p-1 rounded-md text-[#fff]" >HTML</div>
                            <div className="bg-[#f60264] p-1 rounded-md text-[#fff]" >CSS</div>
                            <div className="bg-[#f60264] p-1 rounded-md text-[#fff]" >JavaScript</div>
                            <div className="bg-[#f60264] p-1 rounded-md text-[#fff]" >UX/UI</div>
                            <div className="bg-[#f60264] p-1 rounded-md text-[#fff]" >React</div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
} 