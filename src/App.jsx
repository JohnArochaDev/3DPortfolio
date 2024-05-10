import { OrbitControls ,useGLTF, useTexture } from "@react-three/drei"

import CrtComputer from "./CrtComputer"
import DeskClutter from "./DeskClutter"
import ComputerHardware from "./ComputerHardware"
import MiscItems from "./MiscItems"

export default function App() {

    const textureBake1 = useTexture('/textures/textureBake1.jpg')
    textureBake1.flipY = false

    const textureBake2 = useTexture('/textures/textureBake2.jpg')
    textureBake2.flipY = false

    const textureBake3 = useTexture('/textures/textureBake3.jpg')
    textureBake3.flipY = false

    const textureBake4 = useTexture('/textures/textureBake4.jpg')
    textureBake4.flipY = false

    const coffeeMugBake = useTexture('/textures/coffeMugBake.jpg')
    coffeeMugBake.flipY = false

    const deskBake = useTexture('/textures/deskBake.jpg')
    deskBake.flipY = false

    const mouseBake = useTexture('/textures/mouseBake.jpg')
    mouseBake.flipY = false

    const posterBake = useTexture('/textures/posterBake.jpg')
    posterBake.flipY = false

    const wallBake = useTexture('/textures/wallBake.jpg')
    wallBake.flipY = false

    const stickyNoteBake = useTexture('/textures/stickyNoteBake.jpg')
    stickyNoteBake.flipY = false

    const stickyNoteBake2 = useTexture('/textures/stickyNoteBake2.jpg')
    stickyNoteBake2.flipY = false

    const stickyNoteBake3 = useTexture('/textures/stickyNoteBake3.jpg')
    stickyNoteBake3.flipY = false

    const keyboardTexture = useTexture('/textures/keyboardBake.jpg')
    keyboardTexture.flipY = false

    const { nodes } = useGLTF('./officeScene/retroDesk.glb')
    const stickyNotes = useGLTF('./officeScene/stickyNotes.glb')
    const stickyNote1 = stickyNotes.nodes.stickyNote1
    const stickyNote2 = stickyNotes.nodes.stickyNote2
    const stickyNote3 = stickyNotes.nodes.stickyNote3

    const screen = useGLTF('./officeScene/screen.glb')

    const keyBoard = useGLTF('./officeScene/keyboardUV.glb')
    console.log(keyBoard)
    
    

    return (
        <>
            <OrbitControls makeDefault />

            <color args={ ['black'] } attach="background" />

            <CrtComputer
             nodes={nodes}
             texture={textureBake1}
             screen={screen}
            />
            <DeskClutter
             nodes={nodes}
             texture={textureBake2}
            />
            <ComputerHardware 
            nodes={nodes}
            texture={textureBake3}
            />
            <MiscItems 
            nodes={nodes}
            keyboard={keyBoard}
            stickyNote1={stickyNote1}
            stickyNote2={stickyNote2}
            stickyNote3={stickyNote3}
            textureBake4={textureBake4}
            coffeeMugBake={coffeeMugBake}
            deskBake={deskBake}
            mouseBake={mouseBake}
            posterBake={posterBake}
            wallBake={wallBake}
            stickyNoteBake={stickyNoteBake}
            stickyNoteBake2={stickyNoteBake2}
            stickyNoteBake3={stickyNoteBake3}
            keyboardTexture={keyboardTexture}
            />
        </>
    )
}