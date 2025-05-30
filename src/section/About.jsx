import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";
import Tilt from 'react-parallax-tilt';


const About = () =>{
    const [hasCopied, setHasCopied]= useState(false);
    
    const handleCopy = () =>{
        navigator.clipboard.writeText(
            'timitati@upi.edu'
        );

        setHasCopied(true);
        setTimeout(()=>{
            setHasCopied(false);
        }, 2000)
    }

    return(
        <section className="c-space my-20" id="about">
            
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-10">
            {/* == grid 1 == */}
            
                    <div className="col-span-1 xl:row-span-3">
                        <div className="h-full w-full">
                            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.3} glareColor="#ffffff" glarePosition="all" scale={1.05}>
                                <div className="grid-container">
                                    <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>

                                    <div>
                                        <p className="grid-headtext">Hello, my name is Rd. Tatimmussa'adah</p>
                                        <p className="grid-subtext">I am a fourth-semester Computer Engineering student passionate about technology and innovation. I enjoy exploring fields like AI, cybersecurity, and IoT.</p>
                                    </div>
                                </div>
                            </Tilt>
                        </div>
                    </div>
                    {/*== grid 1 end == */}


                {/* == grid 2 == */}

                <div className="col-span-1 xl:row-span-3">
                    <div className="h-full w-full">
                        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.3} glareColor="#ffffff" glarePosition="all" scale={1.05} className="h-full w-full">
                            <div className="grid-container">
                                <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                                <div>
                                    <p className="grid-headtext">Skills</p>
                                    <p className="grid-subtext">I have some mastery in programming languages such as c++, java, javascript, python. In addition, I am also experienced in microcontroller projects.</p>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                </div>
                {/* == grid 2 end == */}


                {/* == grid 3 == */}
                <div className="col-span-1 xl:row-span-4">
                    <div className="h-full w-full">
                        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.3} glareColor="#ffffff" glarePosition="all" scale={1.05} className="h-full w-full">
                            <div className="grid-container">
                                <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                                    <Globe
                                        height={326}
                                        width={326}
                                        backgroundColor="rgba(0,0,0,0)"
                                        backgroundImageOpacity={0.5}
                                        showAtmosphere
                                        showGraticules
                                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                        />
                                </div>

                                <div>
                                    <p className="grid-headtext">Places</p>
                                    <p className="grid-subtext">I come from Indonesia, especially in a Regency called Bandung.</p>
                                    <a href="#contact" className="w-fit">
                                        <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                                    </a>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                </div>
                {/* == grid 3 end == */}


                {/* == grid 4 == */}

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="h-full w-full">
                        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.3} glareColor="#ffffff" glarePosition="all" scale={1.05} className="h-full w-full">
                            
                            <div className="grid-container">
                                <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                                <div>
                                    <p className="grid-headtext">Passionate About Coding</p>
                                    <p className="grid-subtext">
                                        I enjoy creating and solving problems with code. Learning new technologies and improving my skills 
                                        is something I truly love.
                                    </p>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                </div>
                {/* == grid 4 end == */}

                {/* == grid 5 == */}

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="h-full w-full">
                        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.3} glareColor="#ffffff" glarePosition="all" scale={1.05} className="h-full w-full">
                            <div className="grid-container">
                                <img
                                src="assets/grid4.png"
                                alt="grid-4"
                                className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                                />

                                <div className="space-y-2">
                                    <p className="grid-subtext text-center">Contact me</p>
                                    <div className="copy-container" onClick={handleCopy}>
                                        <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                        <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">timitati@upi.edu</p>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                </div>
                {/* == grid 5 end == */}

            </div>
            
        </section>
    )
}

export default About;