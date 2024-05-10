export default function ComputerHardware({ nodes, texture }) {

    return (<>
            <mesh geometry={nodes.leftSpeaker.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.rightSpeaker.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.coaster.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.keyBoard.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.lamp.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.mousePad.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
        </>
    )
}