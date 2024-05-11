import { Selection, Select, EffectComposer, Outline } from '@react-three/postprocessing'


export default function CrtComputer({ position, nodes, texture, screen, clicked, setClicked, hover, setHover }) {

    function Box(props) {
        console.log(hover)
        return (
            <Select enabled={hover}>
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
            <Selection>
                <EffectComposer multisampling={8} autoClear={false}>
                    <Outline blur visibleEdgeColor="#0D2527" edgeStrength={500} width={5000}  />
                </EffectComposer>
                <Box />
            </Selection>
        </>
    )
}