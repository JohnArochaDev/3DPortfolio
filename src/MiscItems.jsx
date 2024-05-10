export default function MiscItems({ nodes, textureBake4 }) {

    return (<>
            <mesh geometry={nodes.Bulletin_Board001.geometry} >
                <meshBasicMaterial map={textureBake4} />
            </mesh>
        </>
    )
}