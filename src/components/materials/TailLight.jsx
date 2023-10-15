import { useTexture } from '@react-three/drei'
import { folder, useControls } from 'leva'

export default function TailLight() {
    const { color, roughness, metalness } = useControls('materials', {
        'tailLight': folder({
            color: '#ffffff',
            roughness:{
                value: 0.025,
                min: 0,
                max: 1,
                step: 0.01
            },
            metalness:{
                value: 0.1,
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

    const turnSignalColor = useTexture('./textures/tail_light_color.jpg')
    
    return <meshStandardMaterial
        color={ color }
        map={ turnSignalColor }
        roughness={ roughness }
        metalness={ metalness }/>
}