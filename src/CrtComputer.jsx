import { Center } from "@react-three/drei"

export default function CrtComputer({ position, nodes, texture, screen, clicked, setClicked }) {

    return (<>
            <mesh geometry={nodes.crtMonitor.geometry} position={position} onClick={() => {setClicked(!clicked)}} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.crtStand.geometry} position={position} onClick={() => {setClicked(!clicked)}} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.crtButtonPanel.geometry} position={position} onClick={() => {setClicked(!clicked)}} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.desktop.geometry} position={position} onClick={() => {setClicked(!clicked)}} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={screen.nodes.crtScreen.geometry} position={position} onClick={() => {setClicked(!clicked)}} >
                <meshBasicMaterial map={texture} />
            </mesh>
        </>
    )
}