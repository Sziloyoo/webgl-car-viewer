import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'

import Background from './components/Background.jsx'
import Car from './components/Car.jsx'

export default function Experience() {
    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <Background />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <Car />

{/*         <mesh receiveShadow position-y={ -0.15 } rotation-x={ - Math.PI * 0.5 } scale={ 3 }>
            <circleGeometry />
            <meshStandardMaterial color="orange" />
        </mesh> */}
    </>
}