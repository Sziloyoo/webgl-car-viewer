import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'

import Background from './components/Background.jsx'
import Car from './components/Car.jsx'

export default function Experience() {
    return <>
        <Perf position="top-left" />

        <OrbitControls enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.25} makeDefault />

        <Background />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.0 } />
        <ambientLight intensity={ 0.25 } />

        <Car />
    </>
}