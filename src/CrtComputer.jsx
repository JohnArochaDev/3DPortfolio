export default function CrtComputer({ nodes, texture, screen }) {

    return (<>
            <mesh geometry={nodes.crtMonitor.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.crtStand.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.crtButtonPanel.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={nodes.desktop.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
            <mesh geometry={screen.nodes.crtScreen.geometry} >
                <meshBasicMaterial map={texture} />
            </mesh>
        </>
    )
}