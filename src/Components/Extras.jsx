export default function Extras({ position, speakerCoord, speakerCoordBake, pages, pageBake }) {
    
    console.log(pages)

    return(
        <>
            <mesh geometry={speakerCoord.nodes.speakerCoord.geometry} position={position} >
                <meshBasicMaterial map={speakerCoordBake} />
            </mesh>
            <mesh geometry={pages.nodes.miscPage.geometry} position={position} >
                <meshBasicMaterial map={pageBake} />
            </mesh>

        </>
    )
}