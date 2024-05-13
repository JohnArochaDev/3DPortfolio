import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'

import App from './App'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Canvas
            gl={{ antialias: true }} // Enable anti-aliasing
        >
            <App />
        </Canvas>
    </>
)