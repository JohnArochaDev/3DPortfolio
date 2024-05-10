import { Html } from "@react-three/drei"

export default function Terminal({screenPosition}) {

    return (
            <Html
            transform
            wrapperClass="terminalScreen"
            distanceFactor={ .15 }
            position={[0, -1, -2.465]}
            >
                <iframe src="https://johnarocha.netlify.app/" />
            </Html>
    )
}