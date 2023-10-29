import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Background from './components/Background.jsx'
import Car from './components/Car.jsx'
import { folder, useControls } from 'leva'

export default function Experience() {

    const {position_offset_y} = useControls('position', {
        'position_offset_y': folder({
            position_offset_y:{
                value: 0.14,
                min: 0,
                max: 0.25,
                step: 0.001
            }
        }, {
            collapsed: false
        })
    }, {
        collapsed: false
    })

    return <>
        <Perf position="top-left" />

        <OrbitControls enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.25} zoomSpeed={.6} minDistance={3} maxDistance={8} makeDefault />

        <Background />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.0 } />
        <ambientLight intensity={ 0.25 } />

        <Car position_offset_y={position_offset_y}/>
    </>
}