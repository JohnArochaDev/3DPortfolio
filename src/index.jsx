import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'

import App from './Components/App'
import LoadingScreen from './Components/LoadingScreen'

const root = ReactDOM.createRoot(document.querySelector('#root'))

function Index() {

    const [remove, setRemove] = useState(false)

    return (
        <>
            <LoadingScreen remove={remove} setRemove={setRemove} />
            <Canvas gl={{ antialias: true }} >
                <Suspense fallback={null}>
                    <App remove={remove} setRemove={setRemove} />
                </Suspense>
            </Canvas>
        </>
    )
}

root.render(<Index />);