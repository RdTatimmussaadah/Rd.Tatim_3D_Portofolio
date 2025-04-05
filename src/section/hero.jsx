import { PerspectiveCamera } from "@react-three/drei";
import Room from "../components/Room";
import { Suspense } from "react";
import CanvasLoader from "../components/canvasLoader";
import {Canvas} from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import Target from "../components/Target.jsx";
import {calculateSizes} from "../constant/index.js"
import HeroCam from "../components/HeroCam.jsx";
import { useRef } from "react";
import Button from "../components/Button.jsx";

const Hero = ()  =>{
    // const x = useControls('Room', {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationX: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationY: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationZ: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     scale: {
    //         value: 0,
    //         min: 0.1,
    //         max: 10
    //     },
    // })
    const isSmall = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery ({minWidth :768, maxWidth: 1024})

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    const lightRef = useRef();

    return(
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="absolute z-10 text-center w-full mx-auto flex flex-col sm:mt-32 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                Welcome ! I'm Timmi <span className="waving-hand">🤟</span>
                </p>

                <p className="hero_tag text-gray_gradient text-center">
                Computer Engineering student focused on tech innovation
                </p>
            </div>

            <div className="w-full h-full absolute inset-0 z-0">
                {/* <Leva/> */}
                <Canvas className="w-full h-full" shadows>
                    <Suspense fallback={<CanvasLoader/>}>

                    <PerspectiveCamera makeDefault position={[0,0,10]} fov={10}/>
                    
                    <HeroCam isMobile={isMobile} lightRef={lightRef}>
                        <Room 
                        // scale={0.08}
                        // position={[0,0,0]}
                        // rotation={[0, 280, 0]}
                        position={sizes.deskPosition}
                        rotation={[0, Math.PI/2, 0]}
                        scale={sizes.deskScale}/>
                    </HeroCam>

                        <ambientLight intensity={0.1}/>
                        {/* <directionalLight ref={lightRef} position={[10,10,10]} intensity={1}/> */}

                        <spotLight 
                            ref={lightRef} 
                            position={[0, 5, 10]} 
                            intensity={180} 
                            angle={2} 
                            penumbra={1} 
                            distance={15} 
                            color={"#ffffff"} 
                        />


                        {/* <group>
                            <Target position={sizes.targetPosition}/>
                            <ReactL position={sizes.reactLogoPosition}/>
                            <Cube position={sizes.cubePosition}/>
                            <Rings position={sizes.ringPosition}/>
                        </group> */}
                        

                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Lets Take a Look" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>
            </div>
        </section>
    )
}

export default Hero;