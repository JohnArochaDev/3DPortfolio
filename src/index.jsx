import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import App from './Components/App'
import LoadingScreen from './Components/LoadingScreen'

const root = ReactDOM.createRoot(document.querySelector('#root'))

function Index() {


    return (
        <>
            <LoadingScreen />
            <Canvas gl={{ antialias: true }} >
                {/* <Suspense fallback={null}>
                    <App />
                </Suspense> */}
            </Canvas>
        </>
    )
}

root.render(<Index />);