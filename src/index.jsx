import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'

import App from './Components/App'
import LoadingScreen from './Components/LoadingScreen'
import Startup from './Components/Startup'

const root = ReactDOM.createRoot(document.querySelector('#root'))

function Index() {

    const [loaded, setLoaded] = useState(false)


    return (
        <>
        {loaded ? <Startup loaded={loaded} setLoaded={setLoaded}  /> : null}
            <LoadingScreen/>
            <Canvas gl={{ antialias: true }} >
                <Suspense fallback={null}>
                    <App />
                </Suspense>
            </Canvas>
        </>
    )
}

root.render(<Index />);