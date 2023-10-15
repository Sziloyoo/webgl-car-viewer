import { useTexture } from '@react-three/drei'
import { folder, useControls } from 'leva'

export default function RearLightClear() {
    const { color, transmission, ior, reflectivity, roughness } = useControls('materials', {
        'rearLightClear': folder({
            color: '#ffffff',
            roughness:{
                value: 0.12,
                min: 0,
                max: 1,
                step: 0.01
            },
            transmission:{
                value: 0.9,
                min: 0,
                max: 1,
                step: 0.01
            },
            ior:{
                value: 1.5,
                min: 1.0,
                max: 2.33,
                step: 0.01
            },
            reflectivity:{
                value: 1.0,
                min: 0.0,
                max: 1.00,
                step: 0.01
            }
            
        }, {
            collapsed: false
        })
    }, {
        collapsed: false
    })

    const normal = useTexture('./textures/back_light_normal.png')
    normal.flipY = false

    return <meshPhysicalMaterial
        transparent= { true }
        transmission={ transmission }
        ior={ ior }
        reflectivity={ reflectivity }
        color={ color }
        roughness={ roughness }
        normalMap={ normal }/>
}