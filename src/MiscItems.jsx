export default function MiscItems({ position, nodes, textureBake4, coffeeMugBake, deskBake, mouseBake, posterBake, wallBake, stickyNoteBake, stickyNoteBake2, stickyNoteBake3, stickyNote1, stickyNote2, stickyNote3, screen, keyboard, keyboardTexture}) {

    return (<>
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
            <mesh geometry={stickyNote1.geometry} position={position} >
                <meshBasicMaterial map={stickyNoteBake} />
            </mesh>
            <mesh geometry={stickyNote2.geometry} position={position} >
                <meshBasicMaterial map={stickyNoteBake2} />
            </mesh>
            <mesh geometry={stickyNote3.geometry} position={position} >
                <meshBasicMaterial map={stickyNoteBake3} />
            </mesh>
            <mesh geometry={keyboard.nodes.keyBoard001.geometry} position={position} >
                <meshBasicMaterial map={keyboardTexture} />
            </mesh>
        </>
    )
}