import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Loader, useProgress } from '@react-three/drei'
import { Suspense } from 'react'

import App from './Components/App'

const root = ReactDOM.createRoot(document.querySelector('#root'))

function Index() {

    const { active, progress, errors, item, loaded, total } = useProgress()
    console.log('active',active)
    console.log('progress',progress)
    console.log('errors',errors)
    console.log('item',item)
    console.log('loaded',loaded)
    console.log('total',total)



    return (
        <>
            <Canvas gl={{ antialias: true }} >
                <Suspense fallback={null}>
                    <App />
                </Suspense>
            </Canvas>
        </>
    )
}

root.render(<Index />);