import { PerspectiveCamera, Center, useProgress, useGLTF, useTexture, Loader} from "@react-three/drei"
import { useFrame, useThree } from '@react-three/fiber'
import { useRef, useState, Suspense } from "react"
import { Selection } from '@react-three/postprocessing'

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
    const keyBoard = useGLTF('./officeScene/keyboardUV.glb')

    const cameraPosition = [nodes.crtScreen.position.x, nodes.crtScreen.position.y - 2.77, nodes.crtScreen.position.z - 2.2]
    const cameraCRTPosition = [nodes.crtScreen.position.x, nodes.crtScreen.position.y - 2.61, nodes.crtScreen.position.z - 2.77]

    const position = [0, 0, 0]

    const cameraRef = useRef()

    let mouseX = 0
    let mouseY = 1

    let isDragging = false;

    document.addEventListener('mousedown', function(e) {
        isDragging = true
    });

    document.addEventListener('mousemove', function(e) {
        if(isDragging)
        {
            const windowHalfX = window.innerWidth / 2
            const windowHalfY = window.innerHeight / 2
            mouseX = ((e.clientX - windowHalfX) / 100) * .9
            mouseY = ((e.clientY - windowHalfY) / 100) * .9
            if (mouseY > 1.2) {
                mouseY = 1.2
            } else if (mouseY < 0.7) {
                mouseY = 0.7
            }
    
            if (mouseX > .3) {
                mouseX = .3
            } else if (mouseX < -.3) {  
                mouseX = -.3
            }
        }
    })

    document.addEventListener('mouseup', function(e) {
        isDragging = false
    });

    useFrame((state, delta) =>
    {
        if(!focus) {
        cameraRef.current.position.x += (mouseX - cameraRef.current.position.x) * delta
        cameraRef.current.position.y += (-mouseY - cameraRef.current.position.y) * delta
        cameraRef.current.position.z = -1
        cameraRef.current.lookAt(0, -1.3, -3.5)
        } else {
            cameraRef.current.position.x = 0
            cameraRef.current.position.y = -1.25
            cameraRef.current.position.z = 1
            cameraRef.current.lookAt(0, -1, -3.5)
        }
    })

    const [focus, setFocus] = useState(false)

    const [hover, setHover] = useState(null)

    function Loader() {
        const { active, progress, errors, item, loaded, total } = useProgress()
        return <Html center>{progress} % loaded</Html>
      }

    return (
        <> 
            <color args={ ['black'] } attach="background" />
            <Suspense fallback={<Loader />}>
                <Center>
                    <Selection>
                        <CrtComputer
                            nodes={nodes}
                            stickyNote1={stickyNote1}
                            stickyNote2={stickyNote2}
                            stickyNote3={stickyNote3}
                            stickyNoteBake={stickyNoteBake}
                            stickyNoteBake2={stickyNoteBake2}
                            stickyNoteBake3={stickyNoteBake3}
                            texture={textureBake1}
                            screen={screen}
                            position={position}
                            clicked={focus}
                            setClicked={setFocus}
                            hover={hover}
                            setHover={setHover}
                        />
                    </Selection>
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
                <PerspectiveCamera
                    fov={focus ? 15 : 35}
                    zoom={!focus ? 1 : 2}
                    ref={cameraRef}
                    position={[0, -1, -1]} 
                    makeDefault 
                />
            </Suspense>
        </>
    )
}