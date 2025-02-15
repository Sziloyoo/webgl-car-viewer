import { useTexture } from '@react-three/drei'
import { folder, useControls } from 'leva'
import * as THREE from 'three'

export default function Roof(props) {
    const { color, roughness, normalScale } = useControls('materials', {
        'roof': folder({
            color: '#1D1D1D',
            roughness:{
                value: 0.9,
                min: 0,
                max: 1,
                step: 0.01
            },
            normalScale:{
                value: 0.3,
                min: 0,
                max: 1,
                step: 0.01
            }

        }, {
            collapsed: false
        })
    }, {
        collapsed: false
    })

    const roofNormal = useTexture('./textures/roof_normal.png')
    roofNormal.colorSpace = THREE.NoColorSpace
    roofNormal.wrapS = roofNormal.wrapT = THREE.RepeatWrapping

    return <meshStandardMaterial
        color={ color }
        roughness={ roughness }
        normalMap={ roofNormal }
        normalScale={ normalScale }
        envMapIntensity={props.envMapIntensity}/>
}