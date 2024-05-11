import { Selection, Select, EffectComposer, Outline } from '@react-three/postprocessing'


export default function CrtComputer({ position, nodes, texture, screen, clicked, setClicked, hover, setHover }) {

    function Box(props) {
        console.log(hovered)
        return (
            <Select enabled={hovered}>
                <mesh geometry={nodes.crtMonitor.geometry} position={position} onClick={() => {setClicked(!clicked)}} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} >
                    <meshBasicMaterial map={texture} />
                </mesh>
                <mesh geometry={nodes.crtStand.geometry} position={position} onClick={() => {setClicked(!clicked)}} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} >
                    <meshBasicMaterial map={texture} />
                </mesh>
                <mesh geometry={nodes.crtButtonPanel.geometry} position={position} onClick={() => {setClicked(!clicked)}} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} >
                    <meshBasicMaterial map={texture} />
                </mesh>
                <mesh geometry={nodes.desktop.geometry} position={position} onClick={() => {setClicked(!clicked)}} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} >
                    <meshBasicMaterial map={texture} />
                </mesh>
                <mesh geometry={screen.nodes.crtScreen.geometry} position={position} onClick={() => {setClicked(!clicked)}} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} >
                    <meshBasicMaterial map={texture} />
                </mesh>
            </Select>
        )
    }


    return (<>
            {/* <mesh geometry={nodes.crtMonitor.geometry} position={position} onClick={() => {setClicked(!clicked)}} >
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
            </mesh> */}
            <Selection>
                <EffectComposer multisampling={8} autoClear={false}>
                    <Outline blur visibleEdgeColor="white" edgeStrength={100} width={1000} />
                </EffectComposer>
                <Box />
            </Selection>
        </>
    )
}