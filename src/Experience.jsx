import { Environment, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Background from './components/Background.jsx'
import Car from './components/Car.jsx'
import Studio from './components/Studio.jsx'
import { useControls } from 'leva'

export default function Experience() {

    const {envMapIntensity, dirLightStrength, ambientStrength} = useControls("lighting", {
        envMapIntensity: {value: .6, min: 0.0, max: 1.0},
        dirLightStrength: {value: .75, min: 0.0, max: 1.0},
        ambientStrength: {value: .25, min: 0.0, max: 1.0}
    })

    return <>
        <Perf position="top-left" />

        <OrbitControls enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.25} zoomSpeed={.6} minDistance={3} maxDistance={8} makeDefault />

        {/* <Background /> */}

        <Environment background files="./environment/studio.hdr"/>
        <Studio />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ dirLightStrength } />
        <ambientLight intensity={ ambientStrength } />

        <Car envMapIntensity={envMapIntensity} model="civic"/>
    </>
}