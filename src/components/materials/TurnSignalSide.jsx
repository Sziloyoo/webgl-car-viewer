import { useTexture } from '@react-three/drei'
import { folder, useControls } from 'leva'

export default function TurnSignalSide() {
    const { color, roughness, metalness } = useControls('materials', {
        'turnSignalSide': folder({
            color: '#ffffff',
            roughness:{
                value: 0.5,
                min: 0,
                max: 1,
                step: 0.01
            },
            metalness:{
                value: 0.9,
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

    const turnSignalColor = useTexture('./textures/turn_signal_side_color.jpg')
    const turnSignalNormal = useTexture('./textures/turn_signal_side_normal.png')
    
    return <meshStandardMaterial
        color={ color }
        map={ turnSignalColor }
        normalMap={ turnSignalNormal }
        roughness={ roughness }
        metalness={ metalness }/>
}