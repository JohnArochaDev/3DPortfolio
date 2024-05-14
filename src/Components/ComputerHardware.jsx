export default function ComputerHardware({ position, nodes, texture }) {

    return (
        <>
            <mesh geometry={nodes.leftSpeaker.geometry } position={position}  >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.rightSpeaker.geometry} position={position}  >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.coaster.geometry} position={position}  >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.lamp.geometry} position={position}  >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.mousePad.geometry} position={position}  >
                <meshBasicMaterial map={texture} />
            </mesh>
        </>
    )
}