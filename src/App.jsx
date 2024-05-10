import { OrbitControls ,useGLTF, useTexture } from "@react-three/drei"

import CrtComputer from "./CrtComputer"
import DeskClutter from "./DeskClutter"
import ComputerHardware from "./ComputerHardware"
import BulletinBoard from "./BulletinBoard"

export default function App() {

    const textureBake1 = useTexture('/textures/textureBake1.jpg')
    textureBake1.flipY = false
    const textureBake2 = useTexture('/textures/textureBake2.jpg')
    textureBake2.flipY = false
    const textureBake3 = useTexture('/textures/textureBake3.jpg')
    textureBake3.flipY = false
    const textureBake4 = useTexture('/textures/textureBake4.jpg')
    textureBake4.flipY = false

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
            <ComputerHardware 
            nodes={nodes}
            texture={textureBake3}
            />
            <BulletinBoard 
            nodes={nodes}
            texture={textureBake4}
            />
        </>
    )
}