import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

const HeroCam = ({children, isMobile, lightRef}) =>{
    const groupRef = useRef();

    useFrame((state, delta)=>{
        easing.damp3(
            state.camera.position, 
            [-state.pointer.x *0.25, -state.pointer.y * 0.25, 25], 
            0.25, 
            delta
        );

        if (!isMobile && groupRef.current) {
            easing.dampE(
                groupRef.current.rotation, 
                [-state.pointer.y / 3, state.pointer.x / 5, 0], 
                0.25, 
                delta
            );
        }

        if (lightRef.current) {
            easing.damp3(
                lightRef.current.position, 
                [state.pointer.x * 10, state.pointer.y * 10, 5],
                0, 
                delta
            );
        }        
    })

    return(
        <group ref={groupRef}>
            {children}
        </group>
    )
}

export default HeroCam;