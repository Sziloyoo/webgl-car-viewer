import { useTexture } from '@react-three/drei'
import { folder, useControls } from 'leva'

export default function BrakeDisc() {
    const { color, roughness, metalness } = useControls('materials', {
        'brakeDisc': folder({
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

    const textureMap = useTexture('./textures/brake_disc.png')
    
    return <meshStandardMaterial
        color={ color }
        map={ textureMap }
        roughness={ roughness }
        metalness={ metalness }/>
}