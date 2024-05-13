import { Html } from "@react-three/drei"

export default function Terminal() {

    return (
            <Html
                occlude="blending"
                transform
                wrapperClass="terminalScreen"
                distanceFactor={ .152 }
                position={[0, -1, -2.465]}
            >
                <iframe src="https://johnarocha.netlify.app/" />
            </Html>
    )
}