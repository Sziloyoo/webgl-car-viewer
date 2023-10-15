import { folder, useControls } from 'leva'
import { MeshTransmissionMaterial } from '@react-three/drei'

export default function Window() {
    const settings = useControls('materials', {
        'window': folder({
            samples: { value: 8, min: 1, max: 16, step: 1 },
            transmission: { value: 1, min: 0, max: 1 },
            roughness: { value: 0.05, min: 0, max: 1, step: 0.01 },
            thickness: { value: 0.03, min: 0, max: 4, step: 0.01 },
            ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
            chromaticAberration: { value: 0.06, min: 0, max: 1 },
            distortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
            distortionScale: { value: 0.3, min: 0.01, max: 1, step: 0.01 },
            clearcoat: { value: 1, min: 0, max: 1 },
            color: '#ffffff'
        }, {
            collapsed: false
        })
    }, {
        collapsed: false
    })

    return <MeshTransmissionMaterial {...settings}/>
}