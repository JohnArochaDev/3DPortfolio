export default function BulletinBoard({ nodes, texture }) {

    return (<>
            <mesh geometry={nodes.Bulletin_Board001.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
        </>
    )
}