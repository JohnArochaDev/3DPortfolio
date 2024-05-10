import { OrbitControls ,useGLTF, useTexture } from "@react-three/drei"

import CrtComputer from "./CrtComputer"
import DeskClutter from "./DeskClutter"

export default function App() {

    const textureBake1 = useTexture('/textures/textureBake1.jpg')
    textureBake1.flipY = false
    const textureBake2 = useTexture('/textures/textureBake2.jpg')
    textureBake2.flipY = false

    const { nodes } = useGLTF('./officeScene/retroDesk.glb')
    console.log(nodes)

    return (
        <>
            <OrbitControls makeDefault />

            <color args={ ['black'] } attach="background" />

            <CrtComputer
             nodes={nodes}
             texture={textureBake1}
            />
            <DeskClutter
             nodes={nodes}
             texture={textureBake2}
            />
        </>
    )
}