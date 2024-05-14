export default function MiscItems({ position, nodes, textureBake4, coffeeMugBake, deskBake, mouseBake, posterBake, wallBake, keyboard, keyboardTexture}) {

    return (
        <>
            <mesh geometry={nodes.Bulletin_Board001.geometry} position={position} >
                <meshBasicMaterial map={textureBake4} />
            </mesh>
            <mesh geometry={nodes.coffeMug.geometry} position={position} >
                <meshBasicMaterial map={coffeeMugBake} />
            </mesh>
            <mesh geometry={nodes.desk.geometry} position={position} >
                <meshBasicMaterial map={deskBake} />
            </mesh>
            <mesh geometry={nodes.mouse.geometry} position={position} >
                <meshBasicMaterial map={mouseBake} />
            </mesh>
            <mesh geometry={nodes.poster.geometry} position={position} >
                <meshBasicMaterial map={posterBake} />
            </mesh>
            <mesh geometry={nodes.walls.geometry} position={position} >
                <meshBasicMaterial map={wallBake} />
            </mesh>
            <mesh geometry={keyboard.nodes.keyBoard001.geometry} position={position} >
                <meshBasicMaterial map={keyboardTexture} />
            </mesh>
        </>
    )
}