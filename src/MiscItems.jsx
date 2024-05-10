export default function MiscItems({ nodes, textureBake4, coffeeMugBake, deskBake, mouseBake, posterBake, wallBake, stickyNoteBake, stickyNoteBake2, stickyNoteBake3, stickyNote1, stickyNote2, stickyNote3, screen}) {

    return (<>
            <mesh geometry={nodes.Bulletin_Board001.geometry} >
                <meshBasicMaterial map={textureBake4} />
            </mesh>
            <mesh geometry={nodes.coffeMug.geometry} >
                <meshBasicMaterial map={coffeeMugBake} />
            </mesh>
            <mesh geometry={nodes.desk.geometry} >
                <meshBasicMaterial map={deskBake} />
            </mesh>
            <mesh geometry={nodes.mouse.geometry} >
                <meshBasicMaterial map={mouseBake} />
            </mesh>
            <mesh geometry={nodes.poster.geometry} >
                <meshBasicMaterial map={posterBake} />
            </mesh>
            <mesh geometry={nodes.walls.geometry} >
                <meshBasicMaterial map={wallBake} />
            </mesh>
            <mesh geometry={stickyNote1.geometry} >
                <meshBasicMaterial map={stickyNoteBake} />
            </mesh>
            <mesh geometry={stickyNote2.geometry} >
                <meshBasicMaterial map={stickyNoteBake2} />
            </mesh>
            <mesh geometry={stickyNote3.geometry} >
                <meshBasicMaterial map={stickyNoteBake3} />
            </mesh>
        </>
    )
}