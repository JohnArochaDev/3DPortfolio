export default function DeskClutter({ nodes, texture }) {

    return (<>
            <mesh geometry={nodes.mouseWire.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.floppyDisc.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.floppyDisc001.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.floppyDisc002.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.floppyDisc003.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.pages.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.pages001.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.bookCover003.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.bookCover004.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.bookCover005.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.bookCover006.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
    </>
    )
}