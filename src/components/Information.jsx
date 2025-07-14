import AboutImg from '../assets/about-img.svg';
import LogoHtml from '../assets/assets-skills/html.svg';
import LogoCss from '../assets/assets-skills/css.svg';
import LogoJs from '../assets/assets-skills/js.svg';
import LogoReact from '../assets/assets-skills/react.svg';
import LogoTailwind from '../assets/assets-skills/tailwind.svg';
import LogoGit from '../assets/assets-skills/git.svg';
import LogoFigma from '../assets/assets-skills/figma.svg';
import LogoUx from '../assets/assets-skills/ux.svg';

export default function Information() {
    const logos = [
        LogoHtml,
        LogoCss,
        LogoJs,
        LogoReact,
        LogoTailwind,
        LogoGit,
        LogoFigma,
        LogoUx,
    ];

    return (


        <main id='about' className="font-inter p-3 mb-[16px]">
            <div className=" items-center justify-around border border-[#dadada] bg-gradient-to-br from-[#efefef] to-[#f6026420] rounded-md p-3 mt-[16px] max-w-[900px] mx-auto flex max-sm:flex-wrap gap-3 shadow-sm shadow-[#f6026470]">
                <div>
                    <h1 className="font-semibold bg-gradient-to-l from-[#702c47] via-[#b00b4d] to-[#f60264] text-transparent bg-clip-text text-[20px]">About Me</h1>
                    <p className="max-w-[400px] mt-3">I'm a front-end developer with 2 years of experience, specialized in React, Tailwind CSS, and UX/UI practices. I'm passionate about building modern, accessible, and responsive interfaces, with a strong focus on performance, usability, and visual detail. <br />
                        <br />Throughout my journey, I’ve aimed to create unique and innovative projects that combine technology and design to deliver functional and memorable digital experiences. I'm constantly evolving, exploring new tools and approaches to craft creative and efficient solutions.</p>
                </div>
                <div>
                    <img className='max-w-[400px]' src={AboutImg} alt="About Me Img" />
                </div>
            </div>
            <div className="flex overflow-hidden w-full mt-5">
                <div id='skills' className="flex animate-scroll gap-5 w-max">
                    {[...logos, ...logos].map((logo, i) => (
                        <img key={i} className="max-w-[150px] max-md:max-w-[110px]" src={logo} alt={`logo-${i}`} />
                    ))}
                </div>
            </div>

        </main >
    )
}