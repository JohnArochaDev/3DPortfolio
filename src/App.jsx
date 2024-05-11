import { Center, OrbitControls, useGLTF, useTexture} from "@react-three/drei"
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from "react"
import { useState } from "react"
import * as THREE from "three"

import CrtComputer from "./CrtComputer"
import DeskClutter from "./DeskClutter"
import ComputerHardware from "./ComputerHardware"
import MiscItems from "./MiscItems"
import Terminal from "./Terminal";

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
    const screenPosition = new THREE.Vector3().copy(screen.nodes.crtScreen.position)
    const keyBoard = useGLTF('./officeScene/keyboardUV.glb')

    const position = [0, 0, 0]

    const cameraPosition = [0.001, nodes.crtScreen.position.y - 2.77, nodes.crtScreen.position.z - 2.2]
    console.log('end',cameraPosition)
    const cameraCRTPosition = [0.001, nodes.crtScreen.position.y - 2.61, nodes.crtScreen.position.z - 2.77]
    console.log('start',cameraCRTPosition)

    const [clicked, setClicked] = useState(false)

    const [target, setTarget] = useState(cameraPosition);

    const cameraRef = useRef()

    let Y
    let Z

    const diffY = cameraCRTPosition[1] - target[1]
    const diffZ = cameraCRTPosition[2] - target[2]

    useFrame(() => {

        if(clicked && target[1] < (cameraCRTPosition[1] - .001)) {
            Y = target[1] + (diffY * .05)
            Z = target[2] + (diffZ * .05)

            setTarget([target[0], Y, Z ]);
            if(target[1] >= cameraCRTPosition[1]){
                return
            }

        } else if(!clicked && (target[1] + .001) > cameraPosition[1]) {
            Y = target[1] - (diffY * .05)
            Z = target[2] - (diffZ * .05)

            setTarget([target[0], Y, Z ]);
        }
    })

    return (
        <> 
            <color args={ ['black'] } attach="background" />

                <Center>
                    <CrtComputer
                        nodes={nodes}
                        texture={textureBake1}
                        screen={screen}
                        position={position}
                        clicked={clicked}
                        setClicked={setClicked}
                    />
                    <DeskClutter
                        nodes={nodes}
                        texture={textureBake2}
                        position={position}
                    />
                    <ComputerHardware 
                        nodes={nodes}
                        texture={textureBake3}
                        position={position}
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
                        position={position}
                    />
                </Center>
                <Terminal />
                <OrbitControls 
                    // target={clicked ? cameraPosition : cameraCRTPosition}
                    ref={cameraRef}
                    target={[target[0], target[1], target[2]]}
                    // minDistance={-5}
                    maxDistance={.1}
                    minPolarAngle={(Math.PI / 2) + -.135}
                    maxPolarAngle={(Math.PI / 2) - .01}
                    minAzimuthAngle={-Math.PI / 40}
                    maxAzimuthAngle={Math.PI / 40}
                    enablePan={false}
                    rotateSpeed={.2}
                    enableDamping 
                    makeDefault
                    />
        </>
    )
}