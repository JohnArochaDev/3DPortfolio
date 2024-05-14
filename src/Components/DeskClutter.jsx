export default function DeskClutter({ position, nodes, texture }) {

    return (
        <>
            <mesh geometry={nodes.mouseWire.geometry} position={position} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.floppyDisc.geometry} position={position} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.floppyDisc001.geometry} position={position} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.floppyDisc002.geometry} position={position} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.floppyDisc003.geometry} position={position} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.pages.geometry} position={position} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.pages001.geometry} position={position} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.bookCover003.geometry} position={position} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.bookCover004.geometry} position={position} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.bookCover005.geometry} position={position} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.bookCover006.geometry} position={position} >
                <meshBasicMaterial map={texture} />
            </mesh>
        </>
    )
}