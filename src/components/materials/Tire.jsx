import { useTexture } from '@react-three/drei'
import { folder, useControls } from 'leva'
import * as THREE from 'three'

export default function Tire(props) {
    const { color, roughness, normalScale } = useControls('materials', {
        'tire': folder({
            color: '#cbcbcb',
            roughness:{
                value: 0.5,
                min: 0,
                max: 1,
                step: 0.01
            },
            normalScale:{
                value: 0.75,
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

    const tireNormal = useTexture('./textures/tire_normal.png')
    const tireColor = useTexture('./textures/tire_color.png')
    tireNormal.colorSpace = THREE.NoColorSpace

    return <meshStandardMaterial
        color={ color }
        map={ tireColor }
        roughness={ roughness }
        normalMap={ tireNormal }
        normalScale={ normalScale }
        envMapIntensity={props.envMapIntensity}/>
}