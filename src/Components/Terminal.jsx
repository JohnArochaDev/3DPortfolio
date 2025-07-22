import { Html } from "@react-three/drei"

export default function Terminal() {

    // Fix the overflow on the inlet windows XP window.
    // fix the mis-aligned text on the 'about me' command.
    

    return (
            <Html
                occlude="blending"
                transform
                wrapperClass="terminalScreen"
                distanceFactor={ .152 }
                position={[0, -1, -2.465]}
            >
                <iframe 
                    src="https://johnarocha.netlify.app/"
                    allowFullScreen
                />
            </Html>
    )
}